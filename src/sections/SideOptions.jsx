import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineEdit } from "react-icons/md";
import { TbUsers } from "react-icons/tb";
import { TbUserCheck } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

const SideOptions = () => {
  const data = [
    {
      id: 1,
      title: "Applicants",
      value: 400,
      icon: <TbUsers />,
    },
    {
      id: 2,
      title: "Matches",
      value: 100,
      icon: <TbUserCheck />,
    },
    {
      id: 3,
      title: "Messages",
      value: 150,
      icon: <FiMessageSquare />,
    },
    {
      id: 4,
      title: "Views",
      value: 800,
      icon: <IoEyeOutline />,
    },
  ];
  return (
    <div>
      <div className="flex space-x-3">
        <button
          type="button"
          className="flex items-center text-[#DC4A2D] font-medium bg-[#FEF4F2] px-8 py-3 border border-[#DC4A2D] rounded-[8px]"
        >
          {" "}
          <HiOutlineTrash className="mr-2" />
          Delete Job
        </button>
        <button
          type="button"
          className="flex items-center text-white font-medium bg-[#DC4A2D] px-7 py-3 border-2 border-[#FED3CA] rounded-[8px]"
        >
          {" "}
          <MdOutlineEdit className="mr-2" />
          Edit Job
        </button>
      </div>
      <div className="mx-5 mt-7">
        {data.map((item) => (
          <div key={item.id} className="mb-5">
            <div className="flex justify-between border-b-2 border-spacing-3">
              <div className="flex items-center">
                <span className="mr-3 ">{item.icon}</span>
                <h1 className="text-[#4F4F4F] font-medium">{item.title}</h1>
              </div>
              <h1 className="text-[#4F4F4F] font-bold text-xl ">
                {item.value}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideOptions;
