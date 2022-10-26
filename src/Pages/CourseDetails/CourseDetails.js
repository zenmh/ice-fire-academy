import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { IoDiamondSharp } from "react-icons/io5";
import { GrDocumentPdf } from "react-icons/gr";

const CourseDetails = () => {
  const course = useLoaderData();
  const { _id, thumb_url, course_name, technology, about, duration } = course;
  console.log(course);
  return (
    <div className="mx-80 border-dashed border-4 mt-8 p-3">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">{course_name}</h3>
        <button className="border-2 flex items-center px-2 py-1">
          <p className="mr-2">Download</p>
          <GrDocumentPdf />
        </button>
      </div>
      <hr className="my-3" />
      <div>
        <img src={thumb_url} alt="" />
        <p className="font-semibold mt-4">
          <span className="font-bold">Field :</span> {technology}
        </p>
        <p className="font-semibold">
          <span className="font-bold">Course duration :</span>{" "}
          <span className="text-indigo-500">{duration}</span> hours
        </p>
        <p>
          <span className="font-bold">Description :</span> {about}
        </p>
        <div className="flex justify-end">
          <Link
            to={`/premium/${_id}`}
            className="flex items-center px-2 py-1 mt-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-sm"
          >
            <IoDiamondSharp />
            <p className="font-bold ml-2">Get Premium Access</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
