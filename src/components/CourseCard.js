import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { _id, thumb_url, course_name, duration, technology, about } = course;
  if (about.length > 50) {
    about.slice(0, 50);
  }

  return (
    <div className="bg-[#94f4ff77] p-2 rounded-sm relative">
      <img src={thumb_url} alt="" />
      <div className="pl-2">
        <h3>{course_name}</h3>
        <p>Technology : {technology}</p>
        <p>
          <small>
            {about.length < 99 ? about : about.slice(1, 100) + "..."}
          </small>
        </p>
      </div>
      <div className="flex items-center justify-between pl-2">
        <b>Duration: {duration} hours</b>
        <button className="flex items-center ">
          <Link to={`/course_details/${_id}`}>Show More</Link>
          <BsArrowRightShort />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
