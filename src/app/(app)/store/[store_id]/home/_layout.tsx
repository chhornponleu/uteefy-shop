import { Stack } from "expo-router";
import { t } from "i18next";
import React from 'react';

type Props = {};
export default function StoreHomeLayout({ }: Props) {
    return (
        <Stack>
            <Stack.Screen name="index"
                options={{
                    // headerShown: false,
                    headerTitle: t("home.tab_title"),
                    headerShadowVisible: false,
                }} />
        </Stack>
    )
}