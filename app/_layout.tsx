import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { AppContextProvider } from "../context/app-context";

import { ApolloProvider } from "@apollo/client";
import {
    ThemeProvider
} from "@react-navigation/native";
import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { LightTheme } from "../hooks/useTheme";
import { I18nContextProvider } from "../libs/i18n";
import { apoloClient } from "../commons/apolloClient";

type Props = {};

const client = new QueryClient()

export default function RootLayout({ }: Props) {
    const theme = useColorScheme();
    const themeColors = useMemo(() => {
        return LightTheme;
    }, [theme])
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