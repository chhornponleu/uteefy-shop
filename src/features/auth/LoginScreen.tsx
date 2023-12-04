import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Link, Stack } from "expo-router";
import { useRef, useState } from "react";
import { Button } from "../../components/buttons";
import { Box } from "../../components/containers";
import { useLoginScreenViewController } from "./loginScreenController";
import { TextI18n } from "../../components/typo/TextI18n";
import { Ionicons } from "@expo/vector-icons";

const packageJson = require('../../../package.json');
const logo = require('../../assets/logo.png');

export default function LoginScreen() {
    const insets = useSafeAreaInsets();
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
            <View style={{ paddingTop: insets.top }} className="container flex-1  max-w-2xl mx-auto px-4 bg-dkmfmkcmkdklmxzoxkxlkdslzkxaskjl;l,rcoisf,lr;,sgkldnljasmdksmdksmdsimdkf">
                <ScrollView bounces={false} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                    <Image
                        source={logo}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text className="text-4xl font-bold">uteefy</Text>
                    <Text>Your online menu</Text>
                    <View className="mt-8" />
                    <Text className="text-xl">Login to your account</Text>
                    <Box className="gap-y-1 mb-6 transition-opacity duration-500">
                        <TextInput
                            ref={emailRef}
                            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-4 mt-4 focus:border-purple-600 focus:border-2"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            ref={passwordRef}
                            className="border-2 border-gray-300 dark:border-gray-700 rounded-lg px-4 py-4 mt-4 focus:border-purple-600 focus:border-2"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </Box>

                    <Button
                        disabled={controller.state.loading}
                        // loading={controller.state.loading}
                        loading
                        fullWidth size="lg"
                        className="active:opacity-80 transition duration-[300ms]"
                        onPress={handleLoginPress}
                        variant="filled">
                        Login
                    </Button>

                    <View className=" mt-4">
                        <Link asChild href="/forgot-password" style={{ paddingVertical: 8 }}>
                            <Text>Forgot password?</Text>
                        </Link>

                        <Link href={"/register"}>
                            <Text>Do not have an account? <Text >Signup</Text></Text>
                        </Link>
                    </View>

                </ScrollView>
                <View className="gap-y-2 px-6" style={{ paddingBottom: insets.bottom }}>
                    <Button variant="outlined" className="gap-x-96">
                        <TextI18n code="login.learn_more" />
                        <Ionicons name="arrow-forward-outline" />
                    </Button>
                    <TextI18n
                        code="login.terms_greement"
                        className="text-center"
                    />
                    <Text className="text-center">v{packageJson.version}</Text>
                </View>
            </View>
        </>
    )
}
