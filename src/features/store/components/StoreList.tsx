import React, { useMemo } from 'react';
import { FlatListProps, View } from "react-native";
import { StoreFields_FragmentFragment } from "../../../../graphql/graphql";
import { wildcardsMatch } from "../../../commons/stringutils";
import { FlatList } from "../../../components/list/FlatList";
import { StoreListItem } from "./StoreListItem";

type Props = Partial<FlatListProps<StoreFields_FragmentFragment>> & {
    filter?: {
        name?: string
    },
    data: StoreFields_FragmentFragment[]
    onItemPress?: (item: StoreFields_FragmentFragment) => void
};


export function StoreList({ data, onItemPress, filter }: Props) {
    const datalist = useMemo(() => {
        if (!filter?.name) return data;
        return data.filter((
            item) => {
            const matched = wildcardsMatch(item.name, filter?.name);
            console.log("matched", matched);

            return matched;
        }
        );
    }, [data, filter?.name]);
    return (
        <FlatList
            data={datalist}
            numColumns={1}
            keyExtractor={(item, index) => item.id + '-' + index}
            columnWrapperStyle={undefined}
            renderItem={({ item }) => (
                <StoreListItem data={item} onPress={() => onItemPress?.(item)} />
            )}
            ItemSeparatorComponent={() => (
                <View className="bg-gray-100" style={{ height: 1 }} />
            )}
        />
    )
}