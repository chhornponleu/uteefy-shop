import {
    useTheme
} from "@react-navigation/native";
import React from 'react';
import { Text } from "../typo";
import { Box, BoxProps } from './Box';
import { colors } from "../../commons/colors";
interface CardProps extends BoxProps {

}

function Card({ ...props }: CardProps) {
    return (
        <Box px={16} py={8} {...props} />
    )
}

function CardHeader({ title, subTitle, right: rightIcons, ...props }: { title: string | React.JSX.Element, subTitle?: string; right?: any; } & BoxProps) {
    return (
        <Box row py={8} flex={{ justify: 'space-between' }} {...props}>
            <Box flex>
                {title ? (<Text font={{ size: 16, weight: 'bold' }}>{title}</Text>) : null}
                {subTitle ? (<Text size={14} color={colors.gray[500]}>{subTitle}</Text>) : null}
            </Box>
            {rightIcons}
        </Box>
    )
}

function CardContent({ children, bordered, ...props }: { children: any, bordered?: boolean; } & CardProps) {
    const borderedProps: CardProps = {}
    const theme = useTheme();
    if (bordered) {
        borderedProps.p = 16;
        borderedProps.border = { width: 1, color: theme.colors.border, radius: 8 }
    }
    return (
        <Box py={8} {...borderedProps} flex={{ justify: 'space-between' }} {...borderedProps} {...props}>
            {children}
        </Box>
    )
}

export { Card, CardContent, CardHeader };

