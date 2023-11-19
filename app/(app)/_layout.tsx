
import { Redirect, Slot, useRootNavigationState, useRouter } from "expo-router";
import { Text } from "react-native";
import { useAuthState } from "../../context/auth-context";

export default function AppLayout() {
    const navigationsate = useRootNavigationState();
    const router = useRouter()
    const { token, ready } = useAuthState();

    console.log('----> (app)/_layout.tsx', { token, ready });

    if (!ready) {
        return <Text>...</Text>;
    }
    if (!token && navigationsate?.routes?.[0]?.path !== "/") {
        console.log('auth token => login', { token, ready });
        return (
            <Redirect href="/login" />
        )
    }
    if (token && navigationsate?.routes?.[0]?.path === "/") {
        console.log('auth token => storelist', { token, ready });
        return (
            <Redirect href="/store-list" />
        )
    }
    console.log('auth token => slot', { token, ready });
    return (
        <Slot />
    )
}