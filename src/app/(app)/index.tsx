import React from 'react';
import { Box } from "../../components/containers";
import { Text } from "../../components/typo";
import { useAppContext } from "../../context/AppProvider";
import { useQuery } from "@apollo/client";
import { StoreList_Query } from "../../services/store.gql";
import { Redirect } from "expo-router";

type Props = {};

export default function StoreList({ }: Props) {
    const { user } = useAppContext()
    const { data, loading, refetch } = useQuery(StoreList_Query)

    console.log('StoreList', { user, data, loading })
    return <Redirect href={"/store/home/"} />
}