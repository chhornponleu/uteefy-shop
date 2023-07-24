import { Stack, useNavigation, useRootNavigation, useRouter } from "expo-router";
import React, { useState } from 'react';
import { Alert, Button, TextInput } from "react-native";
import { Box } from "../../../components/containers";

import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../libs/firebase";

type Props = {};
export default function LogInWithPhone({ }: Props) {
    const route = useRouter();
    const naviagtion = useRootNavigation();
    const nav = useNavigation();
    const [email] = useState('chhornponleu@gmail.com');

    function login() {
        signInWithEmailAndPassword(auth, email, '123456')
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('success', user);
                if (user.emailVerified) {
                    route.replace('/stores');
                    // naviagtion.resetRoot();
                }
                else {
                    sendEmailVerification(user, { url: 'https://auth.uteefy.com', handleCodeInApp: true }).then(value => {
                        console.log('sendEmailVerification success', value);
                    }).catch(error => {
                        console.log('sendEmailVerification fail', error);
                    });
                    // then 
                    // applyActionCode(auth, '123456');
                }

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
                if (errorCode === 'auth/user-not-found') {
                    Alert.alert('Error', 'User not found!');
                }
                if (errorCode === 'auth/wrong-password') {
                    Alert.alert('Error', 'Wrong password!');
                }

            });
    }

    function register() {
        if (!email) {
            alert('Please enter your email');
            return;
        }

        createUserWithEmailAndPassword(auth, email, '123456')
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                if (errorCode === 'auth/email-already-in-use') {
                    Alert.alert('Error', 'That email address is already in use!');
                }
                if (errorCode === 'auth/invalid-email') {
                    Alert.alert('Error', 'That email address is invalid!');
                }
                if (errorCode === 'auth/weak-password') {
                    Alert.alert('Error', 'That password is too weak!');
                }

                console.log(error);

            });
    }



    return (
        <Box>
            <Stack.Screen options={{ title: 'Login', }} />
            <TextInput placeholder="Email" value={email} />
            <Button title="Register" onPress={register} />
            <Button title="Login Now" onPress={login} />
        </Box>
    )
}