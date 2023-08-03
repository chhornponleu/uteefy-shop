import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { AppContextProvider } from "../context/app-context";

import {
    Theme,
    ThemeProvider
} from "@react-navigation/native";
import { colors } from "../commons/colors";
import { useColorScheme } from "react-native";
import { useMemo } from "react";
import { I18nContextProvider } from "../libs/i18n";

type Props = {};


const client = new QueryClient()

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
        background: colors.gray[800],
        card: colors.gray[800],
        border: colors.gray[600],
        notification: colors.red[600],
        primary: colors.white,
        text: colors.gray[100],
    }
};

export default function RootLayout({ }: Props) {
    const theme = useColorScheme();
    const themeColors = useMemo(() => {
        return theme === 'light' ? LightTheme : DarkTheme
        return LightTheme;
    }, [theme])
    return (
        <QueryClientProvider client={client}>
            <I18nContextProvider>
                <AppContextProvider>
                    <ThemeProvider value={themeColors}>
                        <Slot />
                        {/* 
                        <Stack screenOptions={{
                            ...defaultStackOptions,
                            headerShown: false,
                        }} /> 
                        */}
                    </ThemeProvider>
                </AppContextProvider>
            </I18nContextProvider>
        </QueryClientProvider>
    )
}