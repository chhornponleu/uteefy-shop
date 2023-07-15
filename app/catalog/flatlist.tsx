import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { faker } from '@faker-js/faker';
import { Image } from "expo-image";
import { Stack, useRouter } from "expo-router";
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { FlatList, Platform, Pressable, RefreshControl, ScrollView, StyleSheet, TouchableOpacity, useWindowDimensions, View } from "react-native";
import Animated, { interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { } from 'react-native-svg';
import { Box, Card } from "../../components/containers";
import { Text } from "../../components/typo";
import { colors } from "../../commons/colors";

const ReanimatedFlatList = Animated.createAnimatedComponent(FlatList);

type Props = {};

const store = {
    name: faker.company.name(),
    description: faker.company.catchPhrase(),
    cover: faker.image.urlPicsumPhotos(),
}
const popularList = new Array(8).fill(0).map((_, i) => ({
    image: faker.image.urlPicsumPhotos(undefined),
    title: faker.lorem.words(5),
    description: faker.lorem.words(10),
    price: faker.commerce.price()
}));

const menus = [
    { cat_id: -1, cat_name: 'Popular', items: popularList, isFeatured: true, },
    ...new Array(5).fill(0).map((_, i) => ({
        cat_id: i,
        cat_name: faker.lorem.words(2),
        items: new Array(Math.floor(Math.random() * 15) + 5).fill(0).map((_, i) => ({
            image: faker.image.urlPicsumPhotos(),
            title: faker.lorem.words(5),
            description: faker.lorem.words(10),
            price: faker.commerce.price()
        }))
    }))
];
// flat menus's cat_name and itmes using reduce
const sectionData = menus.reduce((acc, cur) => {
    acc.push(cur.cat_name);
    if ((cur as any).isFeatured) {
        acc.push(cur as any);
    } else {
        acc = acc.concat(cur.items);
    }
    return acc;
}, ['categories'] as (string | typeof popularList[0])[]);

const headerIndexes = sectionData.map((item, index) => {
    if (typeof item === 'string') {
        return index;
    }
    return -1;
}).filter(i => i >= 0);

let id = 0;
type CategoriesRef = {
    scrollToIndex: (params: {
        animated?: boolean | null | undefined;
        index: number;
        viewOffset?: number | undefined;
        viewPosition?: number | undefined;
    }) => void
}

const Categories = forwardRef(function Categories(props: {
    onPress: (index: number) => void,
    onMorePress?: () => void,
    activeCategoryIndex: number,
    target?: string;
}, ref: React.ForwardedRef<CategoriesRef>) {
    const categoryRef = useRef<FlatList<any>>(null)
    const [active, setActive] = useState(props.activeCategoryIndex || 0)

    const scrolling = useRef(false);
    const lastTimeout = useRef<any>()

    useImperativeHandle(ref, () => ({
        scrollToIndex: (params) => {
            if (params.index >= 0) {
                lastTimeout.current && clearTimeout(lastTimeout.current);
                lastTimeout.current = setTimeout(() => {
                    categoryRef.current?.scrollToIndex({
                        ...params,
                        // viewOffset: 16,
                        viewPosition: 0.5
                    });
                    setActive(params.index)
                }, 300);
            }
        }
    }), [])

    return (
        <Box flex row>
            <Box flex>
                <FlatList
                    ref={categoryRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={headerIndexes as number[]}
                    renderItem={({ item, index }) => {
                        const isActive = active === index;
                        return (
                            <Pressable
                                onPress={() => {
                                    setActive(index);
                                    props.onPress(index);
                                }}
                            >
                                <Box
                                    bg={isActive ? colors.black : undefined}
                                    px={10}
                                    py={6}
                                    border={{ radius: 10 }}
                                    ml={index === 0 ? 16 : 0}
                                    mr={index >= menus.length ? 60 : 0}
                                >
                                    <Text color={colors[isActive ? 'white' : 'black']}>{sectionData[item] as string}</Text>
                                </Box>
                            </Pressable>
                        )
                    }}
                    onMomentumScrollEnd={(e) => {
                        scrolling.current = false;
                    }}
                    onScrollAnimationEnd={() => {
                        scrolling.current = false;
                    }}
                />

            </Box>
            {props.onMorePress ? (
                <Pressable
                    onPress={props.onMorePress}
                    style={{ position: 'absolute', top: 0, right: 0, bottom: 0, backgroundColor: colors.white, }}
                >
                    <Box py={8} px={16}>
                        <AntDesign name="down" size={18} color="black" />
                    </Box>
                </Pressable>
            ) : null}
        </Box>
    )
})

export default function CatalogIndex({ }: Props) {
    const { width, height } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const router = useRouter();

    const [state, _setState] = useState({ loading: false, activeCategoryIndex: 0 });
    const setState = (newState: Partial<typeof state>) => _setState({ ...state, ...newState });

    const headerRef = useRef<CategoriesRef>(null);
    const listRef = useRef<FlatList>(null);
    const listScrolling = useRef(false);
    const [showAllCategories, setShowAllCategories] = useState(false);

    const scrollY = useSharedValue(0);
    const scrolling = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler({
        onScroll(event) {
            scrollY.value = event.contentOffset.y;
        },
        onBeginDrag() {
            scrolling.value = 1;
        },
        onEndDrag() {
            scrolling.value = 0;
        },

    })

    const [categoryTop, setCategoryTop] = useState(0);
    const imageCoverHeight = width * 0.5;
    const headerHeight = insets.top + (Platform.select({ web: 60, default: 50 }));
    const headerContainerStyle = useAnimatedStyle(() => {
        'worklet';
        return {
            // transform: [{ translateY: scrollY.value < top ? scrollY.value : top }],
            backgroundColor: interpolateColor(scrollY.value, [0, headerHeight], ['rgba(255,255,255,0)', 'rgba(255,255,255,1)'])
        }
    }, [])
    const headerTitleStyle = useAnimatedStyle(() => {
        'worklet';
        return {
            // transform: [{ translateY: scrollY.value < top ? scrollY.value : top }],
            color: interpolateColor(scrollY.value, [headerHeight / 2, headerHeight], ['rgba(0,0,0,0)', 'rgba(0,0,0,1)']),
        }
    }, [])

    const headerBorderTopStyle = useAnimatedStyle(() => {
        'worklet';
        return {
            borderColor: interpolateColor(scrollY.value, [0, categoryTop + headerHeight + 10, categoryTop + headerHeight + 20], ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', colors.gray[300]])
        }
    }, [])

    const headerCoverStyle = useAnimatedStyle(() => {
        'worklet';
        return {
            transform: [
                { translateY: scrollY.value < 0 ? -scrollY.value / 2 : -scrollY.value },
                { scale: scrollY.value < 0 ? (imageCoverHeight + Math.abs(scrollY.value)) / imageCoverHeight : 1 },
            ],
        }
    });
    const footerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: withTiming(scrolling.value * 200, {
                        duration: 300,
                        // easing: Easing.inOut(Easing.ease),
                    }),
                },
            ],
        };
    });

    function handleScrollToIndex(index: number) {
        listScrolling.current = true;

        listRef.current?.scrollToIndex({
            index: headerIndexes[index],
            animated: true,
            viewOffset: headerHeight - insets.top,
        })
        headerRef.current?.scrollToIndex({
            index: index,
            animated: false,
        })
        setState({ activeCategoryIndex: index })

    }

    const onViewableItemsChanged = useRef((info: any) => {
        if (listScrolling.current) return;
        let active = info.viewableItems.find((i: any) => i.isViewable)?.index;
        const nextIndex = headerIndexes.findIndex(i => i >= active!);
        if (nextIndex === -1) return;
        headerRef.current?.scrollToIndex({
            index: nextIndex,
            animated: false,
        })
        setState({ activeCategoryIndex: nextIndex })
    }).current



    function openItem(item: any) {
        router.push(`/catalog/detail/${item.id || 'tmp'}`)
    }

    return (
        <Box flex bg={colors.white}>
            <Stack.Screen options={{ headerShown: false, }} />
            <Animated.View
                style={[
                    {
                        zIndex: 10, position: 'absolute', top: 0, left: 0, right: 0,
                        height: headerHeight,
                        backgroundColor: 'white',
                        paddingTop: insets.top || 16,
                        paddingHorizontal: 16,
                    },
                    headerContainerStyle
                ]}
            >
                <Box flex={{ direction: 'row', items: "center" }}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Box flex={{ justify: "center" }} border={{ radius: 100 }} height={40} w={40}  >
                            <AntDesign name="arrowleft" size={26} color={colors.black} style={{ textShadowColor: colors.white, textShadowRadius: 2, ...Platform.OS !== 'web' ? { shadowOffset: { height: 2, width: 2 } } : {} }} />
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flex: 1, marginHorizontal: 16 }}
                        onPress={() => {
                            listScrolling.current = true;
                            setTimeout(() => {
                                headerRef.current?.scrollToIndex({ index: 0, animated: true });
                            }, 100);
                            listRef.current?.scrollToOffset({ offset: 0, animated: true });
                        }}
                    >
                        <Animated.Text numberOfLines={1} style={headerTitleStyle}>{store.name} {store.name} {store.name} {store.name} {store.name}</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Box flex={{ justify: "center", items: "center" }} border={{ radius: 100 }} height={40} w={40} >
                            <AntDesign name="sharealt" size={26} style={{ textShadowColor: colors.white, textShadowRadius: 2, ...Platform.OS !== 'web' ? { shadowOffset: { height: 2, width: 2 } } : {} }} />
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Animated.View>
            <Animated.View style={[
                { height: width * 0.5, position: 'absolute', top: 0, left: 0, right: 0 },
                headerCoverStyle,
            ]}>
                <Image source={{ uri: store.cover }} style={{ flex: 1 }} />
            </Animated.View>

            <ReanimatedFlatList
                ref={listRef}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                data={sectionData}
                contentContainerStyle={{ paddingTop: width * 0.5 - headerHeight, paddingBottom: 30 }}
                style={{ marginTop: Platform.OS === 'web' ? headerHeight / 2 : headerHeight }}
                extraData={{ active: state.activeCategoryIndex }}
                refreshControl={(
                    <RefreshControl refreshing={false} onRefresh={() => {
                        setState({ loading: true });
                        setTimeout(() => {
                            setState({ loading: false });
                        }, 2000)
                    }} />
                )}
                stickyHeaderIndices={[1]}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: (headerHeight + 150) / height * 100,

                }}
                onViewableItemsChanged={onViewableItemsChanged}
                onMomentumScrollEnd={() => {
                    console.log('scrollevent', 'onMomentumScrollEnd');
                    // listRef.current?.recordInteraction()
                    setTimeout(() => {
                        listScrolling.current = false;
                    }, 300);
                }}
                onTouchStart={() => {
                    // console.log('onTouchStart');
                    listScrolling.current = false;
                }}
                onScrollAnimationEnd={() => {
                    console.log('scrollevent', 'onScrollAnimationEnd');
                    setTimeout(() => {
                        listScrolling.current = false;
                    }, 300);
                }}
                onMomentumScrollBegin={() => {
                    setShowAllCategories(false);
                    console.log('scrollevent', 'onMomentumScrollBegin');
                }}
                onScrollToTop={() => {
                    setShowAllCategories(false);
                    console.log('scrollevent', 'onScrollToTop');
                }}
                ListHeaderComponent={(
                    <View onLayout={({ nativeEvent: { layout: { y, height } } }) => setCategoryTop(y + height)}>
                        <Card>
                            <Text font={{ size: 25, weight: 'bold' }}>{store.name}</Text>
                            <Text font={{ size: 15, weight: 'bold' }}>{store.description}</Text>
                        </Card>
                        <View>
                            <Box row flex={{ items: 'center' }} mx={16} bg={colors.gray[200]} p={10} border={{ radius: 10 }}>
                                <MaterialCommunityIcons name="bullhorn-outline" size={18} color="black" style={{ marginRight: 10 }} />
                                <Text>Order 8 or more to get 10% discount</Text>
                            </Box>
                        </View>
                    </View>

                )}

                renderItem={({ item, index, }: any) => {
                    if (item === 'categories') {
                        return (
                            <Animated.View

                                style={[
                                    { paddingVertical: 10, backgroundColor: colors.white, },
                                    { borderBottomWidth: 1, borderTopWidth: 1, },
                                    headerBorderTopStyle,
                                ]}>
                                <Categories
                                    ref={headerRef}
                                    onPress={(index) => {
                                        handleScrollToIndex(index);
                                    }}
                                    onMorePress={() => {
                                        setShowAllCategories(prev => {
                                            if (scrollY.value < headerHeight + 50) {
                                                listRef.current?.scrollToIndex({
                                                    index: (state.activeCategoryIndex + 1 || 0),
                                                    animated: true,
                                                })
                                            }
                                            return !prev;
                                        })
                                        console.log('onMorePress');
                                    }}
                                    activeCategoryIndex={state.activeCategoryIndex}
                                />
                            </Animated.View>
                        )
                    }

                    if (typeof item === 'string') {
                        return (
                            <Text
                                font={{ size: 20, weight: 'bold' }}
                                m={16}
                                style={{ textTransform: 'capitalize' }}
                            >
                                {item}
                            </Text>
                        )
                    }
                    if ((item as any).isFeatured) {
                        return (
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 16 }}
                                data={(item as any).items}
                                ItemSeparatorComponent={() => <Box width={8} />}
                                renderItem={({ item, index: i, target }: any) => (
                                    <Pressable onPress={() => openItem(item)}>
                                        <Box
                                            border={{ width: 1, radius: 8, color: colors.gray[200] }}
                                            width={160} style={{ overflow: 'hidden' }}
                                        >
                                            <Image
                                                contentFit="cover"
                                                source={{ uri: item.image }}
                                                style={{ width: 160, height: 160, overflow: 'hidden' }}
                                            />
                                            <Box p={8}>
                                                <Text numberOfLines={1} font={{ size: 16, weight: 'bold' }}>{item.title}</Text>
                                                <Text color={colors.gray[800]} font={{ size: 14, }}>${item.price}</Text>
                                            </Box>
                                        </Box>
                                    </Pressable>
                                )}
                            />
                        )
                    }
                    return (
                        <Pressable onPress={() => { openItem(item) }}>
                            <Box row p={16} borderTop={{ width: StyleSheet.hairlineWidth, color: colors.gray[300] }}>
                                <Box flex pr={8}>
                                    <Text numberOfLines={2} font={{ size: 18, }}>{item.title}</Text>
                                    <Text numberOfLines={2} my={8} font={{ size: 14 }} color={colors.gray[400]}>{item.description}</Text>
                                    <Text font={{ size: 16 }}>${item.price}</Text>
                                </Box>
                                <Box
                                    width={120} height={120 * 0.75}
                                    border={{ radius: 8 }}
                                    bg={colors.gray[200]}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <Image source={{ uri: item.image }} style={{ flex: 1 }} />
                                </Box>
                            </Box>
                        </Pressable>
                    )
                }}
            />
            {showAllCategories ? (
                <Box
                    zIndex={10}
                    borderBottom={{ width: 1 }}
                    position='absolute'
                    insets={{ top: headerHeight, left: 0, right: 0, bottom: 0 }}>
                    <Box bg={colors.gray['50']} p={16}>
                        <ScrollView contentContainerStyle={{ gap: 5, flexDirection: 'row', flexWrap: 'wrap' }}>
                            {menus.map((item, index) => {
                                const active = index === state.activeCategoryIndex;
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => {
                                            setShowAllCategories(false);
                                            handleScrollToIndex(index);
                                        }}
                                        style={{
                                            backgroundColor: active ? colors.black : colors.gray[200],
                                            paddingHorizontal: 10, paddingVertical: 5,
                                            borderRadius: 100
                                        }}>
                                        <Text color={active ? colors.white : colors.black}>{item.cat_name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </Box>
                    <TouchableOpacity
                        onPressIn={() => setShowAllCategories(false)}
                        style={{ flex: 1, }}
                    />
                </Box>
            ) : null}
            <Animated.View style={[{ position: 'absolute', left: 0, bottom: 0, right: 0 }, footerStyle]}>
                <Box row flex={{ items: 'center' }} bg={colors.white} borderTop={{ width: 1, color: colors.gray['200'] }} px={20} pt={8} pb={16 + (insets.bottom > 0 ? insets.bottom / 3 : 0)}>
                    <Box row flex={{ flex: 1, items: 'center' }} mr={16}>
                        <Box mr={16}>
                            {/* <Feather name="shopping-bag" size={30} color="black" /> */}
                            <Feather name="shopping-cart" size={34} color={colors.gray['800']} />
                        </Box>
                        <Box>
                            <Text font={{ size: 12, }}>Total Price</Text>
                            <Box row flex={{ items: 'center' }}>
                                <Text color={colors.orange['600']} font={{ size: 18, weight: 'bold' }} mr={3}>$</Text>
                                <Text font={{ size: 20, weight: 'bold' }}>30.00</Text>
                            </Box>
                        </Box>

                    </Box>
                    <TouchableOpacity style={{ flex: 1, minHeight: 45 }}>
                        <Box flex row center bg={colors.gray['800']} px={16} border={{ radius: 100, }} py={10}>
                            <Text adjustsFontSizeToFit color={colors.white} font={{ size: 18 }} mr={10} style={{ textAlign: 'center' }}>Checkout </Text>
                            <Feather name="arrow-right" color={colors.white} size={20} />
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Animated.View >
        </Box >
    )
}