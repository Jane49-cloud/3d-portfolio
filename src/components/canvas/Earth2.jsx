import React from "react";

import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { contacts } from "../../constants";
import { IconButton } from "@mui/material";

const Earth2 = () => {
  return (
    <div className="flex flex-row justify-center">
      {contacts.map((contact) => (
        <div className="" key={contact.name}>
          <IconButton className="icon-btn">
            <img src={contact.icon} alt="" className="pic pic2" />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Earth2, "");
