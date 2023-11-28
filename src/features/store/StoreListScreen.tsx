import { useQuery } from "@apollo/client";
import React from 'react';
import { Pressable, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Page from "../../components/containers/Page";
import { Text } from "../../components/typo";
import { TextI18n } from "../../components/typo/TextI18n";
import { StoreList } from "./components/StoreList";
import { StoreList_Query } from "./queries";
import { Ionicons } from "@expo/vector-icons";

type Props = {};
export default function StoreListScreen({ }: Props) {
    const { data } = useQuery(StoreList_Query, {
        variables: {
            take: 10,
        }
    });
    const insets = useSafeAreaInsets()
    return (
        <Page style={{ paddingTop: insets.top }}>
            <View className="flex-row justify-between items-center p-6">
                <View className="flex-1">
                    <Text>Uteefy.com</Text>
                    <Text>Good morning!</Text>
                </View>
                <Pressable>
                    <TextI18n code="sign_out" />
                </Pressable>
            </View>
            <View className="border mb-4 h-14 flex-row items-center border-gray-200 rounded-lg mx-4">
                <Ionicons name="search-outline" size={18} className="mx-4" />
                <TextInput
                    className="flex-1 h-full"
                />
            </View>
            <StoreList data={data?.storeList || []} />
        </Page>
    )
}