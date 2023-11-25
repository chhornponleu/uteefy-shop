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
    "\n    fragment Store_Fragment on Store {\n        id\n        name\n        address\n        currency\n        email\n        phone\n        logo\n        active\n        image\n        thumbnail\n        createdAt\n    }\n": types.Store_FragmentFragmentDoc,
    "\n    query Store_Query($id: String!) {\n        store(id: $id) {\n            ...Store_Fragment\n        }\n    }\n": types.Store_QueryDocument,
    "\n    query StoreList_Query {\n        storeList {\n            ...Store_Fragment\n        }\n    }\n": types.StoreList_QueryDocument,
    "\n    mutation StoreCreate_Mutation($input: StoreCreateInput!) {\n        storeCreate(data: $input) {\n            ...Store_Fragment\n        }\n    }\n": types.StoreCreate_MutationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation LoginWithEmail($data: LoginWithEmailInput!) {\n        signInWithEmail(\n            data: $data\n        ) {\n            token\n        }\n    }\n"): (typeof documents)["\n    mutation LoginWithEmail($data: LoginWithEmailInput!) {\n        signInWithEmail(\n            data: $data\n        ) {\n            token\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Store_Fragment on Store {\n        id\n        name\n        address\n        currency\n        email\n        phone\n        logo\n        active\n        image\n        thumbnail\n        createdAt\n    }\n"): (typeof documents)["\n    fragment Store_Fragment on Store {\n        id\n        name\n        address\n        currency\n        email\n        phone\n        logo\n        active\n        image\n        thumbnail\n        createdAt\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Store_Query($id: String!) {\n        store(id: $id) {\n            ...Store_Fragment\n        }\n    }\n"): (typeof documents)["\n    query Store_Query($id: String!) {\n        store(id: $id) {\n            ...Store_Fragment\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query StoreList_Query {\n        storeList {\n            ...Store_Fragment\n        }\n    }\n"): (typeof documents)["\n    query StoreList_Query {\n        storeList {\n            ...Store_Fragment\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation StoreCreate_Mutation($input: StoreCreateInput!) {\n        storeCreate(data: $input) {\n            ...Store_Fragment\n        }\n    }\n"): (typeof documents)["\n    mutation StoreCreate_Mutation($input: StoreCreateInput!) {\n        storeCreate(data: $input) {\n            ...Store_Fragment\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;