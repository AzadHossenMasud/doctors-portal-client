import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContinueWithGoogle from "../../Components/ContinueWithGoogle";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {signIn, resetPassword} = useContext(AuthContext)
  const [loginError, serLoginError]= useState('')
  const [forgetEmail, setForgetEmail]= useState('')
  const [loginUserEmail, setLoginUserEmail]= useState('')
  const [token]= useToken(loginUserEmail)
  // console.log(forgetEmail);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if(token){
    navigate(from, { replace: true });

  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    serLoginError('')
    setForgetEmail(data.email)
    signIn(data.email, data.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      toast('Login Successfully.');
      console.log(user)
      setLoginUserEmail(data.email)

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      serLoginError(errorMessage)
    });
    // console.log(data);
  };

  const handleForgetEmail = ()=>{
    resetPassword(forgetEmail)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  
  }
  return (
    <div className=" flex h-[400px] justify-center items-center my-12">
      <div>
        <h2 className="text-center text-4xl font-semibold">Login </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Email Address is required",
                minLength: { value: 6, message: "Password must be 6 character or more" },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span onClick={handleForgetEmail} className="label-text-alt font-bold">Forgot password?</span>
            </label>
          </div>

          <input
            className=" btn w-full max-w-xs bg-[#3A4256]"
            value="Login"
            type="submit"
          />
        </form>
        {
          loginError && <p className="text-red-600" >
          {loginError}
        </p>
        }
        <p className=" my-3 text-center">
          New to doctors portal?{" "}
          <Link className="text-[#19D3AE]" to="/register">
            Create Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <ContinueWithGoogle></ContinueWithGoogle>
      </div>
    </div>
  );
};

export default Login;
