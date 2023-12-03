import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { AppContextProvider } from "../context/AppProvider";
import { ApolloProvider } from "@apollo/client";
import {
    ThemeProvider
} from "@react-navigation/native";
import { ComponentProps, useMemo } from "react";
import { FlatList, useColorScheme } from "react-native";
import { apoloClient } from "../commons/apolloClient";
import { LightTheme } from "../hooks/useTheme";

import '../../styles/global.css';
import { Text } from "../components/typo";
import { FlashList } from "@shopify/flash-list";

const client = new QueryClient()


export default function RootLayout() {
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