import { ApolloClient, ApolloLink, InMemoryCache, createHttpLink } from "@apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { useAppContextStore, useAuthToken } from "../context/AppProvider";

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
    // Read token and locale from the store (of zustand)
    const { token, locale } = useAppContextStore.getState()?.data || {};
    // Use the setContext method to set the HTTP headers.
    operation.setContext({
        ...operation?.getContext(),
        headers: {
            'authorization': token ? `Bearer ${token}` : undefined,
            'accept-language': locale || 'en',
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
