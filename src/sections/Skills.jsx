import React from "react";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Figma",
      icon: "/figma.png",
    },
    {
      id: 2,
      title: "Adobe Illustrator",
      icon: "/ai.png",
    },
    {
      id: 3,
      title: "Adobe XD",
      icon: "/xd.png",
    },
  ];
  return (
    <div>
      <div className="flex mx-16 border-t-2 justify-between space-x-20">
        <div className="mt-8 space-y-2">
          <p className="text-[16px] font-medium text-[#6E6D6D]">
            Skills Required
          </p>
          {skills.map((item) => (
            <div className=" p-2 " key={item.title}>
              <div className="flex items-center space-x-2">
                <img src={item.icon} className="h-5 w-5" alt={item.title} />
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-[16px] font-medium text-[#6E6D6D]">
            Preferred Language
          </p>
          <p className="font-semibold">English</p>
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-[16px] font-medium text-[#6E6D6D]">Type</p>
          <p className="font-semibold">Full time</p>
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-[16px] font-medium text-[#6E6D6D]">
            Years of Experience
          </p>
          <p className="font-semibold">3+ Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
