import {
    useTheme
} from "@react-navigation/native";
import React from 'react';
import { Text } from "../typo";
import { Box, BoxProps } from './Box';
import { colors } from "../../commons/colors";
import { ViewProps } from "react-native";
interface CardProps extends ViewProps {

}

function Card({ ...props }: CardProps) {
    return (
        <Box {...props} className={`px-8 py-4 ${props.className}`} />
    )
}

function CardHeader({ title, subTitle, right: rightIcons, ...props }: { title: string | React.JSX.Element, subTitle?: string; right?: any; } & BoxProps) {
    return (
        <Box  {...props} className={`justify-between ${props.className}`}>
            <Box className="flex-1">
                {title ? (<Text className="font-bold text-lg">{title}</Text>) : null}
                {subTitle ? (<Text className="text-gray-400">{subTitle}</Text>) : null}
            </Box>
            {rightIcons}
        </Box>
    )
}

function CardContent({ children, bordered, ...props }: { children: any, bordered?: boolean; } & CardProps) {
    const borderedProps: CardProps = {}
    const classes = `bg-white dark:bg-gray-800 rounded-lg shadow-md ${props.className}`
    return (
        <Box {...borderedProps} {...borderedProps} {...props} className={`${classes}`}>
            {children}
        </Box>
    )
}

export { Card, CardContent, CardHeader };

