
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect } from "react";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Store } from "../data/types";
import { User } from "../services/gql/graphql";
import { i18n } from "../i18n";

interface IAppContextData {
    token?: string;
    user?: User;
    store?: Store;
    locale?: string;
    ready: boolean;
}

interface AppContextStore {
    data: IAppContextData;
    setData: (data: Partial<IAppContextData>) => void;
}

const initialData: IAppContextData = {
    ready: undefined,
}

export const useAppContextStore = create(
    persist<AppContextStore>(
        (set, get) => ({
            data: initialData,
            setData: (data: Partial<IAppContextData>) =>
                set({
                    data: {
                        ...(get().data || {}),
                        ...data,
                        ready: true
                    }
                }),
        }), {
        name: 'appstore',
        storage: createJSONStorage(() => AsyncStorage),
    })
)

export const AppContext = React.createContext<IAppContextData>({
    locale: 'en',
    ready: false,
});

export function useAppContext() {
    return useAppContextStore(state => state.data);
}

export function useLocale() {
    return useAppContextStore(state => ({
        locale: state.data.locale,
        setLocale: useCallback((locale: string) => {
            i18n.changeLanguage(locale)
            state.setData({ locale })
        }, [])
    }));
}

export function useAuthToken() {
    return useAppContextStore(state => ({
        token: state.data.token,
        setToken: useCallback((token: string) => state.setData({ token }), [])
    }));
}

export function useUserInfo() {
    return useAppContextStore(state => ({
        user: state.data.user,
        setUser: useCallback((user: User) => state.setData({ user }), [])
    }));
}

export function useStore() {
    return useAppContextStore(state => ({
        store: state.data.store,
        setStore: useCallback((store: Store) => state.setData({ store }), [])
    }));
}

export function AppContextProvider(props) {
    const { data, setData } = useAppContextStore()

    console.log('app context store :::: ', data)

    useEffect(() => {
        if (data.ready === undefined) {
            setData({ ready: true })
        }
    }, [data.ready])

    if (!data.ready) {
        return null;
    }

    return props.children;
}

