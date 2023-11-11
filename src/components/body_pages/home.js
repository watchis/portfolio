import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { BackgroundColors, ThemeColors } from "../../consts/colors";

const Home = () => {
  return (
    <HomeContainer>
      <HomeText>
        Hello, <span style={{ color: ThemeColors.Orange }}>Warren</span> here!
      </HomeText>
      <HomeText>
        and I'm a{" "}
        <span
          style={{
            fontFamily: "Source Code Pro Variable",
            color: ThemeColors.Red,
          }}
        >
          {"<"}
          <span style={{ color: ThemeColors.PaleYellow }}>
            Software Engineer
          </span>
          {"/>"}
        </span>
      </HomeText>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",

  height: "inherit",
});

const HomeText = styled("p")({
  display: "block",
  position: "relative",
  zIndex: 1,

  textShadow: `0px 4px 4px ${BackgroundColors.Dark}`,

  color: ThemeColors.Default,
  userSelect: "none",
  fontFamily: "'Lexend Variable', sans-serif",
  fontSize: "64px",

  margin: "0 64px 16px 0",
});
