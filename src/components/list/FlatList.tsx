import { ComponentProps } from "react";
import { FlatList as RNFlatList } from "react-native";
import { remapProps } from 'nativewind';

export function FlatList<T>(props: ComponentProps<typeof RNFlatList<T>>) {
    if (props.numColumns == undefined || props.numColumns === 1) {
        remapProps(RNFlatList<T>, {
            className: "style",
            ListFooterComponentClassName: "ListFooterComponentStyle",
            ListHeaderComponentClassName: "ListHeaderComponentStyle",
            contentContainerClassName: "contentContainerStyle",
            indicatorClassName: "indicatorStyle",
        });
    } else {
        remapProps(RNFlatList<T>, {
            className: "style",
            columnWrapperClassName: "columnWrapperStyle",
            ListFooterComponentClassName: "ListFooterComponentStyle",
            ListHeaderComponentClassName: "ListHeaderComponentStyle",
            contentContainerClassName: "contentContainerStyle",
            indicatorClassName: "indicatorStyle",
        });
    }
    return <RNFlatList {...props} />;
};
