import { useGlobalSearchParams } from "expo-router";
import React from 'react';
import { Box } from "../../../components/containers";
import { Text } from "../../../components/typo";

type Props = {};
export default function StoreHome({ }: Props) {
    const p = useGlobalSearchParams()
    return (
        <Box flex center>
            <Text>Store Home</Text>
            <Text>{JSON.stringify(p)}</Text>
        </Box>
    )
}