import { View, ViewProps } from "react-native";



type Props = ViewProps & {

};
export default function Content({
    className,
    ...props
}: Props) {

    return (
        <View
            {...props}
            className={``}
        />
    )
}