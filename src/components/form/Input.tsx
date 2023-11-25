import React from 'react';
import { Platform, TextInputProps, ViewStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../commons/colors";
import { createStyleHook } from "../../hooks/createStyleHook";
import useTheme from "../../hooks/useTheme";
import { Box, BoxProps } from "../containers";
import { Text } from "../typo";

const Sizes = {
    sm: 32,
    md: 44,
    lg: 54,
    xl: 64
}

const PaddingV = {
    sm: 8,
    md: 8,
    lg: 8,
    xl: 20
}

type Props = TextInputProps & {
    label?: string;
    left?: any;
    right?: any;
    size?: keyof typeof Sizes;
    wrapperStyle?: ViewStyle,
    wrapperProps?: Exclude<BoxProps, 'style'>,
};

const useStyle = createStyleHook(() => ({
    input: {
        flex: 1,
    },
    wrapper: {
        borderWidth: 1, borderColor: colors.gray[400],
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 4,
        paddingHorizontal: 16,
    }
}))

export default React.forwardRef<TextInput, Props>(({
    left,
    right,
    style,
    wrapperStyle,
    wrapperProps = {},
    placeholderTextColor = colors.gray[400],

    size = 'md',
    label,
    placeholder,

    onBlur,
    onFocus,
    ...props
}, ref) => {

    const theme = useTheme();
    const { styles } = useStyle();
    const [focused, setFocused] = React.useState(false);

    const height = Sizes[size];
    const paddingVertical = PaddingV[size];

    const labelVisible = !!(label?.length > 0 && (focused || props.value));

    return (
        <Box
            row
            style={[
                styles.wrapper,
                { minHeight: height, overflow: 'visible' },
                { backgroundColor: props.editable === false ? colors.gray[100] : undefined },
                wrapperStyle
            ]}
            items="center"
            border={{}}
            {...wrapperProps}
        >
            {left}

            <TextInput
                ref={ref}
                underlineColorAndroid={colors.transparent}
                placeholderTextColor={placeholderTextColor}
                placeholder={focused ? undefined : (placeholder || label)}
                onFocus={(e) => {
                    setFocused(true)
                    onFocus?.(e);
                }}
                onBlur={(e) => {
                    setFocused(false)
                    onBlur?.(e);
                }}
                {...props}
                style={[
                    Platform.OS === 'web' ? { outline: "none" } as any : {},
                    { color: theme.colors.text, paddingVertical },
                    styles.input, style,
                    // { backgroundColor: 'lightblue' }
                ]}
            />

            {right}

            {(labelVisible) ? (
                <Box
                    px={8}
                    style={{
                        zIndex: 1, position: 'absolute',
                        top: -8, left: 8,
                        backgroundColor: theme.colors.background
                    }}
                >
                    <Text
                        size={12}
                        color={colors.gray[400]}>
                        {label}
                    </Text>
                </Box>
            ) : null}

        </Box>
    )
})
