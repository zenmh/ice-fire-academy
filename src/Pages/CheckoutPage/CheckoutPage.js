import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckoutPage = () => {
  const course = useLoaderData();
  const { thumb_url, course_name, about, duration, technology } = course;
  const { user } = useContext(AuthContext);
  console.log(course);
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center my-8">
        <span className="font-bold"> Mr. {user.displayName}</span> welcome to
        premium zone.
      </h3>
      <div className="mx-32 ">
        <div className="grid grid-cols-2">
          <img src={thumb_url} alt="" />
          <div className="font-semibold ml-4">
            <p>
              <span className="font-bold">Course :</span> {course_name}
            </p>
            <p>
              <span className="font-bold">Field : </span>
              {technology}
            </p>
            <p>
              <span className="font-bold">Video Duration :</span> {duration}{" "}
              hours
            </p>
          </div>
        </div>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default CheckoutPage;
