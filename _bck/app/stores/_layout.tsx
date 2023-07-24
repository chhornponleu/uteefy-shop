import { Stack } from "expo-router";
import React from 'react'

type Props = {};
export default function StoresLayout({ }: Props) {
    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="create" options={{ headerBackTitle: null, title: 'Setup New Store' }} />
        </Stack>
    )
}
