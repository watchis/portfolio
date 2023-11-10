import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { BackgroundColors } from "../consts/colors";

const Cogs = ({ isFast }) => {
  console.log(`sendhelp ==> cogSpeed: ${isFast}`);

  return (
    <CogsContainer>
      <SettingsIcon className={isFast ? "cog fast" : "cog"} />
      <SettingsOutlinedIcon
        className={isFast ? "cog-backwards fast" : "cog-backwards"}
      />
      <SettingsIcon className={isFast ? "cog fast" : "cog"} />
    </CogsContainer>
  );
};

export default React.memo(Cogs);

const CogsContainer = styled("div")({
  position: "relative",
  width: "100vw",
  height: "100vh",

  svg: {
    position: "absolute",
    color: BackgroundColors.Dark,
    display: "inline-flex",

    ":nth-of-type(1)": {
      fontSize: "650px",
      top: "-315px",
      left: "-184px",
      rotate: "90deg",
    },

    ":nth-of-type(2)": {
      fontSize: "650px",
      top: "135px",
      left: "75px",
    },

    ":nth-of-type(3)": {
      fontSize: "650px",
      top: "590px",
      left: "-177px",
      rotate: "28deg",
    },
  },
});
