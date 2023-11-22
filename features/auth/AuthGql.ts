import { graphql } from "../../api";

export const AuthLoginWithEmailMutation = graphql(`
    mutation LoginWithEmail($data: LoginWithEmailInput!) {
        signInWithEmail(
            data: $data
        ) {
            token
        }
    }
`);
