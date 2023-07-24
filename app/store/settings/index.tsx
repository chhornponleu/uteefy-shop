import React from 'react';
import { Box } from "../../../components/containers";
import { Text } from "../../../components/typo";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";

type Props = {};
export default function StoreSettings({ }: Props) {

    const router = useRouter();

    function logout() {
        router.push('/store-list')
    }

    return (
        <Box flex center>
            <Text>Store Home</Text>
            <Pressable onPress={logout}>
                <Text>Sign out</Text>
            </Pressable>
        </Box>
    )
}