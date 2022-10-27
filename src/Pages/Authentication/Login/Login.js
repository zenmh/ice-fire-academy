import React from "react";
import "./Login.css";
import Image from "../../../assets/login.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const { logIn, setLoading, continueWithProvider } = useContext(AuthContext);
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigate(from, { replace: true });
        console.log(user);
        form.reset();
      })
      .catch((err) => {
        console.error("Error", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  const continueGoogleSignIn = () => {
    continueWithProvider(googleProvider)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error("Error", err));
  };

  const continueGithubSignIn = () => {
    continueWithProvider(githubProvider)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error("Error", err));
  };

  return (
    <div className="md:grid grid-cols-2">
      <div>
        <img src={Image} alt="" />
      </div>
      <div className="flex justify-center mx-2 lg:w-8/12">
        <div>
          <div className="mb-20">
            <h3 className="text-2xl font-bold">Log In</h3>
            <p>
              Welcome to <strong>Ice Fire Family,</strong> please put your login
              credentials below to start exploring
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between mb-4">
                <strong>E-mail</strong>
                <input
                  placeholder="Enter email"
                  className="border-2 lg:w-9/12 px-2 border-sky-200"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="flex justify-between mb-4">
                <strong>Password</strong>
                <input
                  placeholder="Your password"
                  className="border-2 lg:w-9/12 px-2 border-sky-200"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-red-600">{error}</p>
                <p className="font-semibold">Forgot password?</p>
              </div>
              <hr className="mb-4 m-1" />
              <div className="flex justify-between">
                <p>
                  Don't have an account ?{" "}
                  <Link
                    to="/register"
                    className="font-semibold  hover:text-sky-400"
                  >
                    Register now
                  </Link>
                </p>
                <button
                  className="bg-[#5e1660] px-3 py-1 text-white rounded-sm"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-center font-serif my-4">or</p>

            <div onClick={continueGoogleSignIn} className="flex justify-center">
              <button className="flex justify-center items-center border-2 border-sky-200 my-2 rounded-2xl pl-2">
                <FcGoogle />
                <span className="mx-2 font-semibold">Continue with Google</span>
              </button>
            </div>
            <div onClick={continueGithubSignIn} className="flex justify-center">
              <button className="flex justify-center items-center border-2 border-sky-200 my-2 rounded-2xl pl-2">
                <SiGithub />
                <span className="mx-2 font-semibold">Continue with Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
