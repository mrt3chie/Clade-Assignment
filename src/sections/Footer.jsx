import React from "react";

const Footer = () => {
  return (
    <div className="mx-16 mt-8 border-t-2">
      <div className="flex items-center space-x-3 mt-8">
        <img src="atlassian.png" alt="" className="h-9" />
        <p className="font-medium">Atlassian</p>
      </div>
      <div className="flex space-x-20">
        <div className=" mt-4 mb-16">
          <p className="text-[#6E6D6D]">Company Size</p>
          <p className="font-medium mt-2">1k - 2k Employees</p>
          <p className="text-[#6E6D6D] mt-5">Sector</p>
          <p className="font-medium mt-2">
            Information Technology, Infrastructure
          </p>
          <p className="text-[#6E6D6D] mt-5">Founded In</p>
          <p className="font-medium mt-2">2019</p>
        </div>
        <div className=" mt-4 mb-16">
          <p className="text-[#6E6D6D]">Type</p>
          <p className="font-medium mt-2">Private</p>
          <p className="text-[#6E6D6D] mt-5">Funding</p>
          <p className="font-medium mt-2">Bootstrapped</p>
          <p className="text-[#6E6D6D] mt-5">Founded By</p>
          <p className="font-medium mt-2">
            Scott Farquhar, Mike Cannon-Brookes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
