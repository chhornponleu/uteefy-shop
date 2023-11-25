import { UseI18nProps, useI18n } from "../../i18n/useI18n";
import { Text, TextProps } from "./Text";

type TextI18nProps = TextProps & UseI18nProps;
export function TextI18n({
    code,
    params,
    fallback,
    ...props
}: TextI18nProps) {
    const translated = useI18n({ code, params, fallback });
    if (!translated) return null;
    return (
        <Text  {...props}>{translated}</Text>
    )
}

