import { AntDesign } from "@expo/vector-icons";
import { classed } from "@tw-classed/react";
import { Link, Stack } from "expo-router";
import React, { useRef, useState } from 'react';
import { Platform, Pressable, TextInput, TextInputProps, View } from "react-native";
import { Button } from "../../components/buttons";
import Page from "../../components/containers/Page";
import { Text } from "../../components/typo";
import Content from "../../components/containers/Content";

export const unstable_settings = {

};

type InputProps = TextInputProps & {
    ref: any;
    size?: 'sm' | 'md' | 'lg';
    color: 'primary' | 'secondary' | 'disabled' | 'danger' | 'warning' | 'success';
}

const classes = {
    sizes: {
        'sm': 'text-sm px-2 h-10 rounded-md',
        'md': 'text-md px-4 h-14 rounded-lg',
        'lg': 'text-lg px-6 h-16 rounded-lg',
        'xl': 'text-xl px-6 h-18 rounded-lg',
    },
    colors: {
        primary: { text: 'text-black', container: '' },
        secondary: { text: 'text-gray-600', container: '' },
        disabled: { text: 'text-gray-400', container: '' },
        danger: { text: 'text-red-600', container: '' },
        warning: { text: 'text-orange-600', container: '' },
        success: { text: 'text-green-600', container: '' },
    }
}

function Input({
    className,
    size = 'md',
    color = 'primary',
    ...props
}: InputProps) {

    return (
        <TextInput
            {...props}
            className={`
                border-2 border-gray-200 focus:border-blue-500
                rounded-md dark:border-black
                ${classes.sizes[size]}
                ${classes.colors[color].text}
                ${className}
            `}
        />
    )
}



export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    return (
        <Page>
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
            <Content>
                <Input
                    size="lg"
                    color="success"
                    // ref={emailRef}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    verticalAlign="middle"
                />
                {/* <TextInput
                   
                /> */}

                <Button>
                    <Text>
                        Continue
                    </Text>
                </Button>

                <View className="mt-4 items-baseline">
                    <Link href={"/register"}>
                        <Text>Do not have an account? <Text className="text-blue-500">Signup</Text></Text>
                    </Link>
                </View>
            </Content>

        </Page>
    )
}