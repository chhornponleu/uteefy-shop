

import { User } from "firebase/auth/react-native";
import { Store } from "../data/store";
import React from "react";

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

export function AppProvider(props) {

    const [user, setUser] = React.useState<User>();
    const [store, setStore] = React.useState<Store>();
    const [locale, setLocale] = React.useState('en');
    const [ready, setReady] = React.useState(false);

    return (
        <AppContext.Provider
            value={{
                user,
                store,
                locale,
                ready
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
