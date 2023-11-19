import { Redirect, Stack, useRootNavigationState } from "expo-router";
import React from 'react';
import { defaultStackOptions } from "../../commons/navigation";
import { useAuthState } from "../../context/auth-context";

export const unstable_settings = {

};

export default function AuthLayout() {
    const navigationsate = useRootNavigationState()
    const { token } = useAuthState()
    console.log('----> (auth)/_layout.tsx', navigationsate);
    if (token) {
        console.log('you are already logged in');

        return (
            <Redirect href="/store-list" />
        )
    }
    return (
        <Stack
            screenOptions={{
                ...defaultStackOptions
            }}
        />
    )
}