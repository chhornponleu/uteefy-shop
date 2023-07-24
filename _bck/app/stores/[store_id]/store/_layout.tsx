import { Stack } from "expo-router";
import { colors } from "../../../../../commons/colors";

export default function () {
    return (
        <>
            <Stack
                initialRouteName="index"
                screenOptions={{
                    contentStyle: { backgroundColor: colors.white }
                }}
            >
                <Stack.Screen
                    name="select-qr-modal"
                    options={{ presentation: 'modal' }}
                />
            </Stack>
        </>
    )
}