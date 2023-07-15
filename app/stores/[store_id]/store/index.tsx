import { EvilIcons, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { faker } from "@faker-js/faker";
import { FlashList } from "@shopify/flash-list";
import { Image } from "expo-image";
import { Stack, useRouter, useSearchParams } from "expo-router";
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../../../commons/colors";
import { Box, Card, CardContent, CardHeader } from "../../../../components/containers";
import Page from "../../../../components/containers/Page";
import { Text } from "../../../../components/typo";

type Props = {};

const data = {
    username: faker.person.fullName(),
    profile: faker.image.avatar(),
    store: {
        id: faker.string.uuid(),
        name: faker.company.name(),
    }
}

export default function ConsoleHome({ }: Props) {
    const insets = useSafeAreaInsets();
    const { width } = useWindowDimensions();

    const { store_id } = useSearchParams<{ store_id: string }>();
    const router = useRouter();


    function handleShowQRModalPress() {
        router.push(`${store_id}/stores/select-qr-modal`)
    }


    return (
        <Page>
            <Box flex pt={insets.top}>
                <Stack.Screen options={{ headerShown: false, }} />
                <TouchableOpacity activeOpacity={0.7}>
                    <Box row px={20} my={16} flex={{ justify: "space-between", items: "center" }}>
                        <Box pr={16}>
                            <Image source={{ uri: data.profile }} style={{ width: 40, height: 40, borderRadius: 40 }} />
                        </Box>
                        <Box flex={{ flex: 1, justify: "center" }}>
                            <Text color={colors.gray['500']} font={{ size: 14 }}>{data.username}</Text>
                            <Text font={{ size: 18, weight: 'bold' }}>{data.store.name}</Text>
                        </Box>
                        <Ionicons name="caret-down-outline" />
                    </Box>
                </TouchableOpacity>
                <ScrollView>
                    <TouchableOpacity>
                        <Box
                            row
                            m={16}
                            mt={0}
                            p={16}
                            flex={{ items: 'center' }}
                            border={{ width: 1, color: colors.gray['200'], radius: 8 }}
                        >
                            <Ionicons name="search" size={16} style={{ marginRight: 16 }} />
                            <Text>Go to ...</Text>
                        </Box>
                    </TouchableOpacity>

                    <Card m={16} mt={0} bg={colors.gray['100']} border={{ radius: 8 }}>
                        <Box row flex={{ justify: "space-between", items: "center" }}>
                            <Text font={{ size: 18 }} color={colors.green['700']}>Setup Guide</Text>
                            <Ionicons name="chevron-down-circle-outline" size={28} />
                        </Box>
                        <Box pt={16} >
                            <Box h={2} mb={8} bg={colors.gray['300']}>
                                <Box h={2} bg={colors.green['700']} width="70%" />
                            </Box>
                            <Text>2/5 of tasks completed</Text>
                        </Box>
                        <Text>Configure store</Text>
                        <Text>Create first item</Text>
                        <Text>Set up order channel (QR</Text>
                        <Text>Add a member</Text>
                    </Card>

                    <Box px={16} row flex={{ justify: "space-between", items: "center", gap: 16 }}>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <Box flex center border={{ radius: 8 }} bg={colors.gray['100']} p={12} >
                                <Box h={35}>
                                    <Ionicons name="add-circle-outline" size={28} />
                                </Box>
                                <Text>Order</Text>
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 }} onPress={handleShowQRModalPress}>
                            <Box flex center border={{ radius: 8 }} bg={colors.gray['100']} p={12} >
                                <Box h={35} pt={5}>
                                    <Ionicons name="qr-code-outline" size={22} />
                                </Box>
                                <Text>Show QR</Text>
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <Box flex center border={{ radius: 8 }} bg={colors.gray['100']} p={12} >
                                <Box h={35} pt={5}>
                                    <FontAwesome name="cubes" size={22} />
                                </Box>
                                <Text>Toggle</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>

                    <Text mx={16} mt={16} font={{ size: 18, weight: 'bold' }}>Order summary</Text>
                    <Box m={16} py={8} border={{ radius: 8, width: 1, color: colors.gray[200] }} style={{ overflow: 'hidden' }}>
                        <TouchableOpacity activeOpacity={0.4}>
                            <Box row flex={{ items: "center" }} p={16}>
                                <Box width={40} pl={2} >
                                    <Octicons name="issue-draft" size={19} color="black" />
                                </Box>
                                <Box flex>
                                    <Text>Draft orders</Text>
                                </Box>
                                <Text font={{ size: 16, weight: 'bold' }} color={colors.blue['800']}>3</Text>
                                <EvilIcons name="chevron-right" size={16} style={{ marginLeft: 8 }} />
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.4}>
                            <Box mt={StyleSheet.hairlineWidth} row flex={{ items: "center" }} p={16} >
                                <Box width={40} >
                                    <MaterialCommunityIcons name="progress-download" size={24} color="black" />
                                </Box>
                                <Box flex>
                                    <Text>Orders to process</Text>
                                </Box>
                                <Text font={{ size: 16, weight: 'bold' }} color={colors.blue['800']}>3</Text>
                                <EvilIcons name="chevron-right" size={16} style={{ marginLeft: 8 }} />
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.4}>
                            <Box mt={StyleSheet.hairlineWidth} row flex={{ items: "center" }} p={16} pt={8}>
                                <Box width={40}>
                                    <MaterialCommunityIcons name="currency-usd" size={22} color="black" />
                                </Box>
                                <Box flex>
                                    <Text>Payments to collect</Text>
                                </Box>
                                <Text font={{ size: 16, weight: 'bold' }} color={colors.blue['800']}>3</Text>
                                <EvilIcons name="chevron-right" size={16} style={{ marginLeft: 8 }} />
                            </Box>
                        </TouchableOpacity>
                    </Box>

                    <Card>
                        <CardHeader title="Create Order" />
                        <CardContent bordered pr={8} minH={100}>
                            <FlashList
                                key={3}
                                numColumns={3}
                                contentContainerStyle={{}}
                                estimatedItemSize={80}
                                ItemSeparatorComponent={() => <Box height={8} />}
                                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity key={item} style={{ flex: 1 }}>
                                            <Box flex mr={8} center border={{ radius: 8 }} bg={colors.gray['100']} py={16}>
                                                <Box h={35}>
                                                    <Ionicons name="qr-code-outline" size={22} />
                                                </Box>
                                                <Text>T-{item}</Text>
                                            </Box>
                                        </TouchableOpacity>
                                    )
                                }}
                            />

                        </CardContent>
                    </Card>


                </ScrollView>
            </Box >
        </Page >
    )
}