import React from 'react';
import { Image, Pressable, PressableProps, View } from "react-native";
import { StoreFields_FragmentFragment } from "../../../../graphql/graphql";
import { Text } from "../../../components/typo";

type Props = PressableProps & {
    data: StoreFields_FragmentFragment;
};
export function StoreListItem({ data, ...props }: Props) {

    return (
        <Pressable
            {...props}
            className={`
                p-6 border border-gray-200 transition duration-300 active:border-gray-400 items-center rounded-lg mx-4 flex-row justify-between
                ${props.className}
            `}>
            <View className="align-middle">
                <Text>{data.name}</Text>
                <Text className="">{data.currency}</Text>
            </View>
            {data.logo ? (
                <Image
                    className="w-14 h-14 rounded-full bg-gray-100 ml-4"
                    source={{ uri: data.logo }}
                />
            ) : null}
        </Pressable>
    )
}