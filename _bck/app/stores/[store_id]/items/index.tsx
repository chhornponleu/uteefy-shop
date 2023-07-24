import { EvilIcons, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { faker } from "@faker-js/faker";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { Stack, useRouter, useSearchParams, useSegments } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, ScrollView, useWindowDimensions, TouchableOpacity } from "react-native";
import { Box } from "../../../../../components/containers";
import { Text } from "../../../../../components/typo";
import { colors } from "../../../../../commons/colors";
import { useDeviceQuery } from "../../../../../hooks/useDeviceQuery";
import { chunk } from 'lodash';

type Props = {};

const store = {
    id: faker.string.uuid(),
    name: faker.company.name(),
    address: faker.location.streetAddress(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    logo: faker.image.urlPicsumPhotos({ width: 100, height: 100 }),
}

const categories = new Array(10).fill(0).map(() => {
    return {
        id: faker.string.uuid(),
        name: faker.commerce.department(),
        items: new Array(10).fill(0).map(() => {
            return {
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                image: faker.image.urlPicsumPhotos({ width: 100, height: 100 })
            }
        })
    }
})


export default function Items({ }: Props) {
    const params = useSearchParams<{ store_id: string; item_id }>();
    const segments = useSegments()
    const router = useRouter();

    const { width } = useWindowDimensions()

    const [activeIndex, setActiveIndex] = useState(0);
    const headerRef = useRef<FlatList>(null)

    useEffect(() => {
        headerRef.current?.scrollToIndex({
            animated: false,
            index: activeIndex,
            viewOffset: 16,
        })
    }, [activeIndex])

    const [searchText, setSearchText] = useState('');

    const activeCat = categories?.[activeIndex]
    const items = activeCat?.items || []

    function handleCreateItemPress() {
        router.push(`/stores/${params.store_id}/items/create`);
    }

    function handleInventoryPress() {
        router.push(`${params.store_id}/items/inventories`)
    }

    const { select } = useDeviceQuery();

    const cols = select({
        default: 1,
        tablet: 2,
        desktop: 3
    })

    const itemWidth = width / cols;
    const itemList = useMemo(() => {
        return chunk(items, cols);
    }, [JSON.stringify(items), cols])

    return (
        <Box flex>
            <Stack.Screen
                options={{
                    title: 'Items',
                    headerTitle: () => (
                        <Box center row>
                            <Text size={18}>Items</Text>
                            <TouchableOpacity onPress={handleCreateItemPress}>
                                <Box p={10}>
                                    <Ionicons name="add-circle-outline" size={24} />
                                </Box>
                            </TouchableOpacity>
                        </Box>
                    ),
                    headerRight: () => {
                        return (
                            <Box row flex={{ items: "center", gap: 8 }}>

                                <TouchableOpacity onPress={handleInventoryPress}>
                                    <Text>Inventories</Text>
                                </TouchableOpacity>
                            </Box>
                        )
                    }
                }}
            />
            <Box flex>
                <FlatList
                    key={activeCat.id + '-' + cols}
                    data={itemList}
                    contentContainerStyle={{ padding: 16 }}
                    ItemSeparatorComponent={() => <Box height={16} />}
                    renderItem={({ item, index }) => {
                        const items = [...item, ...new Array(cols - item.length || 0).fill(0)]
                        return (
                            <Box row style={{ rowGap: 80, columnGap: 16 }}>
                                {items.map((item) => {
                                    if (item === 0) {
                                        return (
                                            <Box flex id={index + "-" + item + '-' + cols} />
                                        )
                                    }
                                    return (
                                        <TouchableOpacity
                                            key={index + "-" + item.id + '-' + cols}
                                            style={{ flex: 1 }}>
                                            <Box
                                                row p={8}
                                                border={{ width: 1, color: colors.gray['100'], radius: 12 }}>
                                                <Box flex>
                                                    <Text font={{ size: 16, weight: 'bold' }}>{item.name}</Text>
                                                    <Text color={colors.gray['600']} font={{ size: 14 }}>{item.price}</Text>
                                                </Box>
                                                <Box ml={16}>
                                                    <Image
                                                        source={{ uri: item.image }}
                                                        style={{ width: 120, height: 120, borderRadius: 8 }}
                                                    />
                                                </Box>
                                            </Box>
                                        </TouchableOpacity>
                                    )
                                })}
                            </Box>
                        )
                        // if (item === 1) {
                        //     return (
                        //         <TouchableOpacity activeOpacity={0.7} onPress={() => handleInventoryPress()}>
                        //             <Box row p={16} py={8} bg={colors.white}>
                        //                 <Box width={40} pl={2}>
                        //                     <FontAwesome name="cubes" size={18} color={colors.gray[600]} />
                        //                 </Box>
                        //                 <Box flex>
                        //                     <Text>Inventories</Text>
                        //                 </Box>
                        //                 {/* <Text font={{ size: 16, weight: 'bold' }} color={colors.blue['800']}>3</Text> */}
                        //                 <EvilIcons name="chevron-right" size={16} style={{ marginLeft: 8 }} />
                        //             </Box>
                        //         </TouchableOpacity>

                        //     )
                        // }
                        // if (item === 2) {
                        //     return (
                        //         <Box bg={colors.white} width={width}>
                        //             <FlatList
                        //                 horizontal
                        //                 ref={headerRef}
                        //                 data={categories}
                        //                 contentContainerStyle={{ paddingHorizontal: 8, paddingVertical: 8 }}
                        //                 style={{ alignSelf: 'baseline' }}
                        //                 showsHorizontalScrollIndicator={false}
                        //                 onScrollToIndexFailed={e => {
                        //                     console.log(e);

                        //                 }}
                        //                 renderItem={({ item, index }) => {
                        //                     const active = activeCat?.id === item?.id;
                        //                     return (
                        //                         <TouchableOpacity onPress={() => setActiveIndex(index)} key={item.id}>
                        //                             <Box
                        //                                 bg={active ? colors.blue['800'] : undefined}
                        //                                 border={{ radius: 100 }}
                        //                                 px={16} py={8}>
                        //                                 <Text
                        //                                     color={active ? colors.white : colors.gray['600']}
                        //                                     font={{ size: 16 }}
                        //                                >{item.name}</Text>
                        //                             </Box>
                        //                         </TouchableOpacity>
                        //                     )
                        //                 }}
                        //            >
                        //             </FlatList>
                        //         </Box>
                        //     )
                        // }

                    }}
                />
            </Box>
        </Box>
    )
}