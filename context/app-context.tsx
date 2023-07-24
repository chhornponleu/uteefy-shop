

import { User, getAuth } from "firebase/auth/react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { Store } from "../data/store";


interface IAppContext {
    user?: User;
    store?: Store;
    locale: string;
    ready: boolean;
}

export const AppContext = React.createContext<IAppContext>({
    locale: 'en',
    ready: false
});

export function useAppContext() {
    return React.useContext(AppContext);
}

export function AppContextProvider(props) {
    const [appState, setAppState] = React.useState<IAppContext>({
        ready: false,
        locale: 'en'
    });

    useLayoutEffect(() => {
        const auth = getAuth()
        auth.onAuthStateChanged((user) => {
            console.log('onAuthStateChanged', user);
            setAppState(prev => ({
                ...prev,
                user,
            }))
        })
    }, [])

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