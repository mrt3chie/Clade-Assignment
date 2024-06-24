import React from "react";

const SubMenu = () => {
  return (
    <div className="border-t-2 border-b-2 p-4">
      <div className="space-x-[85px] mx-16 text-[#888888] font-medium">
        <a
          href=""
          className="relative text-[#DC4A2D] custom-underline font-bold"
        >
          Job Preview
        </a>
        <a href="">Applicants</a>
        <a href="">Match</a>
        <a href="">Messages</a>
      </div>
    </div>
  );
};

export default SubMenu;
