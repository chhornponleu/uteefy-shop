import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from 'react';
import { Platform, Pressable } from "react-native";
import { colors } from "../../../../../commons/colors";
import { Box } from "../../../../../components/containers";
import { TextI18n } from "../../../../../components/typo/TextI18n";
import { useI18nMany } from "../../../../../i18n/useI18n";

type Props = {};
const codes = {

}
export default function StoreItemsLayout({ }: Props) {
    const router = useRouter();
    const t = useI18nMany({
        "items.add": {},
        "items.tab_title": {},
    })
    return (
        <Stack
            screenOptions={{
                headerTitleAlign: 'center',
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: colors.white,
                },
            }}
        >
            <Stack.Screen
                name="index"
                options={{ headerTitle: t["items.tab_title"] }}
            />
            <Stack.Screen
                name="create"
                options={{
                    title: t['items.add'],
                    // gestureDirection: 'vertical',
                    // presentation: 'fullScreenModal',
                    // animationDuration: 50,
                    // fullScreenGestureEnabled: false,
                    headerLeft: ({ tintColor }) => (
                        <Pressable
                            hitSlop={{ left: 15, top: 10, right: 15, bottom: 10 }}
                            style={
                                Platform.select({
                                    web: {
                                        paddingLeft: 16,
                                        paddingRight: 10,
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        borderRadius: 5,
                                    }
                                })
                            }
                            onPress={() => router.back()}>
                            <TextI18n code="cancel" className="text-red-800" />
                        </Pressable>
                    )
                }}
            />

        </Stack >
    )
}


