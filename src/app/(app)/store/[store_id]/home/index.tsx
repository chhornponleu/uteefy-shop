import { useGlobalSearchParams } from "expo-router";
import React from 'react';
import { Button } from "../../../../../components/buttons";
import { Box } from "../../../../../components/containers";
import { Text } from "../../../../../components/typo";
import { TextI18n } from "../../../../../components/typo/TextI18n";
import { useAuthToken, useLocale, useUserInfo } from "../../../../../context/AppProvider";
import { useQuery } from "@apollo/client";
import { StoreList_Query } from "../../../../../features/store/queries";

type Props = {};
export default function StoreHomeIndex({ }: Props) {
    const p = useGlobalSearchParams()
    const { setLocale } = useLocale()
    const authToken = useAuthToken();
    const userInfo = useUserInfo()

    const q = useQuery(StoreList_Query);

    console.log('storelist', q.data);


    return (
        <Box>
            <Text>Store Home</Text>
            <Text>{JSON.stringify(p)}</Text>
            <Button onPress={() => {
                authToken.setToken(null)
                userInfo.setUser(null);
            }}>Signout</Button>

            <TextI18n code="hello" />

            <Box >
                <Button
                    size="sm"
                    onPress={() => {
                        setLocale('en')
                    }}
                >English</Button>
                <Button
                    size="sm"
                    onPress={() => {
                        setLocale('km')
                    }}
                >Khmer</Button>
            </Box>
        </Box>
    )
}