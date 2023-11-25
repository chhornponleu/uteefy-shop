import React from 'react';
import { Box } from "../../components/containers";
import { Text } from "../../components/typo";
import { useAppContext } from "../../context/AppProvider";
import { useQuery } from "@apollo/client";
import { StoreList_Query } from "../../services/store.gql";

type Props = {};

export default function StoreList({ }: Props) {
    const { user } = useAppContext()
    const { data, loading, refetch } = useQuery(StoreList_Query)

    console.log('StoreList', { user, data, loading })

    return (
        <Box flex>
            <Text>Store List</Text>
            <Text>{JSON.stringify(data, null, 2)}</Text>
        </Box>
    )
}