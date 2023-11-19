
import { User } from "firebase/auth/react-native";
import React, { useLayoutEffect } from "react";
import { Store } from "../data/types";
import { auth } from "../libs/firebase";
import { i18n } from "../libs/i18n";
import StoreContextProvider from "./store-context";
import { AuthProvider } from "./auth-context";

interface IAppContext {
    user?: User;
    store?: Store;
    locale: string;
    ready: boolean;
}

export const AppContext = React.createContext<IAppContext>({
    locale: 'en',
    ready: false,
});

export function useAppContext() {
    return React.useContext(AppContext);
}

export function AppContextProvider(props) {

    const [appState, setAppState] = React.useState<IAppContext>({
        ready: false,
        locale: i18n.language,
        user: auth.currentUser,
    });

    useLayoutEffect(() => {
        i18n.on('languageChanged', (locale) => {
            setAppState(prev => ({
                ...prev,
                locale,
                ready: true,
            }))
        })
        setAppState(prev => ({
            ...prev,
            ready: true
        }))
    }, [])

    console.log('appState', appState);

    if (!appState.ready) {
        return null;
    }

    return (
        <AppContext.Provider value={appState}>
            <AuthProvider>
                <StoreContextProvider>
                    {props.children}
                </StoreContextProvider>
            </AuthProvider>
        </AppContext.Provider>
    );
}

