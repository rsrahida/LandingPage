import React from "react";
import "./Home.css";
import HomePage1 from "../../components/HomePage1/HomePage1";
import HomePage2 from "../../components/HomePage2/HomePage2";
import HomePage3 from "../../components/HomePage3/HomePage3";
import HomePage4 from "../../components/HomePage4/HomePage4";

const Home = ({ features }) => {
  return (
    <div>
      <HomePage1 />
      <HomePage2 />
      <HomePage3 features={features} />
      <HomePage4 />
    </div>
  );
};

export default Home;
