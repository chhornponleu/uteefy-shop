import React, { useMemo } from 'react';
import { FlatListProps, View } from "react-native";
import { StoreFields_FragmentFragment } from "../../../../graphql/graphql";
import { wildcardsMatch } from "../../../commons/stringutils";
import { FlatList } from "../../../components/list/FlatList";
import { StoreListItem } from "./StoreListItem";

type Props = Omit<FlatListProps<StoreFields_FragmentFragment>,
    'data' | 'renderItem' | 'keyExtractor' | 'ItemSeparatorComponent' | 'numColumns'
> & {
    filter?: {
        name?: string
    },
    data: StoreFields_FragmentFragment[]
    onItemPress?: (item: StoreFields_FragmentFragment) => void
};


export function StoreList({ data, onItemPress, filter, ...props }: Props) {
    const datalist = useMemo(() => {
        if (!filter?.name) return data;
        return data.filter(item => wildcardsMatch(item.name, filter?.name));
    }, [data, filter?.name]);
    return (
        <FlatList
            ItemSeparatorComponent={() => (
                <View className="bg-gray-100" style={{ height: 1 }} />
            )}
            keyExtractor={(item, index) => item.id + '-' + index}
            {...props}
            data={datalist}
            renderItem={({ item }) => (
                <StoreListItem data={item} onPress={() => onItemPress?.(item)} />
            )}

        />
    )
}