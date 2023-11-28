import { Entypo } from "@expo/vector-icons";
import { useRootNavigation, useRouter } from "expo-router";
import React from 'react';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Card, CardContent, CardHeader } from "../../../../../components/containers";
import { Text } from "../../../../../components/typo";
import { colors } from "../../../../../commons/colors";
import Page from "../../../../../components/containers/Page";
import {
    useTheme
} from "@react-navigation/native";

function RowItem(props: { title: string; onPress?: () => void; }) {
    return (
        <TouchableOpacity disabled={!props.onPress} onPress={props.onPress}>
            <Box row py={8} justify="space-between">
                <Text>{props.title}</Text>
                <Entypo name="chevron-thin-right" color={colors.gray[400]} />
            </Box>
        </TouchableOpacity>
    )
}
const Separator = () => {
    const theme = useTheme();
    return (
        <Box borderTop={{ width: 0, color: theme.colors.border }} my={8} />
    )
}
export default function SettingsIndex() {
    const insets = useSafeAreaInsets();
    const navigation = useRootNavigation();

    const router = useRouter();

    return (
        <Page>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Card>
                    <CardHeader title="Store" />
                    <CardContent bordered py={8}>
                        <RowItem
                            title="Store Info"
                            onPress={() => router.push('/store/settings/info')}
                        />
                        {<Separator />}
                        <RowItem
                            title="Pricing"
                            onPress={() => router.push('/store/settings/pricing')}
                        />
                        {<Separator />}
                        <RowItem
                            title="Users"
                            onPress={() => router.push('/store/settings/users')}
                        />
                        {<Separator />}
                        <RowItem
                            title="QR Codes"
                            onPress={() => router.push('/store/settings/qrcodes')}
                        />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader title="Devices" />
                    <CardContent bordered py={8}>
                        <RowItem title="Printers"
                            onPress={() => router.push('/store/settings/printers')}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader title="Account" />
                    <CardContent bordered mb={8} py={8}>
                        <RowItem title="Subscription"
                            onPress={() => router.push('/store/settings/subscription')}
                        />
                    </CardContent>
                    <CardContent bordered py={8}>
                        <RowItem title="Security"
                            onPress={() => router.push('/store/settings/security')}
                        />
                        {<Separator />}
                        <RowItem title="Change/Set password"
                            onPress={() => router.push('/store/settings/change-password')}
                        />
                        {<Separator />}
                        <RowItem title="All Stores"
                            onPress={() => {
                                // navigation.reset({ index: 0, routes: [{ name: 'stores' }] })
                                console.log(navigation.getRootState());
                                navigation.resetRoot({ index: 0, routes: [{ name: 'stores' }] })
                            }}
                        />


                    </CardContent>
                </Card>
            </ScrollView>
        </Page>
    )
}