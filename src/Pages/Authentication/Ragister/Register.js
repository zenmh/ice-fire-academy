import React from "react";
import "./Register.css";
import Image from "../../../assets/login.webp";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { createUser, updateUserInfo, continueWithProvider } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo_url = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        updateUserProfile(name, photo_url);
        form.reset();
      })
      .catch((err) => console.error("Error", err));
  };

  const updateUserProfile = (name, photoURL) => {
    updateUserInfo({ displayName: name, photoURL: photoURL })
      .then(() => {})
      .catch((err) => console.error("Error", err));
  };

  const handleGoogleSignIn = () => {
    continueWithProvider(googleProvider)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => console.error("Error", err));
  };

  const handleGithubSingIn = () => {
    continueWithProvider(githubProvider)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => console.error("Error", err));
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={Image} alt="" />
      </div>
      <div className="flex justify-center">
        <div>
          <div className="mb-20">
            <h3 className="text-2xl font-bold">Create account</h3>
            <p>Get access to exclusive features by creating an account</p>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between mb-4">
                <strong>Full Name</strong>
                <input
                  placeholder="Your name"
                  className="border-2 px-2 border-red-700"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="flex justify-between mb-4">
                <strong>Image URL</strong>
                <input
                  placeholder="Drop image url"
                  className="border-2 px-2 border-red-700"
                  type="text"
                  name="photo_url"
                />
              </div>
              <div className="flex justify-between mb-4">
                <strong>E-mail</strong>
                <input
                  placeholder="Enter email"
                  className="border-2 px-2 border-red-700"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="flex justify-between mb-4">
                <strong>Password</strong>
                <input
                  placeholder="Your password"
                  className="border-2 px-2 border-red-700"
                  type="password"
                  name="password"
                  required
                />
              </div>

              <hr className="my-4" />
              <div className="flex justify-between">
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="font-semibold text-[#5e1660]">
                    Login
                  </Link>
                </p>
                <button
                  className="bg-[#5e1660] px-3 py-1 text-white rounded-sm"
                  type="submit"
                >
                  Enroll Now
                </button>
              </div>
            </form>

            <p className="text-center font-serif my-4">or</p>

            <div className="flex justify-center">
              <button
                onClick={handleGoogleSignIn}
                className="flex justify-center items-center border-2 border-sky-200 my-2 rounded-2xl pl-2"
              >
                <FcGoogle />
                <span className="mx-2 font-semibold">Continue with Google</span>
              </button>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleGithubSingIn}
                className="flex justify-center items-center border-2 border-sky-200 my-2 rounded-2xl pl-2"
              >
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

export default Register;
