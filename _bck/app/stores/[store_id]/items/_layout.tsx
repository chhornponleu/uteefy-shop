import { Stack } from "expo-router";
import { colors } from "../../../../../commons/colors";

export default function () {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                contentStyle: { backgroundColor: colors.white }
            }}
        />
    )
}