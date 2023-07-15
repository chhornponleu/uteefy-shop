import { Entypo } from "@expo/vector-icons";
import { faker } from "@faker-js/faker";
import { useRootNavigation, useRouter } from "expo-router";
import React from 'react';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../../../commons/colors";
import { Box, Card, CardContent, CardHeader } from "../../../../components/containers";
import Page from "../../../../components/containers/Page";
import { Text } from "../../../../components/typo";

const data = {
    username: faker.person.fullName(),
    profile: faker.image.avatar(),
    store: {
        id: faker.string.uuid(),
        name: faker.company.name(),
    }
}

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
const separator = (<Box borderTop={{ width: 1, color: colors.gray[100] }} my={8} />)
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
                            onPress={() => router.push('./settings/info')}
                        />
                        {separator}
                        <RowItem
                            title="Pricing"
                            onPress={() => router.push('./settings/pricing')}
                        />
                        {separator}
                        <RowItem
                            title="Users"
                            onPress={() => router.push('./settings/users')}
                        />
                        {separator}
                        <RowItem
                            title="QR Codes"
                            onPress={() => router.push('./settings/qrcodes')}
                        />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader title="Devices" />
                    <CardContent bordered py={8}>
                        <RowItem title="Printers"
                            onPress={() => router.push('./settings/printers')}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader title="Account" />
                    <CardContent bordered mb={8} py={8}>
                        <RowItem title="Subscription"
                            onPress={() => router.push('./settings/subscription')}
                        />
                    </CardContent>
                    <CardContent bordered py={8}>
                        <RowItem title="Security"
                            onPress={() => router.push('./settings/security')}
                        />
                        {separator}
                        <RowItem title="Change/Set password"
                            onPress={() => router.push('./settings/change-password')}
                        />
                        {separator}
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