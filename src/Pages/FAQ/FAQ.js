import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FAQ = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch(" https://ice-fire-academy-server.vercel.app/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  const notify = (name) => {
    toast.info(` Thanks ${name}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div>
      <h3 className="text-3xl font-bold my-8 text-center">
        Say Thanks To Our Heros !
      </h3>
      {teachers.map((teacher) => (
        <div className="flex items-center justify-between my-4 lg:mx-96">
          <FaUserAlt className="text-3xl" />
          <h2 className="font-bold">{teacher.name}</h2>
          <button
            className="px-2 py-1 font-bold bg-slate-300 hover:bg-slate-400"
            onClick={() => notify(teacher.name)}
          >
            Say Thanks !
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
