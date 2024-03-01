import { createContext, useContext, useState } from "react";
import { useStorageState } from "./hooks/storage";





const AuthContext = createContext({
    signIn: () => { },
    signOut: () => { },
    session: '',
    isLoading: false
});



export const useSession = () => {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be used within <SessionProvider />');
        }
    }
    return value;
}

export const SessionProvider = ({ children }) => {
    // const [[isLoading, session], setSession] = useStorageState("session");

    const [session, setSession] = useState({
        user: null,
        token: null,
        loggedIn: false
    });


    return (
        <AuthContext.Provider value={{
            signIn: (data) => setSession({
                user: {
                    id: data.user_id,
                    username: data.user_name,
                },
                token: data.access_token,
                loggedIn: true
            }),
            signOut: () => setSession({
                user: null,
                token: null,
                loggedIn: false
            }),
            session,
        }}>
            {children}
        </AuthContext.Provider>
    )

}
