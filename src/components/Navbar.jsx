import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { PiHandCoins } from "react-icons/pi";
import { BiBell } from "react-icons/bi";
import { IoChevronDownOutline } from "react-icons/io5";

const Navbar = () => {
  const navOptions = [
    {
      id: 1,
      title: "Jobs",
      icon: <FiBriefcase />,
    },
    {
      id: 2,
      title: "Messages",
      icon: <FiMessageSquare />,
    },
    {
      id: 3,
      title: "Payments",
      icon: <PiHandCoins />,
    },
  ];

  return (
    <div className="flex justify-between items-center mx-8 my-5">
      <div>
        <span className="px-5  py-4 bg-[#E7E7E7] text-[#DC4A2D] font-bold">
          Logo
        </span>
      </div>
      <div className="border rounded-[35px] p-4 cursor-pointer">
        <ul className="flex space-x-16 text-[#B0B0B0]">
          {navOptions.map((item) => (
            <li className="flex items-center" key={item.id}>
              <span className="mr-2 text-xl">{item.icon}</span> {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-3 items-center">
        <BiBell className="text-[26px]" />
        <div className="flex items-center space-x-2">
          <img src="./user.png" alt="user.png" className="h-8" />
          <IoChevronDownOutline className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
