import { Link, Stack } from "expo-router";
import React, { useRef, useState } from 'react';
import { TextInput, TextInputProps, View } from "react-native";
import { Button } from "../../components/buttons";
import Page from "../../components/containers/Page";
import { Text } from "../../components/typo";
import { TextI18n } from "../../components/typo/TextI18n";
import { Input } from "../../components/form/Input";
import Content from "../../components/containers/Content";

export const unstable_settings = {

};


export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const emailRef = useRef<TextInput>(null);
    const [password, setPassword] = useState('');
    const passwordRef = useRef<TextInput>(null);

    return (
        <Page>
            <Stack.Screen options={{
                headerStyle: {},
                title: 'Forgot password'
            }} />
            <Content>
                <View className="gap-y-4">
                    <Input
                        size="md"
                        ref={emailRef}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                    />

                    <Button>
                        <TextI18n code="send_confirm_code" />
                    </Button>

                    <View className="mt-4 items-baseline">
                        <Link href={"/register"}>
                            <Text>Do not have an account? <Text className="text-blue-500">Signup</Text></Text>
                        </Link>
                    </View>
                </View>
            </Content>

        </Page>
    )
}