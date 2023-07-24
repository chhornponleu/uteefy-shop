import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../../../../../components/typo";

type Props = {};
export default function ItemEdit({ }: Props) {
    return (
        <SafeAreaView edges={['top']}>
            <Text>Edit Item</Text>
            <Text>Edit Item</Text>
        </SafeAreaView>
    )
}