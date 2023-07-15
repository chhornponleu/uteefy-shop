import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';



declare module 'react-i18next' {
    interface Resources {
        translation: typeof en;
    }
}


export type LocaleKeys = keyof (typeof en);
export const i18n = i18next;
export * from './context'
