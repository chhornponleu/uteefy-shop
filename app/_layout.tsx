import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { AppContextProvider } from "../context/app-context";

import { ApolloProvider } from "@apollo/client";
import {
    ThemeProvider
} from "@react-navigation/native";
import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { apoloClient } from "../commons/apolloClient";
import { LightTheme } from "../hooks/useTheme";
import { I18nContextProvider } from "../libs/i18n";

const client = new QueryClient()

export default function RootLayout() {
    const theme = useColorScheme();
    const themeColors = useMemo(() => {
        return LightTheme;
    }, [theme])

    console.log('----> _layout.tsx');

    return (
        <QueryClientProvider client={client}>
            <ApolloProvider client={apoloClient}>
                <I18nContextProvider>
                    <AppContextProvider>
                        <ThemeProvider value={themeColors}>
                            <Slot />
                        </ThemeProvider>
                    </AppContextProvider>
                </I18nContextProvider>
            </ApolloProvider>
        </QueryClientProvider>

    )
}
