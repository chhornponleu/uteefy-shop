import { gql } from "../../../graphql";

const UserFragment = gql(`
    fragment UserFragment on User {
        id
        email
        fistName
        middleName
        lastName
        phone
        phoneCode
        image
        fullName
        createdAt 
    }
`);

export const AuthLoginWithEmail_Mutation = gql(`
    mutation LoginWithEmail($data: LoginWithEmailInput!) {
        signInWithEmail(
            data: $data
        ) {
            token,
            userInfo {
                ...UserFragment
            }
        }
    }
`);

export const AuthSignUpEmailAvailable_Query = gql(`
    query emailAvailable($data: String!) {
        signUpWithEmailAvailable(data: {email: $data})
    }
`);