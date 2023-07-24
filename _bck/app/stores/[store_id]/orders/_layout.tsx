import { Stack } from "expo-router";
import { useEffect } from "react";
import { colors } from "../../../../../commons/colors";

export default function () {

    useEffect(() => {

    }, [])

    return (
        <>
            <Stack
                initialRouteName="index"
                screenOptions={{
                    contentStyle: { backgroundColor: colors.white }
                }}
            >
                <Stack.Screen name="index" options={{ title: 'Orders' }} />
                <Stack.Screen name="create" />
            </Stack>
        </>
    )
}