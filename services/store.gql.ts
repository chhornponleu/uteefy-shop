import { graphql } from "./gql";

export const Store_Query = graphql(`
    query Store_Query($id: String!) {
        store(id: $id) {
            ...Store_Fragment
        }
    }
`);

export const StoreList_Query = graphql(`
    query StoreList_Query {
        storeList {
            ...Store_Fragment
        }
    }
`);

export const StoreCreate_Mutation = graphql(`
    mutation StoreCreate_Mutation($input: StoreCreateInput!) {
        storeCreate(data: $input) {
            ...Store_Fragment
        }
    }
`);

// export const StoreUpdate_Mutation = graphql(`
//     mutation StoreUpdate_Mutation($input: StoreUpdateInput!) {
//         storeUpdate(input: $input) {
//             ...Store_Fragment
//         }
//     }
// `);

// export const StoreDelete_Mutation = graphql(`
//     mutation StoreDelete_Mutation($input: StoreDeleteInput!) {
//         storeDelete(input: $input) {
//             ...Store_Fragment
//         }
//     }
// `);