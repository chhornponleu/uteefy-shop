import {
    useTheme
} from "@react-navigation/native";
import React from 'react';
import { Box, BoxProps } from "./Box";


type Props = BoxProps & {};
export default function Page({ style, ...props }: Props) {
    const them = useTheme();
    return (
        <Box bg={them.colors.background} flex {...props} />
    )

}