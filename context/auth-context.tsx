import React, { useEffect, useState } from "react";

type AthProps = {
    user?: any;
    token?: any;
    ready?: boolean;
}
const AuthContext = React.createContext<AthProps>({
    ready: false
});

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<AthProps>(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        if (user && token) {
            setUser(JSON.parse(user));
        }
    }, [])


    function setAuth() {

    }

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}