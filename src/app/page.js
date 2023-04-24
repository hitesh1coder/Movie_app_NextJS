import React from "react";
import HeroSection from "./component/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection
        title={"LET`S WATCH MOVIE TOGETHER"}
        imageUrl={"/home.svg"}
      />
    </div>
  );
};

export default Home;
