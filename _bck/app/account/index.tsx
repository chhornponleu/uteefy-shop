import { Stack, useRouter } from "expo-router";
import React from 'react'
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenStack } from "react-native-screens";
import { Box } from "../../../components/containers";
import { Text } from "../../../components/typo";

type Props = {};
export default function Home({ }: Props) {
    const router = useRouter()
    return (
        <SafeAreaView edges={['top']} style={{ flex: 1 }}>
            <Box p={16} row flex={{ justify: 'space-between' }}>
                <Text>Welcome</Text>
                <Text>Settings</Text>
            </Box>
            <Box p={16}>
                <Box>
                    <TouchableOpacity onPress={() => router.push('stores')}>
                        <Text>Your stores</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => router.push('/home/settings')}>
                        <Text>Settings</Text>
                    </TouchableOpacity>

                </Box>
                <Box row flex={{ justify: 'space-between' }}>

                </Box>
            </Box>
        </SafeAreaView>
    )
}