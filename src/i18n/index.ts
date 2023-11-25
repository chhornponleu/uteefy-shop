import i18next from 'i18next';
import { en } from './locales/en';

export const i18n = i18next;
export * from './context';

export type LocaleCodes = keyof (typeof en);
export type TranslationsKey = keyof Translations;
export type Translations = typeof en;
export type InterpolationInner<
    S extends string,
    U extends object
> = S extends `${string}{{${infer V}}}${infer Rest}`
    ? InterpolationInner<Rest, U & { [key in V]: string | number }>
    : U;
export type Interpolate<S extends keyof Translations> = InterpolationInner<
    // Translations[S]['en'] | Translations[S]['km'] | Translations[S]['zh'],
    Translations[S],
    object
>;
