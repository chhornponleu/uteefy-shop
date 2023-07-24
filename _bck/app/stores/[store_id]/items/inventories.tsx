import { useSearchParams } from "expo-router";
import React from 'react'
import { Box } from "../../../../../components/containers";
import { Text } from "../../../../../components/typo";

type Props = {};
export default function Inventories({ }: Props) {
    const { store_id } = useSearchParams<{ store_id: string }>()
    return (
        <Box flex>
            <Text>Inventories {store_id}</Text>
            <Text>{1}</Text>
        </Box>
    )
}