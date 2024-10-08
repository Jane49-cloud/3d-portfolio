import { GitHub, LinkedIn, LogoDev } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import logo from "./logo.png";
import React from "react";

const Socials = () => {
  return (
    <div className="section">
      socials
      <div className="profile md:w-full">
        <div className="img">
          <img src={logo} alt="" className="person-img" />
        </div>
        <div className="personalinfo">
          <IconButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ndirangu-jane-692477256/",
                "_blank"
              )
            }
            className="btn"
            style={{
              padding: "3vh",
              color: "#fec5e67",
              borderRadius: "50%",
              background: "#E8F6FB",
            }}
          >
            <LinkedIn style={{ color: "blue" }} />
          </IconButton>
          <IconButton
            onClick={() => window.open("https://dev.to/jane49cloud", "_blank")}
            className="btn"
            style={{
              padding: "3vh",
              color: "#fec5e67",
              borderRadius: "50%",
              background: "#E8F6FB",
            }}
          >
            <LogoDev style={{ color: "black" }} />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open("https://github.com/Jane49-cloud", "_blank")
            }
            className="btn"
            style={{
              padding: "3vh",
              color: "#fec5e67",
              borderRadius: "50%",
              background: "#E8F6FB",
            }}
          >
            <GitHub style={{ color: "black" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Socials;
