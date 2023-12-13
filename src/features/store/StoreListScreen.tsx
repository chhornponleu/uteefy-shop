import { useQuery } from "@apollo/client";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, TextInput, View } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../../components/buttons";
import Content from "../../components/containers/Content";
import Page from "../../components/containers/Page";
import { Text } from "../../components/typo";
import { TextI18n } from "../../components/typo/TextI18n";
import { useAuthLoguot, useUserInfo } from "../../context/AppProvider";
import { StoreList } from "./components/StoreList";
import { StoreList_Query } from "./queries";
import { Stack } from "expo-router";
import { i18n } from "../../i18n";

type Props = {};
const PAGING_SIZE = 10;


export default function StoreListScreen({ }: Props) {
    const userInfo = useUserInfo();

    const { logout } = useAuthLoguot()
    const [search, setSearch] = useState('');
    const { loading, data, fetchMore } = useQuery(StoreList_Query, {
        variables: {
            take: PAGING_SIZE,
        }
    });
    const insets = useSafeAreaInsets();
    const router = useRouter();

    function handleFetchMore() {
        if (loading) {
            console.log('fetching more blocked', data);
            return;
        }
        const id = data?.storeList?.[data?.storeList?.length - 1]?.id

        if (!id) return

        fetchMore({
            variables: {
                take: PAGING_SIZE,
                skip: 1,
                cursor: {
                    id,
                }
            },
            updateQuery(prev, result) {
                if (!result) {
                    return prev;
                }
                return {
                    ...prev,
                    storeList: [
                        ...prev.storeList,
                        ...result.fetchMoreResult.storeList
                    ]
                }
            },
        })
    }

    return (
        <Page className="web:container web:mx-auto web:max-w-2xl" style={{ paddingTop: insets.top }}>
            <Stack.Screen options={{
                headerShown: true,
                title: ' ',
                headerTitle: ' ',
                headerTransparent: true,
                headerRight: () => (
                    <Link href="/(app)/store/settings">
                        <View className="p-4">
                            <AntDesign name="setting" size={20} />
                        </View>
                    </Link>
                ),
            }} />
            <Content className="flex-1">
                <View className="flex-row justify-between py-4">
                    <View className="flex-1">
                        <Text className="text-sm">uteefy.com</Text>
                        {userInfo?.user?.email ? (
                            <Text className="font-bold text-xl">{userInfo.user.email}</Text>
                        ) : null}
                        {/* <Text className="font-light text-lg">Your online catalog platform</Text> */}
                    </View>
                    {/* <Link href="/(app)/store/settings">
                        <View className="p-4">
                            <AntDesign name="setting" size={20} />
                        </View>
                    </Link> */}
                </View>

                <View className="flex-row items-center mb-2">
                    <Ionicons name="search-outline" size={18} className="mx-4 absolute" />
                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        className="flex-1 h-14 pl-12 border border-gray-200 rounded-lg focus:border-black"
                    />
                </View>

                <View className="flex-1">
                    <StoreList
                        filter={{ name: search?.trim() }}
                        data={data?.storeList || []}
                        onItemPress={(item) => {
                            router.push(`/(app)/store/${item.id}/home`)
                        }}
                        ListFooterComponent={() => (
                            <View className="flex-row justify-center p-4">
                                <ActivityIndicator animating={loading} />
                            </View>
                        )}
                        onEndReached={() => {
                            !loading && handleFetchMore()
                        }}

                    />
                </View>

                {loading ? null : (
                    <View
                        style={{}}>
                        <Button onPress={() => router.push('/(app)/store/create')}>
                            <TextI18n code="store.create" />
                        </Button>
                    </View>
                )}
            </Content>
        </Page>
    )
}