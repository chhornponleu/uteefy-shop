import { Image, Pressable, ScrollView, Text, TextInput, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useMutation } from "@apollo/client";
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/buttons";
import { Box } from "../../components/containers";
import { TextI18n } from "../../components/typo/TextI18n";
import { useAuthToken, useLocale } from "../../context/AppProvider";
import { AuthLoginWithEmail_Mutation } from "./queries";
import LoadingModal from "../../components/indicator/LoadingModal";
import i18next from "i18next";

const packageJson = require('../../../package.json');
const logo = require('../../assets/logo.png');


export const useLoginScreenViewController = () => {
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
    const insets = useSafeAreaInsets();
    const [fh, setFh] = useState(0)
    const { height } = useWindowDimensions()
    const controller = useLoginScreenViewController();

    const [email, setEmail] = useState('chhornponleu@gmail.com');
    const [password, setPassword] = useState('123456');
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const { locale, setLocale } = useLocale();

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
            <View className="container flex-1  max-w-2xl mx-auto px-8">
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                    <View
                        style={{
                            minHeight: height - fh - insets.bottom / 2,
                        }}>
                        <View className="flex-row justify-between" style={{ alignItems: 'center', marginTop: insets.top }}>
                            <Image
                                source={logo}
                                style={{ width: 100, height: 100 }}
                            />
                            <Pressable
                                onPress={() => {
                                    setLocale(locale === 'en' ? 'km' : 'en')
                                }}
                                className="bg-gray-200 px-4 py-2 rounded-lg"
                            >
                                <Text className="text-blue-800 text-xl font-bold">{locale === 'en' ? 'KH' : 'EN'}</Text>
                            </Pressable>
                        </View>
                        <Text className="text-4xl font-bold">Uteefy.com</Text>
                        <Text>Your online menu</Text>
                        <View className="mt-8" />
                        <TextI18n code="login_to_your_account" className="text-xl font-bold" style={{ lineHeight: 32 }} />
                        <Box className="gap-y-1 mb-4 transition-opacity duration-500">
                            <TextInput
                                ref={emailRef}
                                className="border border-gray-300 rounded-lg px-4 py-4 mt-4 focus:border-purple-600"
                                value={email}
                                onChangeText={setEmail}
                            />
                            <TextInput
                                ref={passwordRef}
                                className="border border-gray-300 rounded-lg px-4 py-4 mt-3 focus:border-purple-600"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </Box>

                        <Button
                            disabled={controller.state.loading}
                            // loading={controller.state.loading}
                            loading
                            fullWidth
                            className="active:opacity-80 transition duration-[300ms]"
                            onPress={handleLoginPress}
                            variant="filled">
                            Login
                        </Button>

                        <View className="mt-4 items-baseline">
                            <Link asChild href="/forgot-password" style={{ paddingVertical: 8 }}>
                                <Text><TextI18n code="forgot_password" />?</Text>
                            </Link>

                            <Link href={"/register"}>
                                <Text><TextI18n code="do_no_account_qs" /> <TextI18n code="sign_up" className="text-blue-500" /></Text>
                            </Link>
                        </View>

                        <TextI18n code="or_signin_with" className="text-xl font-bold mt-8 mb-4" style={{ lineHeight: 36 }} />
                        <Button
                            fullWidth
                            variant="outlined"
                            left={(
                                <Ionicons name="logo-google" size={18} />
                            )}
                        >
                            <Text>Google Account</Text>
                        </Button>
                    </View>
                    <View
                        className="gap-y-2 p-6"
                        onLayout={e => setFh(e.nativeEvent.layout.height)}
                    >
                        <Button
                            variant="text"
                            textClassName="text-blue-500"
                            className="gap-x-96"
                            style={{ alignSelf: 'center' }}>
                            <TextI18n code="login.learn_more" className="mr-4" />
                            <Text>{' '}</Text>
                            <Ionicons name="arrow-forward-outline" />
                        </Button>
                        <TextI18n
                            code="login.terms_greement"
                            className="text-center"
                        />
                        <Text className="text-center">v{packageJson.version}</Text>
                    </View>
                </ScrollView>
            </View>
            <LoadingModal
                visible={controller?.state?.loading}
            />
        </>
    )
}
