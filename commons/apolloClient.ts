import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (__DEV__) {  // Adds messages only in a dev environment
    loadDevMessages();
    loadErrorMessages();
}

const uri = process.env.EXPO_PUBLIC_API_GQL_ENDPOINT;
const httpLink = createHttpLink({ uri, });

const logLink = new ApolloLink((operation, forward) => {
    console.info(operation.getContext())
    return forward(operation).map(result => {
        return result;
    });
});

const authLink = new ApolloLink((operation, forward) => {
    // Retrieve the authorization token from local storage.
    // const token = localStorage.getItem('auth_token');

    // Use the setContext method to set the HTTP headers.
    operation.setContext({
        ...operation?.getContext(),
        headers: {
            // authorization: token ? `Bearer ${token}` : ''
            authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbG5qMHp3NGwwMDAwdjYzMm1tYXpkNGJpIiwic2Vzc2lvbl9pZCI6ImNsbzlpanc0cTAwMDB2NjEyZGVwNHY1bXQiLCJpYXQiOjE2OTg0NjU1NzksImV4cCI6MTczMDAwMTU3OSwiaXNzIjoidXRlZWZ5LmNvbSJ9.7t4-LvpPr1FLguFjf2JWyIpmi6VNt-tVfYIyIEsLG7c",
            ...(operation?.getContext()?.headers || {}),
        }
    });

    // Call the next link in the middleware chain.
    return forward(operation);
});

const links = [authLink, logLink, httpLink]

const cache = new InMemoryCache()
export const apoloClient = new ApolloClient({
    cache,
    link: ApolloLink.from(links),
});
