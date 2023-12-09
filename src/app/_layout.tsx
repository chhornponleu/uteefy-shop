import { ApolloProvider } from "@apollo/client";
import {
    ThemeProvider
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { apoloClient } from "../commons/apolloClient";
import { AppContextProvider } from "../context/AppProvider";
import { LightTheme } from "../hooks/useTheme";
import { ToastProvider } from 'react-native-toast-notifications'

import '../../styles/global.css';

const client = new QueryClient()


export default function RootLayout() {
    return (
        <QueryClientProvider client={client}>
            <ApolloProvider client={apoloClient}>
                <ToastProvider>
                    <AppContextProvider>
                        <AppLayout />
                    </AppContextProvider>
                </ToastProvider>
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