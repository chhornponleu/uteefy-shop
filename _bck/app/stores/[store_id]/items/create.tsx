import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../../../../../components/typo";

type Props = {};
export default function ItemCreate({ }: Props) {
    return (
        <SafeAreaView edges={['top']}>
            <Text>Create Item</Text>
        </SafeAreaView>
    )
}