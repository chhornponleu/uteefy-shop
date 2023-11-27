import { View, ViewProps } from "react-native";


export type BoxProps = ViewProps & {}

export function Box({
    ...props
}: BoxProps) {
    return (
        <View {...props} className={`${props.className}`} />
    )

}
