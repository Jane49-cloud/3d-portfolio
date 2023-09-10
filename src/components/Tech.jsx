import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { IconButton } from "@mui/material";

const Tech = () => {
  return (
    <div>
      <h2 className="text-xl">Skills</h2>
      <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mb-5">
        Below are some of the technologies (programming tools), I use to
        accomplish my tasks
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <IconButton
              className="p-2 hover:animate-bounce"
              style={{ backgroundColor: "white", borderRadius: "50%" }}
            >
              <img
                src={technology.icon}
                alt=""
                className="w-[80px] h-[80px] object-contain rounded-full"
              />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
