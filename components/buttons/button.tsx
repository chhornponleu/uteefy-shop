

import React from 'react';
import { Pressable, PressableProps, View, ViewStyle } from "react-native";
import { colors } from "../../commons/colors";
import { createStyleHook } from "../../hooks/createStyleHook";
import { Box, BoxProps } from "../containers";
import { Text } from "../typo";
import { TranslationsKey } from "../../libs/i18n";

const Variants = {
    'default': { color: colors.white, backgroundColor: colors.black },
    'primary': { color: colors.white, backgroundColor: colors.black },
    'secondary': { color: colors.white, backgroundColor: colors.black },
    'disabled': { color: colors.white, backgroundColor: colors.black },
}

const Sizes = {
    'sm': 8,
    'md': 16,
    'lg': 20,
    'xl': 24
}

type Props = PressableProps & {
    loading?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    activeOpacity?: number;
    containerProps?: BoxProps;
    children?: any;
    size?: keyof typeof Sizes;
    variant?: keyof typeof Variants;
}


export function Button({
    loading,
    left,
    right,
    width,
    activeOpacity = 0.6,
    children,
    containerProps: wrapperProps,
    variant = 'default',
    size = 'md',

    style,
    ...props
}: Props) {
    const { backgroundColor, color } = Variants[variant] || {};
    const padding = Sizes[size];

    return (
        <Pressable
            style={({ ...params }) => ([
                { opacity: params.pressed ? activeOpacity : 1, backgroundColor },
                { borderRadius: padding ? padding / 4 : 0 },
                typeof style === "function" ? style(params) : style
            ])}
            {...props}
        >
            <Box
                row center
                px={padding ? padding * 2 : undefined}
                py={padding}
                {...(wrapperProps || {})}
            >
                {left}
                <Text align="center" color={colors.white}>
                    {children}
                </Text>
                {right}
            </Box>
        </Pressable>
    )
}