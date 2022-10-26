import React from "react";
import { Link } from "react-router-dom";
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

        {user?.uid ? (
          <>
            <Link className="mx-2" onClick={handleLogOut}>
              Logout
            </Link>
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
          <Link className="mx-2" to="login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
