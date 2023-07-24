import { Stack, useRouter } from "expo-router";
import React from 'react';
import { TouchableOpacity } from "react-native";
import { Box } from "../../../../../components/containers";
import { Text } from "../../../../../components/typo";

type Props = {};
export default function SelectQRModal() {
    const router = useRouter()
    return (
        <Box flex>
            <Stack.Screen options={{ title: 'Select QR Code' }} />
            <TouchableOpacity onPress={() => router.back()}>
                <Text>DISMISS</Text>
            </TouchableOpacity>
            <Text>Please select a QR to present</Text>
        </Box>
    );
}
