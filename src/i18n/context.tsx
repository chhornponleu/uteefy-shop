import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { km } from "./locales/km";


const defaultLanguage = 'en';

if (!i18next.isInitialized) {
    i18next
        .use(initReactI18next)
        .init({
            debug: __DEV__,
            compatibilityJSON: 'v3',
            fallbackLng: defaultLanguage,
            resources: {
                en: { translation: en },
                km: { translation: km },
            },
        }, () => {
            // alert(i18next.t('hello', { lng: 'km' }))
        })
}