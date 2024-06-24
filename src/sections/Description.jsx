import React from "react";

const Description = () => {
  return (
    <div>
      <div className="mx-16 mt-8 space-y-2 border-t-2">
        <p className="text-[#6E6D6D] font-medium mt-8">About the Job</p>
        <ul className="list-inside space-y-1">
          <li>1. Handle the UI/UX research design</li>
          <li>
            2. Work on researching the latest web applications designs & trends
          </li>
          <li>3. Work on conceptualizing and visualizing</li>
          <li>
            4. Work on creating graphics content and other graphic-related works
          </li>
        </ul>
        <p className="">Benefits:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <p className="">Schedule:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Day shift</li>
        </ul>
        <p className="">Supplemental pay types:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        <p className="">Work Location: In person</p>
      </div>
    </div>
  );
};

export default Description;
