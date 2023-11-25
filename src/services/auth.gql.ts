import { graphql } from "./gql";

export const AuthLoginWithEmail_Mutation = graphql(`
    mutation LoginWithEmail($data: LoginWithEmailInput!) {
        signInWithEmail(
            data: $data
        ) {
            token
        }
    }
`);

export const AuthSignUpEmailAvailable_Query = graphql(`
    query emailAvailable($data: String!) {
        signUpWithEmailAvailable(data: {email: $data})
    }
`);