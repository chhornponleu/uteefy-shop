import {
    useTheme
} from "@react-navigation/native";
import React from 'react';
import { colors } from "../../commons/colors";
import { Text } from "../typo";
import { Box, BoxProps } from './Box';
interface CardProps extends BoxProps {

}

function Card({ ...props }: CardProps) {
    return (
        <Box p={16} {...props} />
    )
}

function CardHeader(props: { title: string, subTitle?: string; rightIcons?: any; }) {
    return (
        <Box row mb={8} flex={{ justify: 'space-between' }}>
            <Box flex>
                <Text font={{ size: 16, weight: 'bold' }}>{props.title}</Text>
                <Text font={{ size: 14, }} color={colors.gray[400]}>{props.subTitle}</Text>
            </Box>
            {props.rightIcons}
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
        <Box  {...borderedProps} flex={{ justify: 'space-between' }} {...borderedProps} {...props}>
            {children}
        </Box>
    )
}

export { Card, CardHeader, CardContent };
