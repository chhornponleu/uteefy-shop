
import { router, useNavigation, useRootNavigation, useRootNavigationState, useSegments } from "expo-router";
import { User } from "firebase/auth/react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Store } from "../data/types";
import { auth } from "../libs/firebase";
import { StackActions } from '@react-navigation/native'
import { i18n } from "../libs/i18n";

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
            }))
        })
        auth.onAuthStateChanged((user) => {
            console.log('onAuthStateChanged', user);

            setAppState(prev => ({
                ...prev,
                ready: true,
                user,
            }))
        })
    }, [])

    if (!appState.ready) {
        return null;
    }

    return (
        <AppContext.Provider
            value={{
                ...appState,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}



// interface AppState {
//     user?: User;
//     store?: Store;
//     locale: string;
//     ready: boolean;
// }

// const useAppState = create<AppState>()(
//     persist(
//         (set, get) => ({
//             user: undefined,
//             store: undefined,
//             locale: 'en',
//             setUser: (user: User) => set({ user }),
//             setStore: (store: Store) => set({ store }),
//             setLocale: (locale: string) => set({ locale }),
//         }),
//         {
//             name: 'app-state',
//             storage: createJSONStorage(() => AsyncStorage),
//         }
//     )
// );