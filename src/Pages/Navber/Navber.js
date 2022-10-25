import React from "react";
import { Link } from "react-router-dom";
import "./Navber.css";
import { FaSun } from "react-icons/fa";

const Navber = () => {
  return (
    <div className="flex items-center justify-between mx-6">
      <div>
        <img src="" alt="" />
        <h3 className="text-3xl font-bold">Ice Fire Academy</h3>
      </div>
      <div className=" font-semibold">
        <Link className="mx-2" to="/">
          Home
        </Link>
        <Link className="mx-2" to="/courses">
          Courses
        </Link>
        <Link className="mx-2" to="/faq">
          FAQ
        </Link>
        <Link className="mx-2" to="blog">
          Blog
        </Link>
        <button className="mx-2">
          <FaSun />
        </button>
        <Link to="login">Login</Link>
      </div>
    </div>
  );
};

export default Navber;
