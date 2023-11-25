
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

    // if (token && navigationsate?.routes?.[0]?.path === "/") {
    //     console.log('auth token => storelist', { token });
    //     return (
    //         <Redirect href="/store-list" />
    //     )
    // }

    // console.log('auth token => slot', { token });

    return (
        <Slot />
    )
}