import { useMemo } from "react";
import { TranslationsKey, i18n } from ".";
import { useLocale } from "../context/AppProvider";

export type UseI18nProps = {
    code: TranslationsKey;
    params?: Record<string, string>;
    fallback?: string;
    locale?: string;
}
export function useI18n({
    code, fallback, params, locale
}: UseI18nProps) {
    const { locale: _locale } = useLocale()
    const translated = useMemo(() => {
        return i18n.t(code as any, params as any, { lng: locale || _locale })
    }, [code, params, locale, _locale])

    return translated || fallback;
}


type UseI18nManyProps<T extends string> = {
    [key in T]?: {
        fallback?: string;
        params?: Record<string, string>;
    } | undefined
};

export function useI18nMany<T extends TranslationsKey>(
    codes: UseI18nManyProps<T>,
) {
    const { locale } = useLocale()
    const translated = useMemo(() => {
        const result: {
            [key in (keyof typeof codes)]?: string
        } = {};
        Object
            .keys(codes)
            .forEach((key) => {
                const { fallback, params } = codes[key] || {};
                result[key] = i18n.t(key as any, params as any, { lng: locale }) || fallback;
            })
        return result;
    }, [codes, locale])
    return translated;
}
