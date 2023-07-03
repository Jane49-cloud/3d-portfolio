import React from "react";
import RobotImage from "../assets/robot.png";
import compSite from "../assets/compsight.png";

const Robot = () => {
  return (
    <div className="flex">
      <div>
        <img
          src={RobotImage}
          alt="robot"
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
        />
        <p>Business Automation</p>
      </div>

      <div>
        <img
          src={compSite}
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"
          alt=""
        />
        <p>Compelling web Designs</p>
      </div>
    </div>
  );
};

export default Robot;
