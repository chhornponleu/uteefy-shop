import React from 'react';
import { FlatListProps } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { StoreFields_FragmentFragment } from "../../../../graphql/graphql";
import { StoreListItem } from "./StoreListItem";

type Props = Partial<FlatListProps<StoreFields_FragmentFragment>> & {
    data: StoreFields_FragmentFragment[]
    onItemPress?: (item: StoreFields_FragmentFragment) => void
};
export function StoreList({ data, onItemPress }: Props) {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <StoreListItem data={item} onPress={() => onItemPress?.(item)} />
            )}
        />
    )
}