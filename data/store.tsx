import { useMutation } from "@tanstack/react-query";
import { User, getAuth } from "firebase/auth";
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import { useLayoutEffect } from "react";
import { create, useStore } from "zustand";
import { persist } from "zustand/middleware";
import { auth, db } from "../libs/firebase";
import { Store } from "./types";




export type StoreCreate = Pick<Store, 'name' | 'currency' | 'about' | 'logo_url'>


export const useGlobalStoreList = create<{
    data: Store[],
    selected?: Store,
    loading: boolean,
    fetch: () => void;
}>(
    (set) => ({
        selected: undefined,
        data: [],
        loading: true,
        fetch: async () => {
            const user = await new Promise<User>(resolve => {
                getAuth().onAuthStateChanged(user => {
                    resolve(user);
                })
            })
            if (!user) {
                alert('no user')
                set(prev => ({ ...prev, loading: false }))
            }
            else {
                const q = query(
                    collection(db, "stores"),
                    where(`active`, '==', true),
                    where(`members.${user.uid}.active`, '==', true)
                );
                const sub = onSnapshot(q, { includeMetadataChanges: true }, snapshot => {
                    const stores = [];
                    snapshot.docChanges().forEach((change) => {
                        if (change.type === "added") {
                            stores.push({ id: change.doc.id, ...change.doc.data() as Store });
                        }
                        else if (change.type === 'modified') {
                            set(prev => ({ data: prev.data.map(s => s.id === change.doc.id ? { id: change.doc.id, ...change.doc.data() as Store } : s), loading: false }))
                        }
                        else if (change.type === 'removed') {
                            set(prev => ({ data: prev.data.filter(s => s.id !== change.doc.id), loading: false }))
                        }
                        const source = snapshot.metadata.fromCache ? "local cache" : "server";
                        console.log("Data came from " + source, change);
                    });
                    console.log(stores);

                    set(prev => ({ data: [...prev.data.filter(s => stores.findIndex(ss => s.id === ss.id) < 0), ...stores], loading: false }))
                })
            }
        }
    })
)

const s = create(
    persist(
        () => ({}),
        {
            name: '',
        }
    )
)

export const useStoreDetail = (storeId) => {
    return useStore(useGlobalStoreList, s => s.data?.find(s => s.id === storeId));
}

export const useStoreList = () => {
    const store = useGlobalStoreList();
    useLayoutEffect(() => {
        if (store.loading) {
            store.fetch()
        }
    }, [])
    return store

}

export function useStoreCreate() {
    return useMutation(async (store: StoreCreate) => {
        const uid = auth?.currentUser?.uid;
        if (!uid) return;

        const newStore = await addDoc(collection(db, 'stores'), {
            ...store,
            active: true,
            members: {
                [uid]: {
                    active: true,
                    role: 'owner',
                }
            },
        });
        return newStore;
    })
}

