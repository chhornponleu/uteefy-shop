import React, { useEffect, useState } from 'react'
import { Store } from "../api/gql/graphql";
import { createHttpLink } from "@apollo/client";
import { apoloClient } from "../commons/apolloClient";

type StoreContextProps = {
    setStore: (store: Store) => void;
    store: Store;
}

const StoreContext = React.createContext<StoreContextProps>({
    setStore: () => {
        throw new Error('setStore() cannot be called outside of the StoreContext.Provider');
    },
    store: null
});
type Props = { children: any };


export default function StoreContextProvider({ children }: Props) {

    const [store, setStore] = useState<Store>();

    useEffect(() => {
        //TODO:
        // apoloClient.setLink(
        //     createHttpLink({
        //         headers: {
        //             'x-store-id': store?.id,
        //             'x-store-role-id': store?.StoreMember[0].storeRoleId
        //         }
        //     })
        // )
    }, [store])

    return (
        <StoreContext.Provider value={{ store, setStore }}>
            {children}
        </StoreContext.Provider>
    )

}