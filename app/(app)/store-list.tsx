import { useQuery } from "@tanstack/react-query";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import React from 'react';
import { Box } from "../../components/containers";
import { Text } from "../../components/typo";
import { useAppContext } from "../../context/AppProvider";
import { db } from "../../libs/firebase";

type Props = {};

// after authenticated, this is the first screen the user sees.
// it is a list of all the stores the user has access to.
// user can click on a store to view it and it will be the default store for next time they open the app.

const citiesRef = collection(db, "cities");

const useStoerListData = ({ uid }: { uid: string }) => {
    return useQuery(['store-list'], async () => {
        const q = query(
            collection(db, "stores"),
            where(`active`, '==', true),
            where(`members.${uid}.active`, '==', true)
        );
        const sub = onSnapshot(q, { includeMetadataChanges: true }, snapshot => {
            const stores = [];
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log("New store: ", change.doc.data());
                    stores.push(change.doc.data())
                }
                if (change.type === "modified") {
                    console.log("Modified store: ", change.doc.data());
                }
                if (change.type === "removed") {
                    console.log("Removed store: ", change.doc.data());
                }
            });
            return stores;
        })
    }, {
        enabled: !!uid
    })
}

export default function StoreList({ }: Props) {
    const { user } = useAppContext()
    const { data, isLoading } = useStoerListData({ uid: user?.uid || '' });


    return (
        <Box flex>
            <Text>Store List</Text>
            <Text>{JSON.stringify(data, null, 2)}</Text>
        </Box>
    )
}