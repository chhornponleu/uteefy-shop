import React from 'react';
import { Box, BoxProps } from "./Box";
import { View } from "react-native";

type Props = BoxProps & {};
export default function Page({ ...props }: Props) {
    return (
        <View
            {...props}
            className={`
                flex-1 
                p-8
                ${props.className}
            `}
        />
    )

}