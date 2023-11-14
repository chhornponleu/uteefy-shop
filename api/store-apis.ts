import { createHttpLink, useQuery } from "@apollo/client";
import { gql } from "./gql";

const StoreListQuery = gql(`
    query StoreList($take: Float, $skip: Float, $cursor: StoreWhereUniqueInput) {
        storeList(
            take: $take,  
            skip: $skip,
            cursor: $cursor
        ) {
            id
            name
            address
        }
    }
`);

export const useStoreListQuery = () => useQuery(StoreListQuery, {
    variables: {
        // take: 10,
        // skip: 0,
        // cursor: null
    },
    // context: {
    //     headers: {
    //         authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbG5qMHp3NGwwMDAwdjYzMm1tYXpkNGJpIiwic2Vzc2lvbl9pZCI6ImNsbzlpanc0cTAwMDB2NjEyZGVwNHY1bXQiLCJpYXQiOjE2OTg0NjU1NzksImV4cCI6MTczMDAwMTU3OSwiaXNzIjoidXRlZWZ5LmNvbSJ9.7t4-LvpPr1FLguFjf2JWyIpmi6VNt-tVfYIyIEsLG7c",
    //     }
    // }
});