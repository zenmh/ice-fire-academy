import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
