import React, { useCallback, useContext, useEffect, useReducer } from "react";
import { useLoginWithEmailMutation } from "../api/auth";
import { LoginWithEmailMutation, User } from "../api/gql/graphql";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FetchResult } from "@apollo/client";

const STORAGE_TOKEN_KEY = '@token';
const STORAGE_USR_INFO_KEY = '@userInfo';

interface State {
    userInfo?: User;
    token?: string;
    ready?: boolean;
}

interface AuthContextProps {
    state: State;
    setAuth: (data: Omit<State, 'ready'>) => void;
}

interface StateAction {
    type: 'set',
    payload: State,
};

function unImplemented() {
    throw new Error('Context function not implemented');
}

const AuthContext = React.createContext<AuthContextProps>({
    state: { ready: false, },
    setAuth: unImplemented,
});

function reducer(state: State, action: StateAction) {
    return {
        ...state,
        ...action.payload,
    };
}

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(reducer, {},)

    const setAuth = useCallback((data: Pick<State, 'token' | 'userInfo'>) => {
        dispatch({
            type: 'set',
            payload: {
                ...data,
                ready: true,
            },
        })
    }, [])

    useEffect(() => {
        const token = localStorage.getItem(STORAGE_TOKEN_KEY);
        const userInfo = localStorage.getItem(STORAGE_USR_INFO_KEY);
        setAuth({
            token,
            userInfo: userInfo ? JSON.parse(userInfo) : undefined,
        })
    }, [])

    return (
        <AuthContext.Provider value={{ state, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuthContext() {
    return useContext(AuthContext);
}

export function useAuthState() {
    const context = useAuthContext();
    return context.state;
}

export function useAuthLoginWithEmail() {
    const auth = useAuthContext();
    const [mutateLogin, state] = useLoginWithEmailMutation();

    const login = useCallback((email: string, password: string) => {
        return mutateLogin({
            variables: {
                data: { email, password }
            }
        }).then((resp) => {
            const token = resp.data.signInWithEmail.token;
            auth.setAuth({ token, userInfo: null })
            AsyncStorage.setItem(STORAGE_TOKEN_KEY, token);
            //TODO:load user info
            AsyncStorage.setItem(STORAGE_USR_INFO_KEY, JSON.stringify({}));
            return resp;
        });
    }, [])

    return [
        login,
        state
    ] as [typeof login, typeof state]
}

export function useAuthLogout() {
    const auth = useAuthContext();

}
