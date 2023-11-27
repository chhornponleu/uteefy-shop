import { ScrollView, Text, TextInput, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useMutation } from "@apollo/client";
import { Link, Stack } from "expo-router";
import { useRef, useState } from "react";
import { Button } from "../../components/buttons";
import { Box } from "../../components/containers";
import { useAuthToken } from "../../context/AppProvider";
import { createStyleHook } from "../../hooks/createStyleHook";
import { AuthLoginWithEmail_Mutation } from "../../services/auth.gql";

const packageJson = require('../../../package.json');

const useStyles = createStyleHook(({ height, width, theme }) => ({
    wrapper: {
        flex: 1,
    },
    input: {}
}))

const useLoginScreenViewController = () => {
    const authToken = useAuthToken();
    const [mutateLogin, state] = useMutation(AuthLoginWithEmail_Mutation);

    const handleLoginWithEmail = async (
        data: { email: string, password: string }
    ) => {
        return mutateLogin({
            variables: { data }
        }).then(resp => {
            authToken.setToken(resp.data?.signInWithEmail.token)
            return resp;
        });
    }

    return {
        handleLoginWithEmail,
        state
    }

}

export default function LoginScreen() {
    const { styles } = useStyles();
    const insets = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();

    const controller = useLoginScreenViewController();

    const [email, setEmail] = useState('chhornponleu@gmail.com');
    const [password, setPassword] = useState('123456');
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    function handleLoginPress() {
        controller.handleLoginWithEmail({
            email, password
        }).then(resp => {
            console.log(resp);
        }).catch(e => {
            alert(e.message)
            console.log(e)
        })
    }


    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={{ paddingTop: insets.top }} className="container mx-auto px-4">
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                    <View>
                        <Box>
                            <Text className="text-4xl font-bold">uteefy</Text>
                            <Text>Your online menu</Text>
                        </Box>
                    </View>

                    <Text className="text-4xl">Login to your account</Text>
                    <Box className="gap-y-1">
                        <TextInput
                            ref={emailRef}
                            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-4 mt-4 focus:outline-none   focus:border-purple-600 focus:border-2"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            ref={passwordRef}
                            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-4 mt-4 focus:outline-none   focus:border-purple-600 focus:border-2"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </Box>


                    <Link asChild href="/forgot-password" style={{ alignSelf: 'flex-end', paddingVertical: 8 }}>
                        <Text>Forgot password?</Text>
                    </Link>

                    <Link href={"/register"}>
                        <Text>Do not have an account? <Text  >Signup</Text></Text>
                    </Link>

                    <Text>v{packageJson.version}</Text>
                </ScrollView>
            </View >
        </>
    )
}
