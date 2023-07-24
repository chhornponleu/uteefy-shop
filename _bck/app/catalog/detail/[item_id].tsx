import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { Stack, useRouter } from "expo-router";
import React from 'react';
import { Pressable, TouchableOpacity, useWindowDimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { faker } from '@faker-js/faker';
import { colors } from "../../../../commons/colors";
import { Box } from "../../../../components/containers";
import { Text } from "../../../../components/typo";

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

type Props = {};

const data = {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    crossedPrice: faker.commerce.price(),
    images: [faker.image.urlLoremFlickr({ category: 'food' })],
    unit: faker.commerce.productMaterial(),
    description: faker.lorem.sentences(Math.floor(Math.random() * 3)),
    options: [],
    attributes: new Array(faker.number.int({ min: 0, max: 5 })).fill(0).map(() => {
        const attrs = new Array(faker.number.int({ min: 1, max: 5 })).fill(0);
        return {
            id: faker.string.uuid(),
            name: faker.commerce.productAdjective(),
            min: faker.number.int({ min: 0, max: attrs.length / 2 }),
            max: faker.number.int({ min: attrs.length / 2, max: attrs.length }),
            values: attrs.map(() => ({
                id: faker.string.uuid(),
                name: faker.commerce.productMaterial(),
                price: faker.commerce.price(),
                crossedPrice: faker.commerce.price(),
            }))
        }
    })
}

export default function ItemDetail({ }: Props) {
    const { width } = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const imageCoverHeight = width * 0.5;

    const [qty, setQty] = React.useState(1);

    const router = useRouter()

    const scrollY = useSharedValue(0);
    const scrolling = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
        onBeginDrag: () => {
            scrolling.value = 1;
        },
        onEndDrag: () => {
            scrolling.value = 0;
        }
    })

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

    const imageContainerStyle = useAnimatedStyle(() => {
        'worklet';
        return {
            transform: [
                { translateY: scrollY.value < 0 ? scrollY.value / 2 : 0 },
                { scale: scrollY.value < 0 ? (imageCoverHeight + Math.abs(scrollY.value)) / imageCoverHeight : 1 },
            ],
        }
    }, [])

    return (
        <Box flex>
            <Stack.Screen options={{ headerShown: false, }} />
            <Box flex>
                <AnimatedScrollView
                    onScroll={scrollHandler}
                    scrollEventThrottle={16}
                    contentContainerStyle={{ paddingBottom: 100 }}
                >
                    <Stack.Screen options={{ animationDuration: 300, animation: 'slide_from_bottom', gestureDirection: 'vertical', fullScreenGestureEnabled: true }} />
                    <Animated.View style={[{ width: '100%', height: imageCoverHeight }, imageContainerStyle]}>
                        <Image source={{ uri: data.images[0] }} style={{ width: '100%', height: imageCoverHeight }} />
                    </Animated.View>
                    <Box bg={colors.white} >
                        <Box row>
                            <Box flex m={16}>
                                <Text font={{ size: 18, weight: 'bold' }} mb={8}>{data.name}</Text>
                                <Text color={colors.gray['600']} font={{ size: 12, }}>{data.unit}</Text>
                            </Box>
                            <Box m={16}>
                                <Text color={colors.gray[600]} style={{ textDecorationLine: 'line-through', textAlign: 'right' }}>$ {data.crossedPrice}</Text>
                                <Box flex={{ direction: 'row', items: 'center' }}>
                                    <Text color={colors.orange['600']} font={{ size: 18, weight: 'bold' }} mr={3}>$</Text>
                                    <Text font={{ size: 20, weight: 'bold' }}>30.00</Text>
                                </Box>
                            </Box>

                        </Box>


                        {data.description ? (
                            <Text font={{ size: 16 }} m={16} mt={0} color={colors.gray['600']} style={{ lineHeight: 26 }}>{data.description}</Text>
                        ) : null}
                    </Box>

                    {data.attributes.map(({ min, max, ...attr }) => {
                        return attr.values.length === 0 ? null : (
                            <Box key={attr.id}>
                                <Box p={16} pb={8}>
                                    <Text font={{ size: 16, weight: 'bold' }}>{attr.name} {min === 0 ? '(optional)' : ''}</Text>
                                    <Text color={colors.gray['500']}>
                                        {
                                            min === max ? 'Select ' + min :
                                                min === 0 ? 'Select up to ' + max : 'Select ' + min + ', up to ' + max
                                        }
                                    </Text>
                                </Box>
                                {attr.values.map((value, i) => {
                                    return (
                                        <Box key={value.id} row flex={{ items: 'center' }} bg={colors.white} p={16} pt={i > 0 ? 0 : 16}>
                                            <Box row flex={{ flex: 1, items: 'center' }} >
                                                <Ionicons name={max === 1 ? "radio-button-off" : 'square-outline'} size={22} style={{ marginRight: 16 }} />
                                                <Text>{value.name}</Text>
                                            </Box>
                                            <Text>+ ${value.price}</Text>
                                        </Box>
                                    )
                                })}
                            </Box>
                        )
                    })}
                    <Box m={16} row>
                        <Text color={colors.red['700']}>+ Add instruction</Text>
                    </Box>

                </AnimatedScrollView>
            </Box>
            <Animated.View style={[{ position: 'absolute', left: 0, bottom: 0, right: 0 }, footerStyle]}>
                <Box bg={colors.white} borderTop={{ width: 1, color: colors.gray['200'] }} px={16} pt={8} pb={16 + (insets.bottom > 0 ? insets.bottom / 3 : 0)}>
                    <Box row flex={{ items: 'center' }}>
                        <Box row flex={{ items: 'center' }} mr={16}>
                            <Box height={40} width={40} >
                                <TouchableOpacity
                                    disabled={qty <= 1}
                                    onPress={() => setQty(q => q - 1)}>
                                    <Box height={40} width={40} center>
                                        <Ionicons name="remove" size={25} color={qty > 1 ? colors.black : colors.gray['400']} />
                                    </Box>
                                </TouchableOpacity>

                            </Box>
                            <Box minW={30}>
                                <Text style={{ textAlign: 'center' }}> {qty} </Text>
                            </Box>
                            <TouchableOpacity onPress={() => setQty(q => q + 1)}>
                                <Box height={40} width={40} center>
                                    <Ionicons name="add" size={25} />
                                </Box>
                            </TouchableOpacity>
                        </Box>
                        <TouchableOpacity style={{ flex: 1, minHeight: 45, }}>
                            <Box row center flex bg={colors.gray['800']} border={{ radius: 100, }} px={16} >
                                <Text color={colors.white} font={{ size: 18 }} style={{ textAlign: 'center' }}>Add To Card</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </Animated.View>
            <Pressable
                onPress={() => router.back()}
                style={{ position: 'absolute', left: 16, top: insets.top || 16 }}>
                <Box bg={colors.white} height={35} width={35} center border={{ radius: 100 }}>
                    <Ionicons name="close-outline" size={24} color="black" />
                </Box>
            </Pressable>
        </Box>
    )
}