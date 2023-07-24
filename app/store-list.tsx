import React from 'react';
import { Box } from "../components/containers";
import { Text } from "../components/typo";

type Props = {};

// after authenticated, this is the first screen the user sees.
// it is a list of all the stores the user has access to.
// user can click on a store to view it and it will be the default store for next time they open the app.
export default function StoreList({ }: Props) {
    return (
        <Box flex>
            <Text>Store List</Text>
        </Box>
    )
}