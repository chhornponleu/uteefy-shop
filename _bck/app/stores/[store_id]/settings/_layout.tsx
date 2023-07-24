import { Stack } from "expo-router";
import { colors } from "../../../../../commons/colors";

export default function () {
    return (
        <Stack screenOptions={{
            contentStyle: { backgroundColor: colors.white },
            headerTintColor: colors.blue['800'],
        }}>
            <Stack.Screen name="index" options={{ title: 'Settings' }} />
            <Stack.Screen name="info" options={{ title: 'Store Info' }} />
        </Stack>
    )
};