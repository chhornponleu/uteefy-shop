import { Stack } from "expo-router";
import { colors } from "../../../../commons/colors";
import { defaultStackOptions } from "../../../../commons/navigation";

export default function StoreSettingsLayout() {
    return (
        <Stack screenOptions={{
            ...defaultStackOptions,
            headerTintColor: colors.blue['800'],
        }}>
            <Stack.Screen name="index" options={{ title: 'Settings' }} />
            <Stack.Screen name="info" options={{ title: 'Store Info' }} />
        </Stack>
    )
};