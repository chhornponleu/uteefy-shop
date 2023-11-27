import React from 'react'
import { Button } from "./button";
import { View } from "react-native";


export const buttons = [
    [{ variant: 'text' }, { variant: 'outlined' }, { variant: 'filled' }],
    [{ color: 'primary' }, { color: 'secondary' }, { color: 'danger' }, { color: 'warning' }, { color: 'success' }, { color: 'disabled' }],
]
    .reduce((result, item) => {
        return result.flatMap((x) => {
            return item.map((y) => {
                return { ...x, ...y }
            })
        })
    }, [{ size: 'sm' }, { size: 'md' }, { size: 'lg' }, { size: 'xl' }, { size: '2xl' }],)

export default function ButtonExample() {

    return (
        <View testID="button-example">
            {buttons.map((item, index) => {
                const props = Object.keys(item).map(k => item[k]).join(', ');
                return (
                    <Button onPress={() => alert(props)} key={props} {...(item as any)}>{props}</Button>
                )
            })}
        </View>
    )
}