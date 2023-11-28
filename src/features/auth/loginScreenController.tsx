import { useMutation } from "@apollo/client";
import { useAuthToken } from "../../context/AppProvider";
import { AuthLoginWithEmail_Mutation } from "./queries";

export const useLoginScreenViewController = () => {
    const authToken = useAuthToken();
    const [mutateLogin, state] = useMutation(AuthLoginWithEmail_Mutation);

    const handleLoginWithEmail = async (
        data: { email: string, password: string }
    ) => {
        return mutateLogin({
            variables: { data }
        }).then(resp => {
            authToken.setToken(resp.data?.signInWithEmail.token)
            return resp;
        });
    }

    return {
        handleLoginWithEmail,
        state
    }

}