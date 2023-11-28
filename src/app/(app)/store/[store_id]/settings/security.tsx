import { SimpleLineIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from 'react';
import { ScrollView, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "../../../../../components/typo";
import { colors } from "../../../../../commons/colors";
import { Box, Card, CardContent, CardHeader } from "../../../../../components/containers";

const pencilIcon = (
    <SimpleLineIcons name="pencil" size={16} color={colors.red['600']} style={{ marginRight: 16 }} />
)

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


export default function Security() {
    const insets = useSafeAreaInsets();

    return (
        <Box flex>
            <Stack.Screen options={{ title: 'Security' }} />
            <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ paddingBottom: 32 }}>
                <Card>
                    <CardHeader title="Sessions" />
                    <CardContent bordered>
                        <Box flex={{ gap: 8 }}>
                            <Box row flex={{ justify: "space-between" }}>
                                <Value title="Enable Face ID" />
                                <Switch value />
                            </Box>
                            <Field title="Use Face ID to login to your account." />
                        </Box>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader title="Authentication" />
                    <CardContent bordered>
                        <Box flex={{ gap: 8 }}>
                            <Box row flex={{ justify: "space-between" }}>
                                <Value title="Enable 2FA" />
                                <Switch />
                            </Box>
                            <Field title="Protect your account with 2-Factor Authentication" />
                        </Box>
                    </CardContent>
                </Card>

            </ScrollView>

        </Box>
    )
}