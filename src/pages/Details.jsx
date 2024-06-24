import React from "react";
import Skills from "../sections/Skills";
import Description from "../sections/Description";
import JobHeader from "../sections/JobHeader";
import Footer from "../sections/Footer";
import SideOptions from "../sections/SideOptions";

const Details = () => {
  return (
    <div className="flex mt-7 justify-between ">
      <div className="ml-3">
        <JobHeader />
        <Skills />
        <Description />
        <Footer />
      </div>
      <div className="mx-7">
        <SideOptions />
      </div>
    </div>
  );
};

export default Details;
