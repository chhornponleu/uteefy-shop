import { gql } from "../../../graphql";

export const Store_Fragment = gql(`
    fragment StoreFields_Fragment on Store {
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
`)

export const StoreMember_Fragment = gql(`
    fragment StoreMemberFragment on StoreMember {
        id
        storeRoleId
        userId
        status
        active
        createdAt
    }
`);

export const Store_Query = gql(`
    query StoreById($id: String!) {
        store(id: $id) {
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
    } 
`);

export const StoreList_Query = gql(`
    query StoreList($take: Float, $skip: Float, $cursor: StoreWhereUniqueInput) {
        storeList(take: $take, skip: $skip, cursor: $cursor) {
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
            StoreMember {
                ...StoreMemberFragment
            }
        }
    }  
`);

export const StoreCreate_Mutation = gql(`
    mutation StoreCreate_Mutation($input: StoreCreateInput!) {
        storeCreate(data: $input) {
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
    }
`);

// export const Store_Fragment = gql(`
//     fragment Store_Fragment on Store {
//         id
//         name
//         address
//         currency
//         email
//         phone
//         logo
//         active
//         image
//         thumbnail
//         createdAt
//     }
// `);

// export const StoreUpdate_Mutation = gql(`
//     mutation StoreUpdate_Mutation($input: StoreUpdateInput!) {
//         storeUpdate(input: $input) {
//             ...Store_Fragment
//         }
//     }
// `);

// export const StoreDelete_Mutation = gql(`
//     mutation StoreDelete_Mutation($input: StoreDeleteInput!) {
//         storeDelete(input: $input) {
//             ...Store_Fragment
//         }
//     }
// `);