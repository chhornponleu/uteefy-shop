import { Stack } from "expo-router";
import React from 'react';
import { Box } from "../../../../components/containers";
import { Text } from "../../../../components/typo";

type Props = {};
export default function ItemCreate({ }: Props) {
    return (
        <Box flex>
            <Stack.Screen
                options={{
                    title: 'New Order',
                    headerBackVisible: true,
                    headerBackTitle: 'Orders',
                    headerBackTitleVisible: true,
                }}
            />
            <Text>- list all today orders</Text>
            <Text>- filter by status</Text>
            <Text>- filter by date (range)</Text>
            <Text>- sort by date</Text>
        </Box>
    )
}