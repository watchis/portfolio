import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import NavBar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";
import { BackgroundColors } from "./consts/colors";

import "./App.css";
import img from "./assets/bg-grid.png";
import "@fontsource/libre-barcode-128-text";
import "@fontsource-variable/lexend";
import "@fontsource-variable/source-code-pro";

const App = () => {
  const [activePage, setActivePage] = useState(0);

  const handlePageOnChange = (page) => {
    setActivePage(page);
  };

  const handleBeforePageChange = () => {};

  return (
    <RootContainer>
      <BackgroundContainer>
        <CogsContainer>
          <SettingsIcon className="cog" />
          <SettingsOutlinedIcon className="cog-backwards" />
          <SettingsIcon className="cog" />
        </CogsContainer>
      </BackgroundContainer>
      <AppContainer>
        <NavBar handlePageChange={handlePageOnChange} />
        <Body
          handlePageOnChange={handlePageOnChange}
          handleBeforePageChange={handleBeforePageChange}
          activePage={activePage}
        />
        <Footer />
      </AppContainer>
    </RootContainer>
  );
};

export default React.memo(App);

const RootContainer = styled(Box)({
  position: "relative",
  background: BackgroundColors.Light,
  backgroundImage: `url(${img})`,
  height: "100vh",
  width: "100vw",
});

const AppContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  position: "absolute",
});

const BackgroundContainer = styled("div")({
  position: "absolute",
  zIndex: 0,
  overflow: "hidden",
});

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
