import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { faker } from '@faker-js/faker';
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Platform, RefreshControl, ScrollView, StyleSheet, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Animated, { interpolateColor, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { } from 'react-native-svg';
import { colors } from "../../../commons/colors";
import { Box, Card } from "../../../components/containers";
import { Text } from "../../../components/typo";

const ReanimatedFlashList = Animated.createAnimatedComponent(FlashList);

type Props = {};

const store = {
    name: faker.company.name(),
    description: faker.company.catchPhrase(),
    cover: faker.image.urlPicsumPhotos(),
}
const popularList = new Array(8).fill(0).map((_, i) => ({
    image: faker.image.urlPicsumPhotos(),
    title: faker.lorem.words(5),
    description: faker.lorem.words(10),
    price: faker.commerce.price()
}));

const menus = [
    { cat_id: -1, cat_name: 'Popular', items: popularList, isFeatured: true, },
    ...new Array(5).fill(0).map((_, i) => ({
        cat_id: i,
        cat_name: faker.lorem.words(2),
        items: new Array(Math.floor(Math.random() * 20)).fill(0).map((_, i) => ({
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
}, [] as (string | typeof popularList[0])[]);

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
    const categoryRef = useRef<FlashList<any>>(null)
    const [active, setActive] = useState(props.activeCategoryIndex || 0)


    useEffect(() => {
        const i = id++;
        console.log('Categories mounted ' + i, props.target);
        return () => {
            console.log('Categories UNmounted ' + i, props.target);
        }
    }, [])

    useImperativeHandle(ref, () => ({
        scrollToIndex: (params) => {
            console.log('Categories scrollToIndex -' + props.target, params, categoryRef.current);
            categoryRef.current?.scrollToIndex({
                ...params,
                // viewOffset: 16,
                viewPosition: 0.5
            });
            setActive(params.index)
        }
    }), [])

    return (
        <Box flex row>
            <Box flex>
                <FlashList
                    ref={categoryRef}
                    horizontal
                    estimatedItemSize={300}
                    showsHorizontalScrollIndicator={false}
                    extraData={active}
                    keyExtractor={(item, index) => index.toString()}
                    data={headerIndexes as number[]}
                    renderItem={({ item, index, extraData }) => {
                        const active = extraData === index;
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    setActive(index);
                                    props.onPress(index);
                                }}
                            >
                                <Box
                                    bg={active ? colors.black : undefined}
                                    px={10}
                                    py={6}
                                    border={{ radius: 100 }}
                                    ml={index === 0 ? 16 : 0}
                                    mr={index >= menus.length - 1 ? 60 : 0}
                                >
                                    <Text color={colors[active ? 'white' : 'black']}>{sectionData[item] as string}</Text>
                                </Box>
                            </TouchableOpacity>
                        )
                    }}
                />

            </Box>
            {props.onMorePress ? (
                <TouchableOpacity
                    onPress={props.onMorePress}
                    style={{ position: 'absolute', top: 0, right: 0, bottom: 0, backgroundColor: colors.white, }}
                >
                    <Box py={8} px={16}>
                        <AntDesign name="down" size={18} color="black" />
                    </Box>
                </TouchableOpacity>
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
    const listRef = useRef<FlashList<any>>(null);
    const listScrolling = useRef(false);
    const [showAllCategories, setShowAllCategories] = useState(false);

    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    })

    const [categoryTop, setCategoryTop] = useState(0);
    const headerHeight = insets.top + 50;
    const imageCoverHeight = width * 0.5;
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
            borderTopColor: interpolateColor(scrollY.value, [headerHeight / 2, headerHeight], ['rgba(0,0,0,0.3)', 'rgba(0,0,0,0)'])
        }
    }, [])

    const headerCoverStyle = useAnimatedStyle(() => {
        'worklet';
        return {
            transform: [
                { translateY: scrollY.value < 0 ? scrollY.value / 2 : 0 },
                { scale: scrollY.value < 0 ? (imageCoverHeight + Math.abs(scrollY.value)) / imageCoverHeight : 1 },
            ],
        }
    });

    const categoryStyle = useAnimatedStyle(() => ({
        transform: [
            // { translateY: -(categoryTop - top) }
            { translateY: scrollY.value < (categoryTop - headerHeight) ? -scrollY.value : -(categoryTop - headerHeight) }
        ]
    }))

    function handleScrollToIndex(index: number) {
        listScrolling.current = true;

        listRef.current?.scrollToIndex({
            index: headerIndexes[index],
            animated: true,
            viewOffset: headerHeight + 50,
        })
        headerRef.current?.scrollToIndex({
            index: index,
            animated: false,
        })
        setState({ activeCategoryIndex: index })

    }


    return (
        <Box flex bg={colors.white}>
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
                <Box flex={{ items: 'center' }}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Box flex={{ justify: "center" }} border={{ radius: 100 }} height={40} w={40}  >
                            <AntDesign name="arrowleft" size={20} color={colors.black} style={{ textShadowColor: colors.white, textShadowRadius: 2, ...Platform.OS !== 'web' ? { shadowOffset: { height: 2, width: 2 } } : {} }} />
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
                            <AntDesign name="sharealt" size={20} style={{ textShadowColor: colors.white, textShadowRadius: 2, ...Platform.OS !== 'web' ? { shadowOffset: { height: 2, width: 2 } } : {} }} />
                        </Box>
                    </TouchableOpacity>
                </Box>
            </Animated.View>

            <ReanimatedFlashList
                ref={listRef}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                estimatedItemSize={140.3}
                data={sectionData}
                extraData={{ active: state.activeCategoryIndex }}
                refreshControl={(
                    <RefreshControl refreshing={false} onRefresh={() => {
                        setState({ loading: true });
                        setTimeout(() => {
                            setState({ loading: false });
                        }, 2000)
                    }} />
                )}
                stickyHeaderHiddenOnScroll={true}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: (headerHeight + 150) / height * 100
                }}
                onViewableItemsChanged={info => {
                    if (listScrolling.current) return;
                    let active = info.viewableItems.find(i => i.isViewable)?.index;

                    if (active === undefined || active === null) {
                        info.changed.find(i => i.isViewable)?.index
                    }

                    if (active === undefined || active === null) {
                        return;
                    }
                    console.log('onViewableItemsChanged', active);

                    const nextIndex = headerIndexes.findIndex(i => i >= active!);
                    console.log('onViewableItemsChanged-1', active, headerIndexes);

                    if (nextIndex === -1) return;

                    headerRef.current?.scrollToIndex({
                        index: nextIndex,
                        animated: false,
                    })
                    setState({ activeCategoryIndex: nextIndex })

                }}
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
                    <View>
                        <Animated.View style={[
                            { height: width * 0.5 },
                            headerCoverStyle,
                        ]}>
                            <Image source={{ uri: store.cover }} style={{ flex: 1 }} />
                        </Animated.View>
                        <Card>
                            <Text font={{ size: 25, weight: 'bold' }}>{store.name}</Text>
                            <Text font={{ size: 15, weight: 'bold' }}>{store.description}</Text>
                        </Card>
                        <View>
                            <Box row flex={{ items: 'center' }} mt={16} mx={16} bg={colors.gray[200]} p={10} border={{ radius: 10 }}>
                                <MaterialCommunityIcons name="bullhorn-outline" size={18} color="black" style={{ marginRight: 10 }} />
                                <Text>Order 8 or more to get 10% discount</Text>
                            </Box>
                        </View>
                        <Box
                            onLayout={(e) => {
                                if (categoryTop === 0) {
                                    setCategoryTop(e.nativeEvent.layout.y + 10);
                                }

                            }}
                            pb={8}
                            height={50}
                        />
                    </View>

                )}

                renderItem={({ item, index, target, extraData }: any) => {
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
                            <FlashList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 16 }}
                                data={(item as any).items}
                                ItemSeparatorComponent={() => <Box width={8} />}
                                estimatedItemSize={160}
                                renderItem={({ item, index: i, target }: any) => (
                                    <TouchableOpacity>
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
                                    </TouchableOpacity>
                                )}
                            />
                        )
                    }
                    return (
                        <TouchableOpacity>
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
                        </TouchableOpacity>
                    )



                }}
            />
            {showAllCategories ? (
                <Box
                    zIndex={10}
                    borderBottom={{ width: 1 }}
                    position='absolute'
                    insets={{ top: headerHeight + 45, left: 0, right: 0, bottom: 0 }}>
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
                                            padding: 10,
                                            borderRadius: 10
                                        }}>
                                        <Text color={active ? colors.white : colors.black}>{item.cat_name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </Box>
                    <TouchableOpacity
                        onPress={() => setShowAllCategories(false)}
                        style={{ flex: 1, }}
                    />
                </Box>
            ) : null}
            {categoryTop > 0 && (
                <Animated.View style={[
                    { position: "absolute", top: categoryTop, left: 0, right: 0, zIndex: 11 },
                    { height: 50, paddingTop: 10, backgroundColor: colors.white, },
                    { borderBottomColor: colors.gray[300], borderBottomWidth: 1, borderTopWidth: 1, },
                    headerBorderTopStyle,
                    categoryStyle
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
                                        index: (state.activeCategoryIndex || 0),
                                        animated: true,
                                    })
                                    // setTimeout(() => {
                                    //     listRef.current?.scrollToIndex({
                                    //         index: (state.activeCategoryIndex || 0),
                                    //         animated: false,
                                    //     })
                                    // }, 100);
                                }
                                return !prev;
                            })
                            console.log('onMorePress');
                        }}
                        activeCategoryIndex={state.activeCategoryIndex}
                    />
                </Animated.View>
            )}
        </Box>
    )
}