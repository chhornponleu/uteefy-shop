import { Stack } from "expo-router";
import React from 'react'
import { defaultStackOptions } from "../../../../../commons/navigation";

type Props = {};
export default function StoreOrdersLayout({ }: Props) {
    return (
        <Stack >
            <Stack.Screen name="index" options={{
                ...defaultStackOptions,
                title: 'Orders'
            }} />
        </Stack>
    )
}