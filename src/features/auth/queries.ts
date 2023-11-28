import { gql } from "../../../graphql";

export const AuthLoginWithEmail_Mutation = gql(`
    mutation LoginWithEmail($data: LoginWithEmailInput!) {
        signInWithEmail(
            data: $data
        ) {
            token
        }
    }
`);

export const AuthSignUpEmailAvailable_Query = gql(`
    query emailAvailable($data: String!) {
        signUpWithEmailAvailable(data: {email: $data})
    }
`);