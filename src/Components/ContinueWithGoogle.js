import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import useToken from "../hooks/useToken";

const ContinueWithGoogle = () => {
  const { googleSignIn } = useContext(AuthContext);
  // console.log(googleSignIn);
  const provider = new GoogleAuthProvider();
  const [signInEmail, setSignInEmail]= useState('')
  const navigate = useNavigate();
  const location = useLocation();

  const [token]= useToken(signInEmail)

  const from = location.state?.from?.pathname || "/";

  if(token){
    navigate('/')

  }

  const handleGoogle = () => {
    googleSignIn(provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        savedUser(user.displayName, user.email )
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const savedUser = (name, email) => {
    const user = { name, email };
    console.log(user);
    fetch("https://doctors-portal-server-seven-beta.vercel.app/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setSignInEmail(email);
      });
  };

  return (
    <button onClick={handleGoogle} className="btn w-full btn-outline">
      Continue With Google
    </button>
  );
};

export default ContinueWithGoogle;
