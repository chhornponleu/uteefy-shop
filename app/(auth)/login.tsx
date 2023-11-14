import { Stack, useNavigation, useRootNavigation, useRouter } from "expo-router";
import React, { useState } from 'react';
import { Alert, Button, TextInput } from "react-native";

import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth/react-native";
import { Box } from "../../components/containers";
import { auth } from "../../libs/firebase";
import { useLoginWithEmailMutation } from "../../api/auth";

type Props = {};

function useLoginControler() {

    const [login, { called, data, error, reset, loading }] = useLoginWithEmailMutation();

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

export default function Login({ }: Props) {
    const {
        error,
        handleLoginWithEmail,
        loading,
        reset,
    } = useLoginControler();

    // const route = useRouter();
    // const naviagtion = useRootNavigation();
    // const nav = useNavigation();
    const [email] = useState('chhornponleu@gmail.com');
    const [password, setPwd] = useState('123456');

    function register() {
        alert('register not implemented yet')
    }


    return (
        <Box>
            {/* <Stack.Screen options={{ title: 'Login', }} />
            <TextInput placeholder="Email" value={email} />
            <Button title="Register" onPress={register} />
            <Button title="Login Now" onPress={() => {
                handleLoginWithEmail({
                    email,
                    password
                })
            }} /> */}
        </Box>
    )
}