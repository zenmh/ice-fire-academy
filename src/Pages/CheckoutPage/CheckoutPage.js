import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckoutPage = () => {
  const course = useLoaderData();
  console.log(course);
  return <div>This is only for Premeum Client</div>;
};

export default CheckoutPage;
