import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser, signWithGoogle, forgetPassword } = use(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const location = useLocation();
  const [errormessage, setErrormessage] = useState("");
  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passLowerChar = /^(?=.*[a-z])/;
    const passUpperChar = /^(?=.*[A-Z])/;
    const passOneNumber = /^(?=.*[0-9])/;
    const passOneSpecil = /^(?=.*[!@#$%^&*])/;
    const passMinMax = /^(?=.{8,})/;

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
    } else if (!passOneNumber.test(password)) {
      setErrormessage("Password must include at least one number.");
    } else if (!passOneSpecil.test(password)) {
      setErrormessage("Password must include at least one special character.");
    } else if (!passMinMax.test(password)) {
      setErrormessage("Password must be at least 8 characters long.");
    } else {
      setErrormessage("");
      signInUser(email, password)
        .then((result) => {
          navigate(location?.state || "/");
          Swal.fire({
            title: "Sign In SuccessFull",
            text: "You clicked the button!",
            icon: "success",
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        });
    }
  };
  const handleGoogleLogin = () => {
    signWithGoogle()
      .then((result) => {
        const userProfile = {
          email: result.user?.email,
          photoURL: result?.user.photoURL,
          name: result.user?.displayName,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch("https://garden-server-beige.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              navigate(location?.state || "/");
              Swal.fire({
                title: "Google Sign In SuccessFull",
                text: "You clicked the button!",
                icon: "success",
              });
            }
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const hanldePasswordReset = () => {
    const email = emailRef.current.value;
    forgetPassword(email)
      .then((restul) => {
        Swal.fire({
          title: "chack your emali",
          text: "You clicked the button!",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="xl:w-5/12 bg-black/20 text-white mx-4 lg:w-7/12 mt-10 md:w-10/12 md:mx-auto  backdrop-blur-[5px] border-2  border-white rounded-2xl lg:py-[88px] py-8 lg:px-[73px] px-8">
      <Helmet>
        <title>SignIn</title>
      </Helmet>
      <h2 className="font-semibold lg:text-4xl pb-[50px] text-2xl  border-b-2 border-white text-center">
        Register your account
      </h2>
      <form
        onSubmit={handleSignin}
        className="flex flex-col space-y-3.5 mt-[50px]"
      >
        <label className="font-semibold text-xl" htmlFor="">
          Email
        </label>
        <input
          type=""
          name="email"
          ref={emailRef}
          className="p-5  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
          placeholder="Enter your email address"
        />
        <label className="font-semibold text-xl" htmlFor="">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="p-5  rounded-md text-lg placeholder:text-white placeholder:text-lg border-2 border-white focus-within:outline-0 "
          placeholder="Enter your password"
        />
        <p
          onClick={hanldePasswordReset}
          className="underline cursor-pointer text-yellow-500 text-lg"
        >
          Forget Password
        </p>
        {errormessage && (
          <p className="text-red-500 text-xl font-bold bg-white/80 rounded-2xl py-1 text-center px-4 capitalize ">
            {errormessage}
          </p>
        )}
        <button
          className="cursor-pointer text-xl font-semibold py-4 px-4 bg-black/20 rounded-xl border-2 border-white"
          type="submit"
        >
          Login
        </button>
      </form>
      <button
        onClick={handleGoogleLogin}
        className="cursor-pointer flex items-center justify-center gap-x-2 mt-4 text-xl font-semibold py-3 px-4 bg-black/20 rounded-xl border-2 w-full border-white"
      >
        <FcGoogle size={32} />
        Google Login
      </button>
      <p className="text-xl mt-5">
        You have no account? please{" "}
        <Link to="/signup" className="text-yellow-500 pl-2 underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
