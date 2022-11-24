import React, { Children, createContext } from 'react';

export const authContext = createContext();


const AuthProvider = ({children}) => {


    const authInfo = {
        
    }

    return (
        <div>
            <AuthProvider value={authInfo}>
                {Children}
            </AuthProvider>
        </div>
    );
};

export default AuthProvider;