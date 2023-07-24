import { useSearchParams } from "expo-router";
import React from 'react'
import { Box } from "../../../../../../components/containers";
import { Text } from "../../../../../../components/typo";

type Props = {};
export default function ItemInventory({ }: Props) {
    const { store_id, item_id } = useSearchParams<{ store_id: string; item_id: string }>();
    return (
        <Box flex>
            <Text>Inventory</Text>
            <Text>{store_id}</Text>
            <Text>{item_id}</Text>
        </Box>
    )
}