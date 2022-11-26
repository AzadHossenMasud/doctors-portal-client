import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import ContinueWithGoogle from "../../Components/ContinueWithGoogle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  // console.log(createUser);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if(token){
    navigate('/')
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleRegister = (data) => {
    setSignupError("");
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {
            savedUser(data.name, data.email);

            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        toast("Sign Up Succesully.");

        // console.log(user)

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSignupError(errorMessage);
        toast("Registration failed.");
        // ..
      });
    // console.log(data);
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
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className=" mx-auto flex justify-center items-center w-[500px] ">
      <Toaster />
      <div>
        <h2 className="text-center text-xl font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "User Name is required" })}
              type="text"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className=" text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className=" text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or more.",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
                  message:
                    "Password must have atlest a uppercase, a lowercase, a number and a special character except whitespace",
                },
              })}
              type="password"
              name="password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className=" text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            className=" btn mt-3 w-full max-w-xs "
            value="Sign Up"
            type="submit"
          />
        </form>
        {signupError && <p className=" text-red-600">{signupError}</p>}
        <p className=" my-3 text-center">
          Already have an account?{" "}
          <Link className="text-[#19D3AE]" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <ContinueWithGoogle></ContinueWithGoogle>
      </div>
    </div>
  );
};

export default Register;
