import React from 'react';
import { Box } from "../../components/containers";
import { Text } from "../../components/typo";
import { useAppContext } from "../../context/AppProvider";
import { useQuery } from "@apollo/client";
import { StoreList_Query } from "../../features/store/queries";
import { Redirect } from "expo-router";

type Props = {};

// This will list shortcut to other features
export default function StoreList({ }: Props) {
    return <Redirect href={"/store/"} />
}