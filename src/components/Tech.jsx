import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { IconButton } from "@mui/material";

const Tech = () => {
  return (
    <div>
      <h2 className="text-xl">Skills</h2>
      <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mb-5">
        In the pursuit of accomplishing my tasks, I leverage a diverse set of
        cutting-edge technologies and programming tools. These tools not only
        enhance the efficiency and effectiveness of my work but also contribute
        to the seamless execution of complex projects. The amalgamation of these
        technologies empowers me to navigate through challenges and deliver
        high-quality solutions. Some of the key technologies I proficiently
        employ include, but are not limited to:
      </p>
      <div className="flex flex-wrap justify-center lg:justify-start -mx-2">
        {technologies.map((technology) => (
          <div
            className="w-[43vw] md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"
            key={technology.name}
          >
            <div
              className="p-5  scale-95 bg-black-100 w-full  hover:bg-tertiary"
              style={{ backgroundColor: "", borderRadius: "8px" }}
            >
              <img
                src={technology.icon}
                alt=""
                className="w-[80px] h-[80px] object-contain rounded-full mx-auto mb-4"
              />
              <p className="text-center">{technology.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
