import { AntDesign } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { Link, Stack } from "expo-router";
import React, { useEffect, useRef, useState } from 'react';
import { Platform, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../../commons/colors";
import { Button } from "../../components/buttons";
import { Box } from "../../components/containers";
import Content from "../../components/containers/Content";
import { Text } from "../../components/typo";
import { createStyleHook } from "../../hooks/createStyleHook";
import { Input } from "../../components/form/Input";
import { TextI18n } from "../../components/typo/TextI18n";

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


export default function Register({ }: Props) {
    const { styles } = useStyles();
    const [error, setError] = useState<{ code: string; message: string }>()

    const [email, setEmail] = useState('chhornponleu@gmail.com');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const [errorMsg] = useState<string>()

    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);
    const passwordConfirmationRef = useRef<TextInput>(null);



    function handleContinuePress() {

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
            <Content className="gap-y-4">
                <Text className="text-2xl font-bold my-4">Create a new account</Text>
                <Input
                    ref={emailRef}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
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
                {password ? (
                    <Input
                        ref={passwordConfirmationRef}
                        value={passwordConfirmation}
                        onChangeText={setPasswordConfirmation}
                        placeholder="Confirm your password"
                        secureTextEntry
                        placeholderTextColor={colors.gray[400]}
                        style={styles.input}
                    />
                ) : null}

                {error ? (
                    <Box >
                        <Text>({error.code})</Text>
                        <Text>{error.message}</Text>
                    </Box>
                ) : null}

                <Button onPress={handleContinuePress}>
                    <TextI18n code="continue" />
                </Button>
            </Content>
        </ScrollView>
    )
}