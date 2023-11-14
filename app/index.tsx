import { Pressable, ScrollView, TextInput, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Path, Svg } from 'react-native-svg';

import { Link, Redirect, Stack, useNavigation, useRootNavigation, useRootNavigationState, useRouter } from "expo-router";
import { useRef, useState } from "react";
import { colors } from "../commons/colors";
import { Box, Card } from "../components/containers";
import { Text } from "../components/typo";
import { createStyleHook } from "../hooks/createStyleHook";
import { AntDesign } from "@expo/vector-icons";
import Content from "../components/containers/Content";
import Input from "../components/form/Input";
import { Button } from "../components/buttons";
import { signInWithEmailAndPassword } from "firebase/auth/react-native";
import { auth } from "../libs/firebase";
import { useMutation } from "@tanstack/react-query";
import LoadingModal from "../components/indicator/LoadingModal";
import { useAppContext } from "../context/app-context";
import { useLoginWithEmailMutation, useSignUpEmailAvailable } from "../api/auth";
import { useStoreListQuery } from "../api/store-apis";
import { ApolloProvider } from "@apollo/client";
import { apoloClient } from "../api";

const packageJson = require('../package.json');

const useStyles = createStyleHook(({ height, width, theme }) => ({
    wrapper: {
        flex: 1,
    },
    input: {}
}))

export default function IndexScreen() {
    const { user } = useAppContext();
    const state = useRootNavigationState()
    if (user) {
        if (!state?.key) {
            return null;
        }
        return (
            <Redirect href="/store" />
        )
    }
    return (
        <ApolloProvider client={apoloClient}>
            <LoginScreenView />
        </ApolloProvider>
    )
}

const useLoginScreenViewController = () => {
    const stores = useStoreListQuery();
    console.log('stores', stores.data)

    const evailable = useSignUpEmailAvailable({ email: 'chhornponleu@gmail.com' })
    console.log('evailable', evailable.data)

    const [
        login,
        { called, data, error, reset, loading }
    ] = useLoginWithEmailMutation();

    const handleLoginWithEmail = async (
        data: { email: string, password: string }
    ) => {
        return login({ variables: { data } });
    }

    return {
        handleLoginWithEmail,
        reset,
        error,
        loading
    }

}

function LoginScreenView() {
    const { styles } = useStyles();
    const insets = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();

    const controller = useLoginScreenViewController();

    const [email, setEmail] = useState('chhornponleu@gmail.com');
    const [password, setPassword] = useState('123456');
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const [
        login,
        { called, data, error, reset, loading }
    ] = useLoginWithEmailMutation();

    function handleLoginPress() {
        login({
            variables: {
                data: {
                    email, password
                }
            },
        }).then(resp => {
            console.log(resp.data);
        })
        // controller.handleLoginWithEmail({
        //     email, password
        // }).then(resp => {
        //     console.log(resp.data);
        // })
    }

    return (
        <View style={styles.wrapper}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
                <Stack.Screen options={{ headerShown: false }} />
                <Box
                    flex={{ justify: 'center', items: 'center', rowGap: 8 }}
                    bg={colors.blue[400]}
                    p={16} pt={insets.top + 40}
                >
                    <Box
                        py={16}
                        flex={{ justify: 'center', items: 'center', }}
                    >
                        <Text color={colors.white} size={32} weight="bold">uteefy</Text>
                        <Text size={12} color={colors.gray[200]} >Your online menu</Text>
                    </Box>
                </Box>

                <Box bg={colors.white} style={{ marginTop: 0 }}>
                    <Svg
                        width={width} height={30}>
                        <Path
                            fill={colors.blue[400]}
                            d={`M0,0s${width / 2},${60},${width},0Z`}
                        />
                    </Svg>
                    <Content size="sm">
                        <Card flex={{ gap: 8 }} style={{}}>
                            <Box row items="flex-end" justify="space-between" mt={18}>
                                <Text font={{ size: 18 }}>Login to your account</Text>
                            </Box>
                            <Box py={16}>
                                <Input
                                    ref={emailRef}
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    placeholderTextColor={colors.gray[400]}
                                    style={styles.input}
                                />
                                <Input
                                    ref={passwordRef}
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholder="Password"
                                    secureTextEntry
                                    placeholderTextColor={colors.gray[400]}
                                    style={styles.input}
                                />

                            </Box>

                            <Button variant="primary" onPress={handleLoginPress}>
                                <Text align="center" color={colors.white}>Login</Text>
                            </Button>

                            <Box items="flex-start" rowGap={32}>
                                <Link asChild href="/forgot-password" style={{ alignSelf: 'flex-end', paddingVertical: 8 }}>
                                    <Pressable style={({ pressed }) => ({ backgroundColor: 'blue', opacity: pressed ? 0.6 : 1 })}>
                                        <Text size={14} color={colors.blue[500]}>Forgot password?</Text>
                                    </Pressable>
                                </Link>
                            </Box>
                        </Card>
                    </Content>
                </Box>
            </ScrollView>
            <Box center rowGap={16} mb={insets.bottom || 16}>
                <Link href={"/register"}>
                    <Text font={{ size: 16 }} mt={32}>Do not have an account? <Text color={colors.blue[500]}>Signup</Text></Text>
                </Link>

                <Text align="center" size={12} color={colors.gray[400]}>v{packageJson.version}</Text>
            </Box>
            <LoadingModal visible={controller.loading} />
        </View >
    )
}
