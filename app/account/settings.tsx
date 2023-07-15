import { Link, useRouter } from "expo-router";
import React from 'react';
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "../../components/containers";
import { Text } from "../../components/typo";

type Props = {};
export default function HomeSettings({ }: Props) {
    const router = useRouter();
    return (
        <Box flex pt={90}>

            <Box>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text>Bo bakc</Text>
                </TouchableOpacity>
                <Link href={"../stores"}>Back</Link>

            </Box>

        </Box>
    )
}