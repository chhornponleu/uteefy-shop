import React from 'react';
import { Platform, TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Box } from "../containers";
import { createStyleHook } from "../../hooks/createStyleHook";
import { colors } from "../../commons/colors";
import useTheme from "../../hooks/useTheme";

const Sizes = {
    sm: 8,
    md: 16,
    lg: 24,
    xxl: 32
}

type Props = TextInputProps & {
    label?: string;
    left?: any;
    right?: any;
    size?: keyof typeof Sizes
};

const useStyle = createStyleHook(({ }) => ({
    input: {
        flex: 1,
        paddingVertical: 16,
    },
    wrapper: {
        borderWidth: 1, borderColor: colors.gray[400],
        marginTop: 4,
        marginBottom: 8,
        borderRadius: 4,
        paddingHorizontal: 16
    }
}))

function Input({
    left,
    right,
    style,
    placeholderTextColor = colors.gray[400],
    onFocus,
    ...props
}: Props, ref) {
    const theme = useTheme();
    const { styles } = useStyle();
    const [focused, setFocused] = React.useState(false);
    return (
        <Box row style={[styles.wrapper]} items="center">
            {left}
            <TextInput
                underlineColorAndroid={colors.transparent}
                placeholderTextColor={placeholderTextColor}
                onFocus={(e) => {
                    onFocus && onFocus(e);
                    setFocused(true)
                }}
                {...props}
                ref={ref}
                style={[
                    Platform.OS === 'web' ? { outline: "none" } as any : {},
                    { color: theme.colors.text },
                    styles.input, style
                ]}
            />
            {right}
        </Box>
    )
}

export default React.forwardRef<TextInput, Props>(Input)