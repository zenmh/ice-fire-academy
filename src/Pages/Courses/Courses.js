import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
const Courses = () => {
  const courses = useLoaderData();

  return (
    <>
      <div className="md:grid grid-cols-5 gap-4">
        <div className="col-start-1 col-end-2 pl-8 hidden lg:block">
          <h3 className="font-bold text-2xl">Courses</h3>
          {courses.map((course) => (
            <Link
              className="list-none block font-semibold my-2 hover:text-slate-400"
              key={course._id}
              to={`/course_details/${course._id}`}
            >
              {course.course_name}
            </Link>
          ))}
        </div>
        <div className="col-start-2 col-end-6">
          <h2 className="font-bold md:text-2xl mb-4">Explore Our Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
