import { Stack, useRouter } from "expo-router";
import React from 'react';
import { Box } from "../../../../../components/containers";
import { Text } from "../../../../../components/typo";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {};
export default function StoreItemsIndex({ }: Props) {
    const router = useRouter()
    return (
        <>
            <Stack.Screen
                options={{
                    headerRight: ({ tintColor }) => (
                        <Pressable
                            hitSlop={{ left: 15, top: 10, right: 15, bottom: 10 }}
                            onPress={() => router.push('/store/items/create')}>
                            <Ionicons className="web:mr-4" name="add-circle-outline" size={26} color={tintColor} />
                        </Pressable>
                    )
                }}
            />
            <Box>
                <Text>Products</Text>
            </Box>
        </>
    )
}