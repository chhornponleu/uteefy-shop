import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from 'react'
import { TouchableOpacity } from "react-native";
import { Box, Card, CardHeader } from "../../../../../components/containers";
import { Text } from "../../../../../components/typo";

type Props = {};
export default function QRCodes({ }: Props) {
    return (
        <Box flex>
            <Stack.Screen options={{
                headerRight: ({ tintColor }) => (
                    <TouchableOpacity>
                        <Ionicons name="add" size={20} color={tintColor} />
                    </TouchableOpacity>
                )
            }} />
            <Card>
                <CardHeader title="Group" />
            </Card>
        </Box>
    )
}