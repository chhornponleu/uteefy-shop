import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { Stack } from "expo-router";
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from "react-native";
import ReactNativeModal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../../../commons/colors";
import { Box, Card, CardContent, CardHeader } from "../../../../components/containers";
import { Text } from "../../../../components/typo";

type Props = {};
const pencilIcon = (
    <SimpleLineIcons name="pencil" size={16} color={colors.red['600']} style={{ marginRight: 16 }} />
)

function Header(props: { title: string, iconRight?: any; onIconRightPress?: () => void }) {
    return (
        <Box row m={16} mt={32} justify="space-between">
            <Text font={{ size: 16, weight: 'bold' }}>{props.title}</Text>
            {(props.onIconRightPress || props.iconRight) ? (
                <TouchableOpacity onPress={props.onIconRightPress}>
                    {props.iconRight || pencilIcon}
                </TouchableOpacity>
            ) : null}
        </Box>
    )
}

function Field(props: { title: string; }) {
    return (
        <Text font={{}} color={colors.gray[500]} mb={8}>{props.title}</Text>
    )
}

function Value(props: { title: string; }) {
    return (
        <Text font={{ size: 16, }}>{props.title}</Text>
    )
}


const taxes = {
    shortdesc: 'The prices of the item or service being offered already includes the applicable taxes.',
    longdesc: 'By selecting (checked), the price of the item or service being offered already includes the applicable taxes. It means that the total amount your customers will pay for the item or service is already calculated with the tax and there is no need to pay any additional tax on top of the stated price. For example, if a product is listed for $10 with tax included, you pay $10 and that’s the final price, without any additional tax or fees.',
    items: [
        { id: 1, name: 'VAT (10%)', desc: 'Value Added Tax, rated at 10 %', value: 10, type: 'pct' },
        { id: 2, name: 'Service Charge', desc: 'Customer service and other maintenance', value: 3, type: 'pct' },
    ]
}

export default function Pricing({ }: Props) {
    const insets = useSafeAreaInsets();

    const [taxIncluded, setTaxIncluded] = useState(true);
    const [taxItems, setTaxItems] = useState([])

    const [taxModalVisible, setTaxModalVisible] = useState<boolean>();

    return (
        <Box flex>
            <Stack.Screen options={{ title: 'Pricing' }} />
            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ paddingBottom: 32 }}>
                <Card>
                    <CardHeader title="Currency" />
                    <CardContent bordered>
                        <Box gap={8}>
                            <Value title="Khmer Riels" />
                            <Field title="By changing currency, all your orders will be converted to then new currency" />
                        </Box>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader
                        title="Taxes and duties"
                        right={
                            <Ionicons name="add" size={20} style={{ marginRight: 8 }} color={colors.blue['800']} />
                        }
                    />
                    <CardContent bordered gap={8}>
                        <Box row pb={8} justify={"space-between"} items={"flex-start"}>
                            <Box pr={16}>
                                <TouchableOpacity onPress={() => setTaxModalVisible(true)}>
                                    <Value title="Include tax in item prices" />
                                </TouchableOpacity>
                                <Text color={colors.gray[500]} mt={8}>{taxes.shortdesc}</Text>
                            </Box>
                            <Ionicons name="checkbox-outline" size={24} />
                        </Box>

                        <Value title="Applicable Taxes"></Value>
                        <FlashList
                            estimatedItemSize={60}
                            data={taxItems}
                            ListEmptyComponent={(
                                <Box
                                    center
                                    p={32}
                                    border={{ style: 'dotted', radius: 8, color: colors.gray[200], width: 1 }}
                                >
                                    <Text color={colors.yellow[600]}>You do not have taxes and duty configured</Text>
                                    <TouchableOpacity onPress={() => setTaxItems(taxes.items)}>
                                        <Box mt={16} row flex={{ items: "center", gap: 4 }} px={24} py={8}
                                            border={{ width: 1, radius: 8, color: colors.blue['400'] }}>
                                            <Text color={colors.blue['800']}>Setup now</Text>
                                        </Box>
                                    </TouchableOpacity>
                                </Box>
                            )}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity >
                                        <Box
                                            row p={16} mb={8}
                                            flex={{ items: "center" }}
                                            border={{ radius: 8, width: 1, color: colors.gray[400] }}
                                        >
                                            <Box flex>
                                                <Text font={{ size: 16 }}>{item.name}</Text>
                                                <Text color={colors.gray[400]}>{item.desc}</Text>
                                            </Box>
                                            <Text font={{ size: 24 }}><Text font={{ weight: 'bold' }}>{item.value}</Text>{item.type === 'pct' ? '%' : ''}</Text>
                                        </Box>
                                    </TouchableOpacity>
                                )
                            }}

                        />

                        <Box border={{ style: 'dotted', color: colors.yellow[400], width: 1, radius: 8 }} p={16}>
                            <Text color={colors.yellow[600]}><Ionicons name="star" /> Taxes are included to item price only</Text>
                        </Box>
                    </CardContent>
                </Card>

            </ScrollView>



            <ReactNativeModal
                useNativeDriver
                hideModalContentWhileAnimating
                isVisible={taxModalVisible}
                style={{ margin: 0, justifyContent: 'flex-end' }}
            >
                <Box
                    p={32} border={{ radius: 16 }}
                    style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
                    pb={insets.bottom + 16}
                    bg={colors.white}
                >
                    <Text mb={16} font={{ size: 24 }}>Taxes and duties</Text>
                    <Text>{taxes.longdesc}</Text>
                    <Box center>
                        <TouchableOpacity onPress={() => setTaxModalVisible(false)}>
                            <Box mt={32} border={{ radius: 8 }} bg={colors.black} px={32} py={16}>
                                <Text color={colors.white}>Got It!!!</Text>
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </ReactNativeModal>

        </Box >
    )
}