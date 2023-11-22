import { AntDesign, Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from 'react';
import { colors } from "../../../commons/colors";
import { useI18nMany } from "../../../libs/i18n/useI18n";

type IconParams = { color?: string, focused?: boolean, size?: number }
const tabIcons = {
    home: ({ color, focused }: IconParams) => (
        < Feather name="compass" size={24} color={color} />
    ),
    orders: ({ color }: IconParams) => (
        <Feather name="clipboard" size={24} color={color} />
    ),
    items: ({ focused, color, size }: IconParams) => (
        <Feather name="tag" size={24} color={color} />
    ),
    settings: ({ focused, color, size }: IconParams) => (
        <AntDesign name="setting" size={24} color={color} />
        // <Feather name="settings" size={24} color={color} />
    )
}

export default function StoreLayout() {

    const t = useI18nMany({
        "home.tab_label": {},
        "orders.tab_label": {},
        "items.tab_label": {},
        "settings.tab_title": {},
    })

    console.log('trans tabs', t);


    //TODO: if no store selected, redirect to /

    return (
        <Tabs
            backBehavior="initialRoute"
            initialRouteName="home"
            sceneContainerStyle={{
                backgroundColor: colors.white
            }}
            screenOptions={(props) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: { paddingHorizontal: 24 },
            })}>

            <Tabs.Screen
                name="home"
                options={{
                    title: t["home.tab_label"],
                    tabBarIcon: ({ focused, color, size }) => tabIcons.home({ focused, color })
                }}
            />
            <Tabs.Screen name="orders"
                options={{
                    title: t["orders.tab_label"],
                    tabBarIcon: ({ focused, color, size }) => tabIcons.orders({ focused, color }),
                    href: null, //hidden
                }}
            />
            <Tabs.Screen name="items"
                options={{
                    title: t["items.tab_label"],
                    tabBarIcon: tabIcons.items
                }}
            />
            <Tabs.Screen name="settings"
                options={{
                    title: t["settings.tab_title"],
                    tabBarIcon: tabIcons.settings
                }}
            />
        </Tabs>
    )
}