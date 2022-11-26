import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const {userLogout}= useContext(AuthContext)
  const handleLogout=()=>{
    userLogout()
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        <i>Please <span className=" text-red-700" onClick={handleLogout}>Logout</span></i>
      </p>
    </div>
  );
};

export default DisplayError;
