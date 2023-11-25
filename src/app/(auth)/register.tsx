import { AntDesign } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { Link, Stack } from "expo-router";
import { AuthErrorCodes, UserCredential, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth/react-native";
import React, { useEffect, useRef, useState } from 'react';
import { Platform, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../commons/colors";
import { Button } from "../../components/buttons";
import { Box } from "../../components/containers";
import Content from "../../components/containers/Content";
import Input from "../../components/form/Input";
import { Text } from "../../components/typo";
import { createStyleHook } from "../../hooks/createStyleHook";
import { auth } from "../../../libs/firebase";

type Props = {};
const useStyles = createStyleHook(({ height, width, theme }) => ({
    wrapper: {
        flex: 1,
    },
    button: {
        backgroundColor: colors.blue[400],
        borderRadius: 4,
        padding: 16,

    },
    input: {

    },
}))

const errors = {
    [AuthErrorCodes.EMAIL_EXISTS]: 'Email has been taken',
    [AuthErrorCodes.INVALID_EMAIL]: 'Invalid email provided'
}

export default function Register({ }: Props) {
    const { styles } = useStyles()

    const [email, setEmail] = useState('chhornponleu@gmail.com');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [errorMsg] = useState<string>()

    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const passwordConfirmationRef = useRef<TextInput>(null);

    const { error, reset, mutateAsync: createUser } = useMutation<UserCredential, { code: string; message: string }, { email: string; password: string }>(
        ({ email, password }) => {
            return createUserWithEmailAndPassword(auth, email, password)
        }
    )

    useEffect(() => {
        reset()
    }, [email, password])

    function handleContinuePress() {
        fetchSignInMethodsForEmail(auth, email)
        createUser({ email, password })
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // console.log({ error });
            });
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Stack.Screen options={{
                headerStyle: {},
                headerLeft: () => (
                    <Link href="../">
                        <Box style={{ paddingLeft: Platform.select({ web: 16 }) }}>
                            <AntDesign name="arrowleft" size={22} />
                        </Box>
                    </Link>
                ),
                title: '',
            }} />
            <Content size="sm">
                <Text size={24} mb={32}>Create a new account</Text>
                <Box>
                    <Input
                        // ref={emailRef}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        placeholderTextColor={colors.gray[400]}
                        style={styles.input}
                    />
                    <Input
                        // ref={passwordRef}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry
                        placeholderTextColor={colors.gray[400]}
                        style={styles.input}
                    />
                    {password ? (
                        <Input
                            // ref={passwordConfirmationRef}
                            value={passwordConfirmation}
                            onChangeText={setPasswordConfirmation}
                            placeholder="Confirm your password"
                            secureTextEntry
                            placeholderTextColor={colors.gray[400]}
                            style={styles.input}
                        />
                    ) : null}

                    {error ? (
                        <Box p={18} border={{ width: 1, color: colors.orange[400] }}>
                            <Text size={12}>({error.code})</Text>
                            <Text size={14} color={colors.red[400]}>{errors[error.code] || error.message}</Text>
                        </Box>
                    ) : null}

                    <Button
                        onPress={handleContinuePress} style={{ marginTop: 32 }}
                    >
                        <Text>Continue</Text>
                    </Button>
                </Box>
            </Content>
        </ScrollView>
    )
}