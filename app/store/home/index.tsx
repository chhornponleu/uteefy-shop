import { useGlobalSearchParams, useRouter } from "expo-router";
import React from 'react';
import { Button } from "../../../components/buttons";
import { Box } from "../../../components/containers";
import { Text } from "../../../components/typo";
import { auth } from "../../../libs/firebase";
import { TextI18n } from "../../../components/typo/TextI18n";
import { i18n } from "../../../libs/i18n";

type Props = {};
export default function StoreHomeIndex({ }: Props) {
    const p = useGlobalSearchParams()
    const router = useRouter()
    return (
        <Box flex mt={100} p={16}>
            <Text>Store Home</Text>
            <Text>{JSON.stringify(p)}</Text>
            <Button onPress={() => {
                auth.signOut().then(() => { })
            }}>Signout</Button>

            <TextI18n code="hello" />

            <Box row center columnGap={20}>
                <Button size="sm"
                    onPress={() => {
                        i18n.changeLanguage('en')
                    }}>English</Button>
                <Button size="sm"
                    onPress={() => {
                        i18n.changeLanguage('km')
                    }}>Khmer</Button>
            </Box>
            {new Array(2).fill(0).map((_, i) => (
                <Box key={i} row center columnGap={20}>
                    <Button size="sm"
                        onPress={() => {
                            i18n.changeLanguage('en')
                        }}>English</Button>
                    <Button size="sm"
                        onPress={() => {
                            i18n.changeLanguage('km')
                        }}>Khmer</Button>
                </Box>
            ))}

        </Box>
    )
}