import React from 'react'
import Page from "../../../components/containers/Page";
import Content from "../../../components/containers/Content";
import { Text } from "../../../components/typo";
import { Button } from "../../../components/buttons";
import { useGlobalSearchParams } from "expo-router";
import { useAuthToken, useUserInfo } from "../../../context/AppProvider";

type Props = {};
export default function StoreListSettingsScreen({ }: Props) {
    const p = useGlobalSearchParams()
    const authToken = useAuthToken();
    const userInfo = useUserInfo()
    return (
        <Page>
            <Content>
                <Text>StoreListSettingsScreen</Text>

                <Text>Store Home</Text>
                <Text>{JSON.stringify(userInfo.user)}</Text>
                <Button onPress={() => {
                    authToken.setToken(null)
                    userInfo.setUser(null);
                }}>Signout</Button>
            </Content>
        </Page>
    )
}