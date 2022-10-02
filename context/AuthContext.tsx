import {createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword
} from "@firebase/auth";

import {auth} from "../config/firebase";
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth";

const AuthContext = createContext<any>({})

export function useAuth () {
    return useContext(AuthContext);
}

export  function AuthContextProvider ({children} :any) {
    const [currentUser, setCurrentUser] = useState<any>()
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();


    const  signup = (email: string, password: string) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const loginWithEmailAndPassword = (email:string, password:string) => {
      return signInWithEmailAndPassword(auth,email, password)

  }
    const logout = () => {
        return auth.signOut()

    }

     const googleLogin = () =>{
        return  signInWithPopup(auth,provider)
    }

    const resetPassword = (email:string) => {
        return sendPasswordResetEmail(auth,email)
    }
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    const value = {
        currentUser,
        signup,
        loginWithEmailAndPassword,
        logout,
        googleLogin,
        resetPassword
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
