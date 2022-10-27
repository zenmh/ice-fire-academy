import React from "react";
import "./Footer.css";
import { BsYoutube, BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { useState } from "react";
import { useEffect } from "react";
import { RiCopyrightFill } from "react-icons/ri";

const Footer = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch(" https://ice-fire-academy-server.vercel.app/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div className="border-2 p-6 bg-black text-white mt-16">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl font-bold mb-3">Describe In Two Line</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            itaque quae vero aspernatur, esse atium voluptatum animi c
          </p>
          <div className="flex items-center mt-4">
            <a
              className="mr-3 text-2xl hover:text-purple-600"
              href="https://www.facebook.com/"
            >
              <GrFacebook />
            </a>
            <a
              className="mx-3 text-2xl hover:text-purple-600"
              href="https://www.instagram.com/"
            >
              <AiFillInstagram />
            </a>
            <a
              className="mx-3 text-2xl hover:text-purple-600"
              href="https://twitter.com/"
            >
              <AiOutlineTwitter />
            </a>
            <a
              className="mx-3 text-2xl hover:text-purple-600"
              href="https://www.youtube.com/"
            >
              <BsYoutube />
            </a>
            <a
              className="mx-3 text-2xl hover:text-purple-600"
              href="https://www.whatsapp.com/"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              className="ml-3 text-2xl hover:text-purple-600"
              href="https://bd.linkedin.com/"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="md:flex justify-around">
          <div>
            <h3 className="text-xl font-bold">Our Heros</h3>
            {teachers.map((teacher) => (
              <li key={teacher._id}>{teacher?.name}</li>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold">Sponsors</h3>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Stay On Tuch</h3>
          <input
            className="border-2 w-full mb-4 border-none px-2 py-1"
            type="email"
            name="email"
            placeholder="Enter email "
          />
          <div className="flex justify-end">
            <button className="font-bold px-2 py-1 bg-white hover:bg-slate-200 text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <p className="flex justify-center">
        <small className="flex items-center">
          <RiCopyrightFill className="mr-2" />
          all rights reserved
        </small>
      </p>
    </div>
  );
};

export default Footer;
