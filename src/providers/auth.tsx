import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props:any) => {
    const [user, setUser] = useState ({
        name: 'teste',
    })

    return(
        <AuthContext.Provider value={{ user,setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}