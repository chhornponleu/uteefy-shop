

import React from 'react';
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { colors } from "../../commons/colors";
import { Text } from "../typo";

const Variants = {
    'default': { color: colors.white, backgroundColor: colors.black },
    'primary': { color: colors.white, backgroundColor: colors.black },
    'secondary': { color: colors.white, backgroundColor: colors.black },
    'disabled': { color: colors.white, backgroundColor: colors.black },
}

const Sizes = {
    'sm': 32,
    'md': 48,
    'lg': 52,
    'xl': 56,
}

const Radius = {
    'xs': 4,
    'sm': 8,
    'md': 12,
    'lg': 16,
    'xl': 20,
    'pill': 100
}

type Type = 'plain' | 'bordered' | 'filled' | 'gradient';

type Props = PressableProps & {
    loading?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    activeOpacity?: number;
    children?: any;
    size?: keyof typeof Sizes;
    variant?: keyof typeof Variants;
    radius?: keyof typeof Radius;
    alignSelf?: ViewStyle['alignSelf'];
    type?: Type;
    textColor?: string;
}


export function Button({
    loading,
    left,
    right,
    width,
    activeOpacity = 0.7,
    children,
    variant = 'default',
    size = 'md',
    radius = 'sm',
    alignSelf = 'stretch',
    type = 'filled',
    textColor,

    style,
    ...props
}: Props) {

    const { backgroundColor, color } = Variants[variant] || {};
    const minHeight = Sizes[size];
    const borderRadius = Radius[radius];

    return (
        <Pressable
            style={({ ...params }) => ([
                { alignSelf, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
                {
                    alignSelf,
                    borderRadius,
                    backgroundColor,
                    opacity: params.pressed ? activeOpacity : 1,
                    minHeight,
                    paddingHorizontal: minHeight
                },
                typeof style === "function" ? style(params) : style
            ])}
            {...props}
        >

            {left}
            <Text align="center" color={textColor || colors.white}>
                {children}
            </Text>
            {right}
        </Pressable>
    )
}