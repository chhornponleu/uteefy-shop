import { useRouter } from "expo-router";
import React from 'react';
import { Box } from "../../../components/containers";
import { Text } from "../../../components/typo";

type Props = {};
export default function StoreItemsIndex({ }: Props) {
    const router = useRouter()
    return (
        <Box flex center>
            <Text>Products</Text>
        </Box>
    )
}