import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";
import Swal from 'sweetalert2'

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
                    Swal.fire({
  title: "Sign In SuccessFull",
  text: "You clicked the button!",
  icon: "success"
});
                  }
                });
            })
            .catch((error) => {
              Swal.fire({
  icon: 'error',
  title: "Oops...",
  text: ((error.message)),
  footer: '<a href="#">Why do I have this issue?</a>'
});
            });
        })
        .catch((error) => {
          Swal.fire({
  icon: 'error',
  title: "Oops...",
  text: ((error.message)),
  footer: '<a href="#">Why do I have this issue?</a>'
});
        });
    }
  };

  const handleGoogleLogin = () => {
    signWithGoogle()
      .then((result) => {


        const userProfile = {
          email:result.user?.email,
            photoURL: result?.user.photoURL,
            name: result.user?.displayName,
             creationTime: result.user?.metadata?.creationTime,
                lastSignInTime: result.user?.metadata?.lastSignInTime,
        }

        fetch("https://garden-server-beige.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(userProfile),
              })
                .then((res) => res.json())
                .then((data)=>{
                  if (data.insertedId) {
                    navigate(location?.state || "/");
                    Swal.fire({
  title: "Google Sign In SuccessFull",
  text: "You clicked the button!",
  icon: "success"
});
                    
                  }
                })

      })
      .catch((error) => {
        Swal.fire({
  icon: 'error',
  title: "Oops...",
  text: ((error.message)),
  footer: '<a href="#">Why do I have this issue?</a>'
});
      });
  };

  return (
    <div className="xl:w-5/12 bg-green text-white mx-4 lg:w-7/12 mt-10 md:w-10/12 md:mx-auto  backdrop-blur-[5px] border-2  border-white rounded-2xl lg:py-[88px] py-8 lg:px-[73px] px-8">
      {/* <Helmet><title>SignUp</title></Helmet> */}
      <h2 className="font-semibold lg:text-4xl pb-[50px] text-2xl border-b border-b-white text-center">
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
          className="p-5  rounded-md placeholder:text-white placeholder:text-lg text-lg  border-2  border-white focus-within:outline-0 "
          placeholder="Enter your name"
        />
        <label className="font-semibold text-xl" htmlFor="">Photo URL</label>
        <input
          type="text"
          name="photoURL"
          className="p-5  rounded-md placeholder:text-white placeholder:text-lg text-lg  border-2  border-white focus-within:outline-0 "
          placeholder="Enter your PhotoURL"
        />
        <label className="font-semibold text-xl" htmlFor="">Email</label>
        <input
          type=""
          name="email"
          className="p-5  rounded-md placeholder:text-white placeholder:text-lg text-lg  border-2  border-white focus-within:outline-0 "
          placeholder="Enter your email address"
        />
        <label className="font-semibold text-xl" htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          className="p-5 rounded-md placeholder:text-white placeholder:text-lg text-lg  border-2  border-white focus-within:outline-0 "
          placeholder="Enter your password"
        />
        <div className="flex items-center gap-x-2">
          <input type="checkbox" className="w-[25px] h-[20px]" name="" id="" />
          <label className="font-semibold text-xl">
            Accept Term & Conditions
          </label>
        </div>
        {errormessage && (
          <p className="text-red-500 text-xl font-bold bg-white/80 rounded-2xl py-1 text-center px-4 capitalize ">
            {errormessage}
          </p>
        )}
        <button
          className="cursor-pointer text-xl font-semibold py-4 px-4 bg-black/20 rounded-xl border-2 w-full border-white"
          type="submit"
        >
          Register
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
        Already have an account? please{" "}
        <Link to="/signin" className="text-yellow-500 pl-2 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
