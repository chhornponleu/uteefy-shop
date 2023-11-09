import { useMutation } from "@apollo/client";
import { gql, } from "./gql";

const AuthLoginWithEmailMutation = gql(`
    mutation LoginWithEmail($data: LoginWithEmailInput!) {
        signInWithEmail(
            data: $data
        ) {
            token
        }
    }
`);

export const useLoginWithEmailMutation = () => {
    return useMutation(AuthLoginWithEmailMutation, {
        variables: {
            data: {
                email: "",
                password: ""
            }
        }
    });
} 