import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const { signUpUser, signWithGoogle, updateUser, setReload } =
    use(AuthContext);
  const [errormessage, setErrormessage] = useState("");
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, photoURL, name, ...restFormData } =
      Object.fromEntries(formData.entries());
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passLowerChar = /^(?=.*[a-z])/;
    const passUpperChar = /^(?=.*[A-Z])/;
    const passMinMax = /^(?=.{6,})/;

    if (!email) {
      setErrormessage("Please enter your email address.");
    } else if (!emailRegex.test(email)) {
      setErrormessage("Please enter a valid email address.");
    } else if (!password) {
      setErrormessage("Please enter your password.");
    } else if (!passUpperChar.test(password)) {
      setErrormessage("Password must include at least one uppercase letter.");
    } else if (!passLowerChar.test(password)) {
      setErrormessage("Password must include at least one lowercase letter.");
    } else if (!passMinMax.test(password)) {
      setErrormessage("Password must be at least 6 characters long.");
    } else {
      setErrormessage("");
      signUpUser(email, password)
        .then((result) => {
          navigate(location?.state || "/");
          const prfiole = {
            displayName: name,
            photoURL: photoURL,
          };
          return updateUser(prfiole)
            .then(() => {
              setReload(Date.now());
              const userProfile = {
                email,
                photoURL,
                name,
                ...restFormData,
                creationTime: result.user?.metadata?.creationTime,
                lastSignInTime: result.user?.metadata?.lastSignInTime,
              };
              fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(userProfile),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    toast.success("Sign In SuccessFull", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                  }
                });
            })
            .catch((error) => {
              toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  const handleGoogleLogin = () => {
    signWithGoogle()
      .then((result) => {
        navigate(location?.state || "/");
        toast.success("Google Sign In SuccessFull", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="xl:w-5/12 mx-4 lg:w-7/12 mt-52 md:w-10/12 md:mx-auto bg-red-500 backdrop-blur-[5px] border  border-white/30 rounded-2xl lg:py-[88px] py-8 lg:px-[73px] px-8">
      {/* <Helmet><title>SignUp</title></Helmet> */}
      <h2 className="font-semibold lg:text-4xl pb-[50px] text-2xl border-b border-b-white/30 text-center">
        Register your account
      </h2>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col space-y-3.5 mt-[50px]"
      >
        <label className="font-semibold text-xl" htmlFor="">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          className="p-5  rounded-md text-base border  border-white/30 focus-within:outline-0 "
          placeholder="Enter your name"
        />
        <label htmlFor="">Photo URL</label>
        <input
          type="text"
          name="photoURL"
          className="p-5  rounded-md text-base border  border-white/30 focus-within:outline-0 "
          placeholder="Enter your PhotoURL"
        />
        <label htmlFor="">Email</label>
        <input
          type=""
          name="email"
          className="p-5  rounded-md text-base border  border-white/30 focus-within:outline-0 "
          placeholder="Enter your email address"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          className="p-5  rounded-md text-base border  border-white/30 focus-within:outline-0 "
          placeholder="Enter your password"
        />
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="w-[25px] h-[20px]" name="" id="" />
          <label className="font-semibold text-sm">
            Accept Term & Conditions
          </label>
        </div>
        {errormessage && (
          <p className="text-red-500 text-xl font-bold bg-white/80 rounded-2xl py-1 text-center px-4 capitalize ">
            {errormessage}
          </p>
        )}
        <button
          className="cursor-pointer text-base font-semibold py-4 px-4 bg-black/20 rounded-xl border w-full border-white/50"
          type="submit"
        >
          Register
        </button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="cursor-pointer flex items-center justify-center gap-x-2 mt-4 text-base font-semibold py-3 px-4 bg-black/20 rounded-xl border w-full border-white/50"
      >
        <FcGoogle size={32} />
        Google Login
      </button>
      <p className="text-base mt-5">
        Already have an account? please{" "}
        <Link to="/signin" className="text-yellow-500 pl-2 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
