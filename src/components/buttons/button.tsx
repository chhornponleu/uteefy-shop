

import React from 'react';
import { Pressable, PressableProps } from "react-native";
import { Text } from "../typo";

type Colors = {
    'primary': { text: string, container: string },
    'secondary': { text: string, container: string },
    'disabled': { text: string, container: string },
    'danger': { text: string, container: string },
    'warning': { text: string, container: string },
    'success': { text: string, container: string },
}

const Variants = {
    'text': {
        text: '',
        container: '',
        colors: {
            primary: { text: 'text-black', container: '' },
            secondary: { text: 'text-gray-600', container: '' },
            disabled: { text: 'text-gray-400', container: '' },
            danger: { text: 'text-red-600', container: '' },
            warning: { text: 'text-orange-600', container: '' },
            success: { text: 'text-green-600', container: '' },

        } as Colors
    },
    'outlined': {
        text: '',
        container: 'border',
        colors: {
            primary: { text: 'text-black', container: 'border-black' },
            secondary: { text: 'text-gray-600', container: 'border-gray-600' },
            disabled: { text: 'text-gray-400', container: 'border-gray-400' },
            danger: { text: 'text-red-600', container: 'border-red-600' },
            warning: { text: 'text-orange-600', container: 'border-orange-600' },
            success: { text: 'text-green-600', container: 'border-green-600' },
        } as Colors
    },
    'filled': {
        text: '',
        container: '',
        colors: {
            primary: { text: 'text-white', container: 'bg-black' },
            secondary: { text: 'text-gray-100', container: 'bg-gray-900' },
            disabled: { text: 'text-gray-100', container: 'bg-gray-400' },
            danger: { text: 'text-red-100', container: 'bg-red-600' },
            warning: { text: 'text-orange-100', container: 'bg-orange-600' },
            success: { text: 'text-green-100', container: 'bg-green-600' },
        } as Colors
    },
}

const Sizes = {
    'sm': { text: 'text-sm', container: 'py-2 px-4 rounded-sm' },
    'md': { text: 'text-md', container: 'py-3 px-6 rounded-md' },
    'lg': { text: 'text-lg', container: 'py-4 px-8 rounded-lg' },
    'xl': { text: 'text-xl', container: 'py-5 px-10 rounded-xl' },
    '2xl': { text: 'text-2xl', container: 'py-6 px-12 rounded-2xl' },
}

type Props = PressableProps & {
    loading?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;

    variant?: keyof typeof Variants;
    size?: keyof typeof Sizes;
    color?: keyof Colors;


    textClassName?: string;
    fullWidth?: boolean;

    children?: any
}


export function Button({
    loading,
    left,
    right,
    children,

    fullWidth,
    textClassName,

    ...props
}: Props) {
    const variants = Variants[props?.variant || 'filled'];
    const sizes = Sizes[props?.size || 'md'];
    const colors = variants?.colors?.[props?.color || 'primary'];
    return (
        <Pressable
            {...props}
            className={`
                mt-2 
                ${fullWidth ? undefined : 'self-baseline'} 
                ${Variants[props?.variant]?.container} 
                ${sizes?.container} 
                ${colors?.container} 
                ${props.className}
            `}
        >
            {left}
            <Text className={`
                text-center 
                ${variants?.text || ''} 
                ${sizes?.text} 
                ${colors?.text} 
                ${textClassName}
            `}>
                {children}
            </Text>
            {right}
        </Pressable>
    )
}