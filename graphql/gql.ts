/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation LoginWithEmail($data: LoginWithEmailInput!) {\n        signInWithEmail(\n            data: $data\n        ) {\n            token\n        }\n    }\n": types.LoginWithEmailDocument,
    "\n    query emailAvailable($data: String!) {\n        signUpWithEmailAvailable(data: {email: $data})\n    }\n": types.EmailAvailableDocument,
    "\n    fragment StoreFields_Fragment on Store {\n        id\n        name\n        address\n        currency\n        email\n        phone\n        logo\n        active\n        image\n        thumbnail\n        createdAt\n    }\n": types.StoreFields_FragmentFragmentDoc,
    "\n    fragment StoreMemberFragment on StoreMember {\n        id\n        storeRoleId\n        userId\n        status\n        active\n        createdAt\n    }\n": types.StoreMemberFragmentFragmentDoc,
    "\n    query StoreById($id: String!) {\n        store(id: $id) {\n            id\n            name\n            address\n            currency\n            email\n            phone\n            logo\n            active\n            image\n            thumbnail\n            createdAt\n        }\n    } \n": types.StoreByIdDocument,
    "\n    query StoreList($take: Float, $skip: Float, $cursor: StoreWhereUniqueInput) {\n        storeList(take: $take, skip: $skip, cursor: $cursor) {\n            id\n            name\n            address\n            currency\n            email\n            phone\n            logo\n            active\n            image\n            thumbnail\n            createdAt\n            StoreMember {\n                ...StoreMemberFragment\n            }\n        }\n    }  \n": types.StoreListDocument,
    "\n    mutation StoreCreate_Mutation($input: StoreCreateInput!) {\n        storeCreate(data: $input) {\n            id\n            name\n            address\n            currency\n            email\n            phone\n            logo\n            active\n            image\n            thumbnail\n            createdAt\n        }\n    }\n": types.StoreCreate_MutationDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation LoginWithEmail($data: LoginWithEmailInput!) {\n        signInWithEmail(\n            data: $data\n        ) {\n            token\n        }\n    }\n"): (typeof documents)["\n    mutation LoginWithEmail($data: LoginWithEmailInput!) {\n        signInWithEmail(\n            data: $data\n        ) {\n            token\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query emailAvailable($data: String!) {\n        signUpWithEmailAvailable(data: {email: $data})\n    }\n"): (typeof documents)["\n    query emailAvailable($data: String!) {\n        signUpWithEmailAvailable(data: {email: $data})\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment StoreFields_Fragment on Store {\n        id\n        name\n        address\n        currency\n        email\n        phone\n        logo\n        active\n        image\n        thumbnail\n        createdAt\n    }\n"): (typeof documents)["\n    fragment StoreFields_Fragment on Store {\n        id\n        name\n        address\n        currency\n        email\n        phone\n        logo\n        active\n        image\n        thumbnail\n        createdAt\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment StoreMemberFragment on StoreMember {\n        id\n        storeRoleId\n        userId\n        status\n        active\n        createdAt\n    }\n"): (typeof documents)["\n    fragment StoreMemberFragment on StoreMember {\n        id\n        storeRoleId\n        userId\n        status\n        active\n        createdAt\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query StoreById($id: String!) {\n        store(id: $id) {\n            id\n            name\n            address\n            currency\n            email\n            phone\n            logo\n            active\n            image\n            thumbnail\n            createdAt\n        }\n    } \n"): (typeof documents)["\n    query StoreById($id: String!) {\n        store(id: $id) {\n            id\n            name\n            address\n            currency\n            email\n            phone\n            logo\n            active\n            image\n            thumbnail\n            createdAt\n        }\n    } \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query StoreList($take: Float, $skip: Float, $cursor: StoreWhereUniqueInput) {\n        storeList(take: $take, skip: $skip, cursor: $cursor) {\n            id\n            name\n            address\n            currency\n            email\n            phone\n            logo\n            active\n            image\n            thumbnail\n            createdAt\n            StoreMember {\n                ...StoreMemberFragment\n            }\n        }\n    }  \n"): (typeof documents)["\n    query StoreList($take: Float, $skip: Float, $cursor: StoreWhereUniqueInput) {\n        storeList(take: $take, skip: $skip, cursor: $cursor) {\n            id\n            name\n            address\n            currency\n            email\n            phone\n            logo\n            active\n            image\n            thumbnail\n            createdAt\n            StoreMember {\n                ...StoreMemberFragment\n            }\n        }\n    }  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation StoreCreate_Mutation($input: StoreCreateInput!) {\n        storeCreate(data: $input) {\n            id\n            name\n            address\n            currency\n            email\n            phone\n            logo\n            active\n            image\n            thumbnail\n            createdAt\n        }\n    }\n"): (typeof documents)["\n    mutation StoreCreate_Mutation($input: StoreCreateInput!) {\n        storeCreate(data: $input) {\n            id\n            name\n            address\n            currency\n            email\n            phone\n            logo\n            active\n            image\n            thumbnail\n            createdAt\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;