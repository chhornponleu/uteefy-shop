import { graphql } from "./gql";


export const Store_Fragment = graphql(`
    fragment Store_Fragment on Store {
        id
        name
        address
        currency
        email
        phone
        logo
        active
        image
        thumbnail
        createdAt
    }
`);