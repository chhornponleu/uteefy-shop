import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { AppContextProvider, useLocale } from "../context/AppProvider";

import { ApolloProvider } from "@apollo/client";
import {
    ThemeProvider
} from "@react-navigation/native";
import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { apoloClient } from "../commons/apolloClient";
import { LightTheme } from "../hooks/useTheme";

import '../../styles/global.css';
import { SafeAreaProvider } from "react-native-safe-area-context";

const client = new QueryClient()

export default function RootLayout() {

    console.log('----> _layout.tsx');

    return (
        <QueryClientProvider client={client}>
            <ApolloProvider client={apoloClient}>
                <AppContextProvider>
                    <AppLayout />
                </AppContextProvider>
            </ApolloProvider>
        </QueryClientProvider>

    )
}

function AppLayout() {
    const { locale } = useLocale();
    const theme = useColorScheme();
    const themeColors = useMemo(() => {
        return LightTheme;
    }, [theme])

    return (
        <ThemeProvider value={themeColors}>
            <Slot />
        </ThemeProvider>
    )
}