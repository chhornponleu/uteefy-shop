import { Redirect, Stack } from "expo-router";
import { defaultStackOptions } from "../../commons/navigation";
import { useAuthToken } from "../../context/AppProvider";

export const unstable_settings = {

};

export default function AuthLayout() {
    const { token } = useAuthToken()
    console.log('----> (auth)/_layout.tsx', token);
    if (token) {
        console.log('you are already logged in');
        return (
            <Redirect href="/store/" />
        )
    }
    return (
        <Stack screenOptions={defaultStackOptions}>
            <Stack.Screen name="login" options={{ headerShown: true }} />
        </Stack>
    )
}