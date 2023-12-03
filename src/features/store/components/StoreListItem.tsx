import React from 'react';
import { Image, Pressable, PressableProps, View } from "react-native";
import { StoreFields_FragmentFragment } from "../../../../graphql/graphql";
import { Text } from "../../../components/typo";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../commons/colors";

type Props = PressableProps & {
    data: StoreFields_FragmentFragment;
};
export function StoreListItem({ data, ...props }: Props) {

    return (
        <Pressable
            {...props}
            className={`
                py-6 transition duration-300 active:border-gray-400 items-center rounded-lg flex-row justify-between
                ${props.className}
            `}>
            <View>
                <View className="flex-1 flex-row align-middle mb-1">
                    <Text className="text-xl">{data.name} </Text>
                    {data.currency ? (
                        <Text className="text-blue-400">({data.currency})</Text>
                    ) : null}
                </View>
                <Text>Role: Owner  <Text className="text-green-600 ml-4">Active</Text></Text>
            </View>
            {data.logo ? (
                <Image
                    className="w-14 h-14 rounded-full bg-gray-100 ml-4"
                    source={{ uri: data.logo }}
                />
            ) : null}
            {props.onPress ? (
                <View className=" ">
                    <Ionicons name="chevron-forward-outline" size={14} color={colors.gray[400]} />
                </View>
            ) : null
            }
        </Pressable >
    )
}