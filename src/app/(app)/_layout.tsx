
import { Redirect, Slot, useSegments } from "expo-router";
import { useAuthToken } from "../../context/AppProvider";

export default function AppLayout() {
    const segments = useSegments();
    const { token } = useAuthToken()

    console.log('----> (app)/_layout.tsx', { token, segments });

    if (!token && segments?.[0] === '(app)') {
        console.log('auth token => login', { token });
        return (
            <Redirect href="/login" />
        )
    }

    return (
        <Slot />
    )
}