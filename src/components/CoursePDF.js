import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CoursePDF = () => {
  const courseData = useLoaderData();
  const { course_name, technology, about, thumb_url } = courseData;
  const componentRef = useRef();
  const download = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="flex justify-center">
      <div className="w-4/12 border-dashed border-2 pr-3 pb-3 mt-12">
        <div ref={componentRef} className="ml-4 mt-4">
          <h3 className="text-2xl font-bold">Course Info</h3>
          <hr className="my-3" />
          <p className="font-semibold">
            <span className="font-bold text-lg">Course : </span>
            {course_name}
          </p>
          <p className="font-semibold">
            <span className="font-bold text-lg">Technology : </span>
            {technology}
          </p>
          <p className="font-semibold">
            <span className="font-bold text-lg">Thumbnail (url) : </span>
            {thumb_url}
          </p>
          <p>
            <span className="font-bold text-lg">Description : </span>
            {about}
          </p>
        </div>
        <div className="flex justify-end">
          <button
            className="px-2 py-1 bg-slate-200 hover:bg-slate-300 font-bold"
            onClick={download}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
export default CoursePDF;
