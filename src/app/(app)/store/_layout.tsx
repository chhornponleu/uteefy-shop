import { Stack } from "expo-router";
import { i18n } from "../../../i18n";

export default function StoreLayout() {
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen name="index" options={{
                headerShown: false,
                headerTitle: i18n.t("store")
            }} />
            <Stack.Screen name="[store_id]" options={{
                headerShown: false,
                gestureEnabled: false,
            }} />
            <Stack.Screen name="create" options={{
                headerBackTitle: i18n.t("store"),
                title: i18n.t("store.create"),
            }} />
        </Stack>
    )
};