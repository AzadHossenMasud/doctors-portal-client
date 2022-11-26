import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser,] = useState();
  const [loading, setLoading]= useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password)=>{
    setLoading(true)

    return signInWithEmailAndPassword(auth, email, password)

  }

  const googleSignIn = (provider)=>{
    setLoading(true)

    return signInWithPopup(auth, provider)

  }

  const updateUser = (userInfo)=>{
    return updateProfile(auth.currentUser, userInfo)
  }

  const userLogout=() =>{
    return signOut(auth)
  }

  const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth, email)

  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        // console.log(currentUser);
        setUser(currentUser)
        setLoading(false)

    })

    return ()=> unsubscribe()
  },[])
  const authInfo = {
    createUser, signIn, googleSignIn, user, userLogout, updateUser, loading, resetPassword
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
