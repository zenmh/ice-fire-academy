import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { MdEdit } from "react-icons/md";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="border-2 mx-96 p-3">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">My Profile</h3>
        <button className="flex items-center border-2 px-2 py-1 rounded-sm">
          <MdEdit />
          <b className="ml-2">Edit</b>
        </button>
      </div>
      <hr className="my-4" />
      <form>
        <img src={user.photoURL} alt="" />
        <div className="flex items-center justify-between my-4">
          <h3 className="font-bold">Name </h3>
          <input
            className="w-9/12 px-2 py-1"
            type="text"
            name="name"
            defaultValue={user.displayName}
          />
        </div>
        <div className="flex items-center justify-between my-4">
          <h3 className="font-bold">E-mail </h3>
          <input
            className="w-9/12 px-2 py-1"
            type="email"
            name="email"
            defaultValue={user.email}
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
