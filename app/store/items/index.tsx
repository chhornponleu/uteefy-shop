import React from 'react';
import { Box } from "../../../components/containers";
import { Text } from "../../../components/typo";
import { Button } from "../../../components/buttons";
import { useRouter } from "expo-router";

type Props = {};
export default function StoreItems({ }: Props) {
    const router = useRouter()
    return (
        <Box flex center>
            <Text>Store Home</Text>
            <Button onPress={() => router.push('/store/items/create')}>Create</Button>
        </Box>
    )
}