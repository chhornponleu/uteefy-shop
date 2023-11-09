import { ApolloClient, InMemoryCache } from "@apollo/client";

const uri = process.env.EXPO_PUBLIC_API_GQL_ENDPOINT;
const cache = new InMemoryCache()

export const apoloClient = new ApolloClient({
    uri,
    cache,
});
