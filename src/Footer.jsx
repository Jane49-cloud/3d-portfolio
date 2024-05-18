import React from "react";
import { Phone } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const Footer = () => {
  return (
    <footer className="bg-tertiary p-4">
      <div className="flex items-center justify-center mb-4">
        <IconButton
          className="bg-pink-500 text-white rounded-full p-2"
          style={{ backgroundColor: "white" }}
        >
          <Phone />
        </IconButton>
        <a href="tel:+254791055992" className="ml-2 text-lg text-gray-500">
          +254791055992
        </a>
      </div>
      <div className="text-center text-gray-500">
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};
