import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbCoins } from "react-icons/tb";

const JobHeader = () => {
  return (
    <div>
      <div className="mx-16 mb-8">
        <div className="flex items-center space-x-3">
          <h2 className="text-4xl font-semibold ">Senior Product Designer</h2>
          <img src="dot_small.png" alt="dot-small.png" className="h-1" />
          <p className="text-[#888888] text-[14px] font-medium">
            posted 2 days ago
          </p>
          <span className="flex items-center text-[14px] px-2  bg-[#ecfdf3] border-2 text-green-950 border-green-600 font-medium rounded-[20px]">
            <img src="_Dot.png" alt="" className="h-2 mr-1" />
            Open
          </span>
        </div>
        <div className="flex items-center mt-6 text-[#5D5D5D] font-medium space-x-4 ">
          <div className="flex items-center">
            <HiOutlineLocationMarker className="text-xl mr-2" />
            <p className="text-xl font-medium">Delaware, USA</p>
          </div>
          <img src="dot_small.png" alt="dot-small.png" className="h-1" />
          <div className="flex items-center">
            <TbCoins className="text-xl mr-2" />
            <p className="text-xl font-medium">$300k - $400k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
