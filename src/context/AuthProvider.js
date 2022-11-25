import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../src/firebase/firebase.config';
export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const GoogleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(null);

    // create user with email and password 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // email sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out
    const logOut = () => {
        return signOut(auth);
    }

    // Update profile display name
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    // singIn with google
    const googleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider);
    }

    // current user
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(true);
            setUser(currentUser);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        signIn,
        user,
        loading,
        logOut,
        updateUser,
        googleSignIn
    }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;