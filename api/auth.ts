import { useMutation, useQuery } from "@apollo/client";
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

const AuthWithUpWithEmailAvailableQuery = gql(`
    query emailAvailable($data: String!) {
        signUpWithEmailAvailable(data: {email: $data})
    }
`);
// query emailAvailable {
//     signUpWithEmailAvailable(data: { email: "chhornponleu@gmail.com" })
//   }

export const useLoginWithEmailMutation = () => useMutation(AuthLoginWithEmailMutation, {

});

export const useSignUpEmailAvailable = ({ email }: { email: string }) => useQuery(AuthWithUpWithEmailAvailableQuery, { variables: { data: email } })
