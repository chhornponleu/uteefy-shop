import { useMemo } from "react";
import { TranslationsKey, i18n } from ".";
import { useAppContext } from "../../context/app-context";

export type UseI18nProps = {
    code: TranslationsKey;
    params?: Record<string, string>;
    fallback?: string;
    locale?: string;
}
export function useI18n({
    code, fallback, params, locale
}: UseI18nProps) {
    const { locale: _locale } = useAppContext()
    const translated = useMemo(() => {
        return i18n.t(code as any, params as any, { locale: locale || _locale })
    }, [code, params, locale, _locale])
    return translated || fallback;
}


type UseI18nManyProps<T extends string> = {
    [key in T]?: {
        fallback?: string;
        params?: Record<string, string>;
    } | undefined
};

type UseI18nManyOptions = {

    locale?: string;
}


export function useI18nMany<T extends TranslationsKey>(
    codes: UseI18nManyProps<T>,
    { locale }: UseI18nManyOptions = {}
) {
    const { locale: _locale } = useAppContext()
    const translated = useMemo(() => {
        const result: {
            [key in (keyof typeof codes)]?: string
        } = {};
        Object.keys(codes).forEach((key) => {
            const { fallback, params } = codes[key] || {};
            result[key] = i18n.t(key as any, params as any, { locale: locale || _locale }) || fallback;
        })
        return result;
    }, [codes, locale, _locale])
    return translated;
}

// type UseI18nManyProps<T extends { [key in TranslationsKey]?: string }> = {
//     codes: {
//         [key in keyof T]?: {
//             fallback?: string;
//             params?: Record<string, string>;
//         }
//     };
//     locale?: string;
// }


// export function useI18nMany<T>({
//     codes, locale
// }: UseI18nManyProps<T>) {
//     const { locale: _locale } = useAppContext()
//     const translated = useMemo(() => {
//         const result: {
//             [key in (keyof typeof codes)]?: string
//         } = {};
//         Object.keys(codes).forEach((key) => {
//             const { fallback, params } = codes[key] || {};
//             result[key] = i18n.t(key as any, params as any, { locale: locale || _locale }) || fallback;
//         })
//         return result;
//     }, [codes, locale, _locale])
//     return translated;
// } 