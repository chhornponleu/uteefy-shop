import { Stack } from "expo-router";
import React from 'react'

type Props = {};
export default function _layout({ }: Props) {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    )
}