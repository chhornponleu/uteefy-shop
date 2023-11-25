import { AntDesign } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import React, { useRef, useState } from 'react';
import { Platform, Pressable, TextInput } from "react-native";
import { colors } from "../../commons/colors";
import { Button } from "../../components/buttons";
import { Box } from "../../components/containers";
import Content from "../../components/containers/Content";
import { Text } from "../../components/typo";
import { createStyleHook } from "../../hooks/createStyleHook";

export const unstable_settings = {

};


const useStyles = createStyleHook(({ height, width, theme }) => ({
    wrapper: {
        flex: 1,
    },
    button: {
        backgroundColor: colors.gray[800],
        borderRadius: 4,
        padding: 16,

    },
    input: {
        padding: 16,
        borderWidth: 1, borderColor: colors.gray[300],
        marginVertical: 6,
        borderRadius: 4,
    },
}))

export default function ForgotPassword() {
    const { styles } = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    return (
        <Box flex>
            <Content size="sm">
                <Stack.Screen options={{
                    headerStyle: {},
                    headerLeft: () => (
                        <Link href="../" asChild>
                            <Pressable style={{ paddingLeft: Platform.select({ web: 16 }) }}>
                                <AntDesign name="arrowleft" size={22} />
                            </Pressable>
                        </Link>
                    ),
                    title: 'Forgot password'
                }} />
                <TextInput
                    ref={emailRef}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    placeholderTextColor={colors.gray[400]}
                    style={styles.input}
                />

                <Button  >
                    Continue
                </Button>

                <Link href={"/register"}>
                    <Text font={{ size: 16 }} mt={32}>Do not have an account? <Text color={colors.blue[500]}>Signup</Text></Text>
                </Link>

            </Content>
        </Box>
    )
}