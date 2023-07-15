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
                    title: 'All Orders',
                    headerBackVisible: true,
                    headerBackTitle: 'Orders',
                    headerBackTitleVisible: true,
                }}
            />
            <Text>Create Item</Text>
            <Text>Product</Text>
            <Text>Pricing</Text>
            <Text>Inventory option: 'always avaialble upon active', x today, x tomorrow, x this week....</Text>
            <Text>Verify using photo (if order by customer)</Text>
        </Box>
    )
}