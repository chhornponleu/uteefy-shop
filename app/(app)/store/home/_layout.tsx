import { Stack } from "expo-router";
import React from 'react'
import { TextI18n } from "../../../../components/typo/TextI18n";

type Props = {};
export default function StoreHomeLayout({ }: Props) {
    return (
        <Stack>
            <Stack.Screen name="index"
                options={{
                    headerShown: false,
                    headerTitle: () => <TextI18n code="home.tab_title" />
                }} />
        </Stack>
    )
}