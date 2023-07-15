
import { useRootNavigation, useRouter, useSegments } from "expo-router";
import { User, getAuth } from "firebase/auth";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { auth } from "../libs/firebase";

interface AuthContextProps {
    user?: User;
    signInWithEmailPassword: (email: string, password: string) => Promise<void>;
    sendVerificationEmail: (email: string, code: string) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextProps>({
    user: undefined,
    signInWithEmailPassword: async () => { },
    sendVerificationEmail: async () => { },
    signOut: async () => { },
});

// This hook can be used to access the user info.
export function useAuth() {
    return React.useContext(AuthContext);
}

function useNavitationState() {
    const [isNavigationReady, setNavigationReady] = useState(false);
    const rootNavigation = useRootNavigation();

    useEffect(() => {
        const unsubscribe = rootNavigation?.addListener('state', (event) => {
            // console.log("INFO: rootNavigation?.addListener('state')", event);
            setNavigationReady(true);
        });
        return function cleanup() {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [rootNavigation]);
    return { isNavigationReady };
}

function useProtectedRoute(user) {
    const segments = useSegments();
    const router = useRouter();
    const { isNavigationReady } = useNavitationState();
    React.useEffect(() => {
        if (!isNavigationReady) return;
        const inAuthGroup = segments[0] === '(auth)';
        if (
            // If the user is not signed in and the initial segment is not anything in the auth group.
            !user &&
            !inAuthGroup
        ) {
            // Redirect to the sign-in page.
            router.replace('/login');
        }
        else if (user && inAuthGroup) {
            // Redirect away from the sign-in page.
            router.replace('/');
        }
    }, [user, segments, isNavigationReady]);
}


export function AuthProvider(props) {

    const [user, setUser] = React.useState(auth.currentUser);
    useProtectedRoute(user);
    useLayoutEffect(() => {
        alert(process.env.EXPO_PUBLIC_AUTH_CALLBACK_ENDPOINT)
        const auth = getAuth()
        return auth.onAuthStateChanged((user) => {
            console.log('onAuthStateChanged', user);
            setUser(user);
        })
    }, [])


    return (
        <AuthContext.Provider
            value={{
                user,
                sendVerificationEmail: async (email, code) => {
                    // const actionCodeSettings = {
                    //     url: 'https://menu.uteefy.com',
                    //     handleCodeInApp: true,
                    // };
                    // await auth.sendPasswordResetEmail(email, actionCodeSettings);
                },
                signInWithEmailPassword: async (email, password) => {
                    // await auth.signInWithEmailAndPassword(email, password);
                },
                signOut: async () => {
                    // await auth.signOut();
                }
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}