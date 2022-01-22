import React from 'react'
const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
    // define the consts to be used in the context
    //
    //
    const user = {
        name: 'John'
    };
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext