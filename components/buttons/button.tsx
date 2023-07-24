

import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "../typo";

type Props = TouchableOpacityProps & {
    loading?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;
    width?: number | string;
    height?: number | string;
};
export function Button({
    loading,
    left,
    right,
    width,
    activeOpacity = 0.8,
    children,
    ...props
}: Props) {
    return (
        <TouchableOpacity activeOpacity={activeOpacity} {...props}>
            {typeof children === "string" ? (
                <Text>{children}</Text>
            ) : children}
        </TouchableOpacity>
    )
}