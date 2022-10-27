import React from "react";
import { NavLink } from "react-router-dom";
import "./Navber.css";
import { FaSun, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Image from "../../assets/ice-fire.png";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="flex items-center justify-between mx-6">
      <div className="flex items-center">
        <img className="w-16 h-16" src={Image} alt="" />
        <h3 className="text-3xl font-bold">Ice Fire Academy</h3>
      </div>
      <div className=" font-semibold flex">
        <NavLink
          className={`mx-2 hover:text-slate-500 ${({ isActive }) =>
            isActive ? "active" : undefined}`}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink className="mx-2 hover:text-slate-500" to="/courses">
          Courses
        </NavLink>
        <NavLink className="mx-2 hover:text-slate-500" to="/faq">
          FAQ
        </NavLink>
        <NavLink className="mx-2 hover:text-slate-500" to="blog">
          Blog
        </NavLink>
        <button className="mx-2 hover:text-slate-500">
          <FaSun />
        </button>

        {user?.uid ? (
          <>
            <button
              className="mx-2 hover:text-slate-500"
              onClick={handleLogOut}
            >
              Logout
            </button>
            {user?.photoURL ? (
              <img
                title={user.displayName}
                className="w-8 h-8 rounded-full tooltip"
                src={user.photoURL}
                alt=""
              />
            ) : (
              <FaUser />
            )}
          </>
        ) : (
          <NavLink className="mx-2 hover:text-slate-500" to="login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navber;
