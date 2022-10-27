import React from "react";

import Image from "../../assets/img4.png";

const Home = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-8">
        Welcome to <strong>Ice Fire Academy</strong>.
      </h2>
      <img src={Image} alt="" />
    </div>
  );
};

export default Home;
