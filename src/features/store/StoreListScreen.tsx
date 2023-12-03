import { useQuery } from "@apollo/client";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { Pressable, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../../components/buttons";
import Page from "../../components/containers/Page";
import { Text } from "../../components/typo";
import { TextI18n } from "../../components/typo/TextI18n";
import { useAuthLoguot } from "../../context/AppProvider";
import { StoreList } from "./components/StoreList";
import { StoreList_Query } from "./queries";

type Props = {};
export default function StoreListScreen({ }: Props) {
    const { logout } = useAuthLoguot()
    const [search, setSearch] = useState('');
    const { data } = useQuery(StoreList_Query, {
        variables: {
            take: 10,
        }
    });
    const insets = useSafeAreaInsets();
    const router = useRouter();
    return (
        <Page className="web:container web:mx-auto web:max-w-lg" style={{ paddingTop: insets.top }}>
            <View className="flex-row justify-between p-8 pb-4">
                <View className="flex-1">
                    <Text className="font-semibold text-3xl">Uteefy.com</Text>
                    {/* <Text className="font-light text-lg">Your online catalog platform</Text> */}
                </View>
                <Pressable onPress={logout}>
                    <TextI18n code="sign_out" className="text-red-400" />
                </Pressable>
            </View>

            <View className="flex-row items-center mx-6 mb-2">
                <Ionicons name="search-outline" size={18} className="mx-4 absolute" />
                <TextInput
                    value={search}
                    onChangeText={setSearch}
                    className="flex-1 h-14 pl-12 border border-gray-200 rounded-lg focus:border-black"
                />
            </View>

            <View className="flex-1 px-8">
                <StoreList
                    filter={{ name: search }}
                    data={data?.storeList || []}
                    onItemPress={(item) => {
                        router.push(`/(app)/store/${item.id}/home`)
                    }}
                />
            </View>
            <View
                className="px-8"
                style={{ paddingBottom: insets.bottom || 16 }}>
                <Button fullWidth size="lg" onPress={() => router.push('/(app)/store/create')}>
                    <TextI18n code="store.create" />
                </Button>
            </View>
        </Page>
    )
}