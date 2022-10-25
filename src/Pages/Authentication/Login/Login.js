import React from "react";
import "./Login.css";
import Image from "../../../assets/login.webp";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <img src={Image} alt="" />
      </div>
      <div>
        <h3 className="text-2xl font-bold">Log In</h3>
        <p>
          Welcome to <strong>Ice Fire Family,</strong> please put your login
          credentials below to start exploring
        </p>
        <div>
          <div className="flex justify-between">
            <strong>E-mail</strong>
            <input className="border-2 border-red-700" type="email" />
          </div>
          <div className="flex justify-between">
            <strong>Password</strong>
            <input className="border-2 border-red-700" type="password" />
          </div>
          <p>Forgot password?</p>
          <hr />
          <p>
            Don't have account ? <Link>Register now</Link>
          </p>
          <button className="bg-purple-500">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
