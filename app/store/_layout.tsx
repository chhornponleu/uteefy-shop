import { Redirect, Tabs, useRouter } from "expo-router";
import React from 'react';
import { useAppContext } from "../../context/app-context";

type Props = {};
export default function StoreLayout({ }: Props) {
    const { user } = useAppContext();
    const router = useRouter()
    if (!user) {
        <Redirect href={{ pathname: '/login' }} />
    }
    return (
        <Tabs />
    )
}