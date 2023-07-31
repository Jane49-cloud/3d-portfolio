import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { IconButton } from "@mui/material";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <IconButton
            className="p-2"
            style={{ backgroundColor: "white", borderRadius: "50%" }}
          >
            <img
              src={technology.icon}
              alt=""
              className="w-28 h-28 object-contain rounded-full"
            />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
