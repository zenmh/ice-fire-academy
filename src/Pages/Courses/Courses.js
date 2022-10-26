import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../../components/CourseCard";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-start-1 col-end-2 pl-8">
        <h3>Courses</h3>
        {courses.map((course) => (
          <li className="list-none" key={course._id}>
            <Link to={`/course_details/${course._id}`}>
              {course.course_name}
            </Link>
          </li>
        ))}
      </div>
      <div className="col-start-2 col-end-6">
        <h2>Explore Our Courses</h2>
        <div className="grid grid-cols-4 gap-4">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
