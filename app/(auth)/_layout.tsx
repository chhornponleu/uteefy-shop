import { Stack } from "expo-router";
import React from 'react';
import { defaultStackOptions } from "../../commons/navigation";

export const unstable_settings = {

};

export default function AuthLayout() {
    return (
        <Stack
            screenOptions={{
                ...defaultStackOptions
            }}
        />
    )
}