import { useTheme as _useTheme, Theme } from '@react-navigation/native';
import { colors } from "../commons/colors";

type ExtraColors = {
    textSecondary: string;
    textDanger: string;
    textWarning: string;
    textSuccess: string;

    borderSecondary: string;
    borderDanger: string;
    borderWarning: string;
    borderSuccess: string;

}

export interface AppTheme extends Theme {
    dark: boolean;
    colors: Theme['colors'] & ExtraColors
}

const extraLightColors: ExtraColors = {
    textSecondary: colors.gray[400],
    textDanger: colors.red[600],
    textWarning: colors.orange[600],
    textSuccess: colors.green[600],

    borderSecondary: '#6c757d',
    borderDanger: '#dc3545',
    borderWarning: '#ffc107',
    borderSuccess: '#28a745',

}

export const LightTheme = {
    dark: false,
    colors: {
        background: colors.white,
        card: colors.white,
        border: colors.gray[200],
        notification: colors.red[600],
        primary: colors.blue[800],
        text: colors.black,
    }
};
export const DarkTheme: Theme = {
    dark: true,
    colors: {
        background: colors.gray[800],
        card: colors.gray[800],
        border: colors.gray[600],
        notification: colors.red[600],
        primary: colors.white,
        text: colors.gray[100],
    }
};

export default function useTheme(): AppTheme {
    const theme = _useTheme()
    return {
        dark: theme.dark,
        colors: {
            ...theme.colors,
            ...extraLightColors
        }
    }
}