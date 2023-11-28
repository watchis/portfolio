import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

import { BackgroundColors, ThemeColors } from "../../consts/colors";

const Home = (_, ref) => {
  return (
    <>
      <HomeContainer
        sx={{
          display: { xs: "none", sm: "flex" },
          paddingRight: "64px",
          height: "inherit",
          alignItems: "flex-end",
          marginTop: "-64px",
        }}
      >
        <HomeText>
          Hello, <span style={{ color: ThemeColors.Orange }}>Warren</span> here!
        </HomeText>
        <HomeText
          sx={{
            fontSize: { xs: "36px", sm: "64px" },
          }}
        >
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
      <HomeContainer
        ref={ref}
        sx={{
          display: { xs: "flex", sm: "none" },
          height: "100vh",
          alignItems: "center",
          marginTop: "-80px",
        }}
      >
        <HomeText style={{ fontSize: "40px" }}>Hello,</HomeText>
        <HomeText>
          <span style={{ color: ThemeColors.Orange }}>Warren</span>
        </HomeText>
        <HomeText style={{ fontSize: "40px" }}>here!</HomeText>
        <HomeText style={{ fontSize: "40px" }}>and I'm a</HomeText>
        <HomeText>
          <span
            style={{
              fontFamily: "Source Code Pro Variable",
              color: ThemeColors.Red,
              fontSize: "7vw",
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
    </>
  );
};

export default React.forwardRef(Home);

const HomeContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",

  justifyContent: "center",
});

const HomeText = styled(Typography)({
  display: "block",
  position: "relative",
  zIndex: 1,

  textShadow: `0px 4px 4px ${BackgroundColors.Dark}`,

  color: ThemeColors.Default,
  userSelect: "none",
  fontFamily: "'Lexend Variable', sans-serif",
  fontSize: "64px",

  overflow: "hidden",
});
