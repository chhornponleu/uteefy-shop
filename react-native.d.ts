import {
    ScrollViewProps,
    ScrollViewPropsAndroid,
    ScrollViewPropsIOS,
    Touchable,
    VirtualizedListProps,
} from "react-native";

declare module "@react-native/virtualized-lists" {
    export interface VirtualizedListWithoutRenderItemProps<ItemT>
        extends ScrollViewProps {
        ListFooterComponentClassName?: string;
        ListHeaderComponentClassName?: string;
    }
}

declare module "react-native" {
    interface ScrollViewProps
        extends ViewProps,
        ScrollViewPropsIOS,
        ScrollViewPropsAndroid,
        Touchable {
        contentContainerClassName?: string;
        indicatorClassName?: string;
    }
    interface FlatListProps<ItemT> extends VirtualizedListProps<ItemT> {
        columnWrapperClassName?: string;
    }
    interface ViewProps {
        className?: string;
    }
}