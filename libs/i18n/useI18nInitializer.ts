import AsyncStorage from "@react-native-async-storage/async-storage";
import i18next from "i18next";
import { useLayoutEffect, useState } from "react";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { km } from "./locales/km";

export function useI18nInitializer() {

    const [isI18nReady, setIsReady] = useState(false);

    useLayoutEffect(() => {
        async function init() {
            const localeKey = '_locale';
            const language = await AsyncStorage.getItem(localeKey)
            const defaultLanguage = 'en';
            i18next.use(initReactI18next)
                .init({
                    debug: __DEV__,
                    compatibilityJSON: 'v3',
                    lng: language || defaultLanguage,
                    fallbackLng: defaultLanguage,
                    resources: {
                        en: { translation: en },
                        km: { translation: km },
                    },
                }, () => {
                    setIsReady(true)
                })
            i18next.on('languageChanged', (lng) => {
                AsyncStorage.setItem(localeKey, lng)
            })
        }
        !i18next.isInitialized && init();
    }, [])
    return { isI18nReady };
}
