import { createContext } from "react";
import { useI18nInitializer } from "./useI18nInitializer";

const Context = createContext({});

export function I18nContextProvider({ children }: any) {
    const { isI18nReady } = useI18nInitializer();
    if (!isI18nReady) {
        return null
    }
    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
};
