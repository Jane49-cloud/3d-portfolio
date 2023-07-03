import React from "react";
import {
  EmailRounded,
  FacebookRounded,
  GitHub,
  Phone,
  Timeline,
  WhatsApp,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Footer = () => {
  return (
    <header>
      <div className="phone">
        <h3>
          <IconButton
            className="btn"
            style={{
              color: "#fec5e67",
              borderRadius: "20%",
              background: "#E8F6FB",
            }}
          >
            <Phone />
          </IconButton>
          <a href="tel: +254791055992">+254791055992</a>
        </h3>
      </div>
      <div className="contacts">
        <IconButton
          onClick={() =>
            window.open("https://wakatime.com/@JaneNdirangu", "_blank")
          }
          className="btn"
          style={{
            color: "#fec5e67",
            borderRadius: "20%",
            background: "#E8F6FB",
          }}
        >
          <a href=""></a>w
        </IconButton>

        <IconButton
          onClick={() =>
            window.open(
              "https://web.facebook.com/profile.php?id=100010907769781",
              "_blank"
            )
          }
          className="btn"
          style={{
            color: "#fec5e67",
            borderRadius: "20%",
            background: "#E8F6FB",
          }}
        >
          <FacebookRounded style={{ color: "blue" }} />
        </IconButton>
        <IconButton
          onClick={() => window.open("https://wa.me/+25491055992/?", "_blank")}
          className="btn"
          style={{
            color: "#fec5e67",
            borderRadius: "20%",
            background: "#E8F6FB",
          }}
        >
          <WhatsApp style={{ color: "green" }} />
        </IconButton>
      </div>
    </header>
  );
};
