import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navber.css";
import { FaSun, FaUser } from "react-icons/fa";
import { MdModeNight } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Image from "../../assets/ice-fire.png";

const Navber = () => {
  const { user, logOut, theme, changeTheme } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="md:flex items-center justify-between md:mx-6">
      <div className="flex items-center">
        <img className="w-16 h-16" src={Image} alt="" />
        <h3 className="text-3xl font-bold pl-2">Ice Fire Academy</h3>
      </div>
      <div className=" font-semibold flex items-center">
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
        <span className="mx-2">
          {theme ? (
            <MdModeNight onClick={() => changeTheme(!theme)} />
          ) : (
            <FaSun onClick={() => changeTheme(!theme)} />
          )}
        </span>
        {user?.uid ? (
          <>
            <button
              className="mx-2 hover:text-slate-500"
              onClick={handleLogOut}
            >
              Logout
            </button>
            {user?.photoURL ? (
              <Link to="/profile">
                <img
                  className="w-8 h-8 rounded-full tooltip"
                  title={user.displayName}
                  src={user.photoURL}
                  alt=""
                />
              </Link>
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
