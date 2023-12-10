import { TextInput, TextInputProps } from "react-native";
import { Text } from "../typo";
import React, { forwardRef } from "react";

type InputProps = TextInputProps & {
    ref?: React.MutableRefObject<TextInput>;
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'disabled' | 'danger' | 'warning' | 'success';
    errorText?: string;
    label?: string;
}

const classes = {
    sizes: {
        'sm': 'text-sm px-2 h-10 rounded-md',
        'md': 'text-md px-4 h-14 rounded-lg',
        'lg': 'text-lg px-6 h-16 rounded-lg',
        'xl': 'text-xl px-6 h-18 rounded-lg',
    },
    colors: {
        primary: { text: 'border-gray-900', container: '' },
        secondary: { text: 'text-gray-600', container: '' },
        disabled: { text: 'text-gray-200 text-gray-400', container: '' },
        danger: { text: 'text-red-600', container: '' },
        warning: { text: 'text-orange-600', container: '' },
        success: { text: 'border-green-500', container: '' },
    }
}

function InputComponent({
    className,
    size = 'md',
    label,
    color = 'primary',
    errorText,
    ...props
}: InputProps, ref: React.MutableRefObject<TextInput>) {

    return (
        <>
            <TextInput
                {...props}
                ref={ref}
                className={`
                border-2 border-gray-200
                rounded-md dark:border-black
                ${classes.sizes[size]}
                ${classes.colors[color].text}
                ${className}
            `}
            />
            {errorText ? (
                <Text className="text-red-600">{errorText}</Text>
            ) : null}
        </>
    )
}

export const Input = forwardRef(InputComponent);
