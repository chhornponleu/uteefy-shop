import { useTheme as _useTheme, Theme } from '@react-navigation/native';


export default function useTheme() {
    const theme = _useTheme()
    return {
        ...theme,
    }
}