import { useGlobalSearchParams } from "expo-router";
import React from 'react';
import { Button } from "../../../../components/buttons";
import { Box } from "../../../../components/containers";
import { Text } from "../../../../components/typo";
import { TextI18n } from "../../../../components/typo/TextI18n";
import { useLocale } from "../../../../context/AppProvider";
import { auth } from "../../../../libs/firebase";

type Props = {};
export default function StoreHomeIndex({ }: Props) {
    const p = useGlobalSearchParams()
    const { setLocale } = useLocale()
    return (
        <Box flex mt={100} p={16}>
            <Text>Store Home</Text>
            <Text>{JSON.stringify(p)}</Text>
            <Button onPress={() => {
                auth.signOut().then(() => { })
            }}>Signout</Button>

            <TextI18n code="hello" />

            <Box row center columnGap={20}>
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
            {new Array(2).fill(0).map((_, i) => (
                <Box key={i} row center columnGap={20}>
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
            ))}

        </Box>
    )
}