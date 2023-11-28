import React from 'react';
import { View } from "react-native";
import { BoxProps } from "./Box";

type Props = BoxProps & {};
export default function Page({ ...props }: Props) {
    return (
        <View
            {...props}
            className={`
                flex-1 bg-white 
                ${props.className}
            `}
        />
    )

}