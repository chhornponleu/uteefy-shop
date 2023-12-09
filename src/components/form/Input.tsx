import React from 'react';
import { Platform, TextInputProps, ViewStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../commons/colors";
import { createStyleHook } from "../../hooks/createStyleHook";
import useTheme from "../../hooks/useTheme";
import { Box, BoxProps } from "../containers";
import { Text } from "../typo";




export default ({
    ref,
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
}) => {

    const theme = useTheme();
    const [focused, setFocused] = React.useState(false);


    const labelVisible = !!(label?.length > 0 && (focused || props.value));

    return (
        <Box
            style={[
                wrapperStyle
            ]}
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
                ]}
            />

            {right}

            {(labelVisible) ? (
                <Box >
                    <Text >
                        {label}
                    </Text>
                </Box>
            ) : null}

        </Box>
    )
}
