import { useGlobalSearchParams } from "expo-router";
import React from 'react';
import { Button } from "../../../../../components/buttons";
import Content from "../../../../../components/containers/Content";
import Page from "../../../../../components/containers/Page";
import { Text } from "../../../../../components/typo";
import { useAuthToken, useUserInfo } from "../../../../../context/AppProvider";

type Props = {};
export default function StoreHomeIndex({ }: Props) {

    const p = useGlobalSearchParams()
    const authToken = useAuthToken();
    const userInfo = useUserInfo()

    return (
        <Page>
            <Content>
                <Text>Store Home</Text>
                <Text>{JSON.stringify(p)}</Text>
                <Button onPress={() => {
                    authToken.setToken(null)
                    userInfo.setUser(null);
                }}>Signout</Button>


            </Content>
        </Page>
    )
}