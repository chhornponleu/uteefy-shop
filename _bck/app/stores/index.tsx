import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from 'react';
import { Image as RNImage, ScrollView, TouchableOpacity, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../../commons/colors";
import { Box } from "../../../components/containers";
import { Text } from "../../../components/typo";
import { Store, useStoreList } from "../../../data/store";
import { auth } from "../../../libs/firebase";

type Props = {};

const StoreItem = ({ data, onPress }: { data: Store, onPress: (data: Store) => void }) => {
    const dims = useWindowDimensions();
    let width = dims.width - 32;
    width = width > 390 ? 390 : width;
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onPress?.(data)}
        >
            <Box
                items="center"
                columnGap={16}
                row p={16} mb={16}
                width={width}  //bg={colors.gray['100']}
                border={{ width: 1, color: colors.gray['200'], radius: 8 }}
            >
                <Image source={{ uri: data.logo_url || '' }} style={{ width: 60, height: 60, borderRadius: 60 }} />
                <Text>{data.name}</Text>
            </Box>
        </TouchableOpacity>
    )
};



export default function StoreIndexPage({ }: Props) {
    const { data, loading } = useStoreList();
    const insets = useSafeAreaInsets()
    const router = useRouter();
    const dims = useWindowDimensions()
    let width = dims.width - 32;
    width = width > 390 ? 390 : width;

    function handleSignout() {
        auth.signOut()
    }

    return (
        <Box flex pt={insets.top}>

            <Box py={16} width={'100%'} center>
                <Box position="absolute" insets={{ left: insets.left + 32, top: 16 }}>
                    <TouchableOpacity onPress={handleSignout}>
                        <Text color={colors.red[800]}>Sign out</Text>
                    </TouchableOpacity>
                </Box>
                <TouchableOpacity>
                    <RNImage source={require('../../assets/icon.png')} style={{ width: 60, height: 60 }} />
                </TouchableOpacity>
                <Box position="absolute" insets={{ right: insets.right + 32, top: 16 }}>
                    <TouchableOpacity onPress={() => router.push('/account/settings')}>
                        <AntDesign name="setting" size={24} color="black" />
                    </TouchableOpacity>
                </Box>
            </Box>

            {loading ? (
                <Box center flex>
                    <Text>Loading...</Text>
                </Box>
            ) : (
                <ScrollView contentContainerStyle={{ paddingVertical: 32, alignItems: 'center' }}>
                    {data?.map((item, index) => (
                        <StoreItem
                            key={item.id}
                            data={item}
                            onPress={(data) => {
                                router.replace('/stores/' + data.id)
                            }}
                        />
                    ))}
                    <TouchableOpacity style={{ width }} onPress={() => router.push('/stores/create')}>
                        <Box row minH={60} justify="space-between" items="center" p={16} border={{ width: 1, color: colors.blue['200'], radius: 8 }}>
                            <Text size={16} color={colors.gray['800']}>Setup New Store</Text>
                            <AntDesign name="plus" size={16} color={colors.blue['400']} />
                        </Box>
                    </TouchableOpacity>
                </ScrollView>
            )}
        </Box>
    )
}