import { Entypo } from "@expo/vector-icons";
import { useGlobalSearchParams, useRootNavigation, useRouter } from "expo-router";
import React from 'react';
import { View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../../../../commons/colors";
import { Box, Card, CardContent, CardHeader } from "../../../../../components/containers";
import Page from "../../../../../components/containers/Page";
import { Text } from "../../../../../components/typo";

function RowItem(props: { title: string; onPress?: () => void; }) {
    return (
        <TouchableOpacity disabled={!props.onPress} onPress={props.onPress}>
            <Box className="p-4">
                <Text>{props.title}</Text>
                <Entypo name="chevron-thin-right" color={colors.gray[400]} />
            </Box>
        </TouchableOpacity>
    )
}
const Separator = () => {
    return (
        <View className="" />
    )
}
export default function SettingsIndex() {
    const insets = useSafeAreaInsets();
    const navigation = useRootNavigation();

    const router = useRouter();
    const { store_id } = useGlobalSearchParams()
    const baseSettingTabUrl = '/(app)/store/' + store_id + '/settings/'
    function navigateTo(tab: string) {
        router.push(`/store/${store_id}/settings/${tab}` as never)
    }
    return (
        <Page>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Card>
                    <CardHeader title="Store" />
                    <CardContent>
                        <RowItem
                            title="Store Info"
                            onPress={() => navigateTo('info')}
                        />
                        {<Separator />}
                        <RowItem
                            title="Pricing"
                            onPress={() => navigateTo('pricing')}
                        />
                        {<Separator />}
                        <RowItem
                            title="Users"
                            onPress={() => navigateTo('users')}
                        />
                        {<Separator />}
                        <RowItem
                            title="QR Codes"
                            onPress={() => navigateTo('qrcodes')}
                        />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader title="Devices" />
                    <CardContent>
                        <RowItem title="Printers"
                            onPress={() => navigateTo('printers')}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader title="Account" />
                    <CardContent>
                        <RowItem title="Subscription"
                            onPress={() => navigateTo('subscription')}
                        />
                    </CardContent>
                    <CardContent>
                        <RowItem title="Security"
                            onPress={() => navigateTo('security')}
                        />
                        {<Separator />}
                        <RowItem title="Change/Set password"
                            onPress={() => navigateTo('change-password')}
                        />
                        {<Separator />}
                        <RowItem title="All Stores"
                            onPress={() => {
                                router.push('/store/')
                            }}
                        />


                    </CardContent>
                </Card>
            </ScrollView>
        </Page>
    )
}