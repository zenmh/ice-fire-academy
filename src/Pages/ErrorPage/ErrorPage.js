import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="my-32 mx-3">
      <div className="md:flex justify-center">
        <h1 className="text-8xl md:text-9xl font-bold text-center">Whoops</h1>
        <div className="flex justify-center">
          <ExclamationCircleIcon className="w-40 h-40"></ExclamationCircleIcon>
        </div>
      </div>
      <h4 className="text-3xl font-bold text-center">
        404 - Your Expected Page Can't Found
      </h4>
      <p className="text-lg font-semibold text-center my-12">
        We can't find the page you are looking for. Cheak out our Help center or
        head back to home.
      </p>
      <div className="flex justify-center mt-4">
        <div className="flex md:w-96 justify-between">
          <Link
            to="/help"
            className="flex justify-center align-center bg-slate-500 hover:bg-slate-600 text-white font-bold px-3 py-1 mx-3"
          >
            Help
          </Link>
          <Link
            to="/"
            className="flex justify-center align-center bg-slate-500 hover:bg-slate-600 text-white font-bold px-3 py-1 mx-3"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
