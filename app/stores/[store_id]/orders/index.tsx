import { EvilIcons, Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { faker } from "@faker-js/faker";
import { Stack, useRouter, useSearchParams, useSegments } from "expo-router";
import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from "react-native";
import { } from "react-native-gesture-handler";
import { colors } from "../../../../commons/colors";
import { Box } from "../../../../components/containers";
import { Text } from "../../../../components/typo";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {};

const store = {
    id: faker.string.uuid(),
    name: faker.company.name(),
    address: faker.location.streetAddress(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    logo: faker.image.urlLoremFlickr({ width: 100, height: 100 })
}

const orders = new Array(faker.number.int({ min: 5, max: 30 })).fill(null).map(() => {
    return {
        id: faker.string.uuid(),
        price: faker.commerce.price(),
        order_no: faker.number.int(),
        date: faker.date.recent(),
        status: ['pending', 'completed', 'cancelled'][faker.number.int({ min: 0, max: 2 })],
        channel: ['T-01', 'T-02', 'T-03'][faker.number.int({ min: 0, max: 2 })],
        order_by: ['customer', faker.person.fullName(), faker.person.fullName()][faker.number.int({ min: 0, max: 2 })],
        contact: '012999000',
        email: 'whoareyou@gmail.com',
        store: {
            id: faker.string.uuid(),
            name: faker.company.name(),
            address: faker.location.streetAddress(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            logo: faker.image.urlLoremFlickr({ width: 100, height: 100 })
        }
    }
})


export default function AllOrdersPage({ }: Props) {
    const { store_id } = useSearchParams<{ store_id: string }>();
    const segments = useSegments();
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const [searchText, setSearchText] = useState('');

    function handleAddItemPress() {
        router.push(`/stores/${store_id}/orders/create`)
    }

    function handleAllOrdersPress() {
        router.push(`/stores/${store_id}/orders/list`)
    }

    return (
        <Box flex>
            <Stack.Screen
                options={{
                    headerBackVisible: false,
                    headerShadowVisible: true,
                    headerLeft: null,
                    headerRight(props) {
                        return (
                            <Box row flex={{ items: "center", gap: 8 }}>
                                <TouchableOpacity onPress={handleAddItemPress}>
                                    <Box p={10}>
                                        <Ionicons name="add-circle-outline" color={props.tintColor} size={24} />
                                    </Box>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleAllOrdersPress}>
                                    <Box row center>
                                        <Text>Show All</Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        )
                    }
                }}
            />

            <Box flex >
                <FlatList
                    data={[1, ...orders]}
                    stickyHeaderIndices={[1]}
                    ListHeaderComponent={() => (
                        <Box row px={16} mt={16} gap={16}>
                            <TouchableOpacity>
                                <Box
                                    row radius={100} bg={colors.gray['100']}
                                    height={45} items="center" px={16} columnGap={8}
                                >
                                    <MaterialCommunityIcons name="progress-download" size={24} color="black" />
                                    <Text>Draft</Text>
                                    <Text font={{ size: 16, weight: 'bold' }} color={colors.blue['800']}>{orders.length}</Text>
                                    <EvilIcons name="chevron-right" size={16} style={{ marginLeft: 8 }} />
                                </Box>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Box
                                    row radius={100} bg={colors.gray['100']}
                                    height={45} items="center" px={16} columnGap={8}
                                >
                                    <MaterialCommunityIcons name="inbox-arrow-down" size={24} color={colors.black} />
                                    <Text>Collect Payment</Text>
                                    <Text font={{ size: 16, weight: 'bold' }} color={colors.blue['800']}>1</Text>
                                    <EvilIcons name="chevron-right" size={16} style={{ marginLeft: 8 }} />
                                </Box>
                            </TouchableOpacity>

                        </Box>
                    )
                    }
                    ItemSeparatorComponent={() => (
                        <Box borderTop={{ width: 1, color: colors.gray['200'] }} mx={16} />
                    )}
                    renderItem={({ item }: any) => {
                        if (item == 1) {
                            return (
                                <Box bg={colors.white} p={16}>
                                    <Text font={{ size: 16, weight: 'bold', color: colors.blue[500] }}>Order to process</Text>
                                </Box>
                            )
                        }
                        return (
                            <Box p={16}>
                                <Box row flex={{ justify: 'space-between' }}>
                                    <Text font={{ weight: 'bold' }}>#{item.order_no}</Text>
                                    <Text>{item.date.toLocaleTimeString()}</Text>
                                </Box>
                                <Box row flex={{ justify: 'space-between' }}>
                                    <Text>Channel: {item.channel}</Text>
                                    <Text>By: {item.order_by}</Text>
                                </Box>

                            </Box>
                        )
                    }}
                />
            </Box>
        </Box >
    )
}