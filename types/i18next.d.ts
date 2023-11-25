import { en } from "../src/i18n/locales/en";


declare module 'i18next' {
    interface Resources {
        translation: typeof en;
    }
}