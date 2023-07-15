
import {
    Theme, ThemeProvider
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack, usePathname, useSearchParams } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo } from "react";
import { useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../commons/colors";
import { AuthProvider } from "../context/auth-context";
import "../libs/firebase";
import { I18nContextProvider } from "../libs/i18n";

const client = new QueryClient()

export const unstable_settings = {
    initialRouteName: "index",
    screenOptions: {
        animationDuration: 200,

    }
};

const LightTheme = {
    dark: false,
    colors: {
        background: colors.white,
        card: colors.white,
        border: colors.gray[200],
        notification: colors.red[600],
        primary: colors.blue[800],
        text: colors.black,
    }
};
const DarkTheme: Theme = {
    dark: true,
    colors: {
        background: colors.gray[900],
        card: colors.gray[900],
        border: colors.gray[700],
        notification: colors.red[600],
        primary: colors.white,
        text: colors.gray[50],
    }
};

const defaultTheme = 'light'

export default function RootLayout() {
    const pathname = usePathname();
    const params = useSearchParams();

    const theme = useColorScheme();
    const insets = useSafeAreaInsets();

    const themeColors = useMemo(() => {
        return defaultTheme === 'light' ? LightTheme : DarkTheme
    }, [theme])

    useEffect(() => {
        // analytics.track({ pathname, params });
        console.log('screen-view ::::-> ' + pathname, { params });
    }, [pathname, params]);

    return (
        <I18nContextProvider>
            <QueryClientProvider client={client}>
                <StatusBar style="dark" />
                <ThemeProvider value={themeColors}>
                    <AuthProvider>
                        <Stack
                            initialRouteName="index"
                            screenOptions={{
                                animationDuration: 200,
                                headerShadowVisible: true,
                                headerShown: false,
                                contentStyle: {
                                    paddingLeft: insets.left,
                                    paddingRight: insets.right,
                                }
                            }}
                        >
                            <Stack.Screen name="index" />
                            <Stack.Screen name="(auth)/login" />
                        </Stack>
                    </AuthProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </I18nContextProvider>
    );
}