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
  const [bodyHeight, setBodyHeight] = useState(0);
  const topNavRef = useRef(null);
  const footerRef = useRef(null);

  const handlePageOnChange = (page) => {
    setActivePage(page);
  };

  const handleBeforePageChange = () => {};

  useEffect(() => {
    if (topNavRef.current && footerRef.current) {
      const body =
        window.innerHeight -
        (topNavRef.current.clientHeight + footerRef.current.clientHeight);

      setBodyHeight(body);
    }
  }, [topNavRef, footerRef]);

  return (
    <RootContainer>
      <BackgroundContainer>
        <CogsContainer>
          + <SettingsIcon className="cog " />
          + <SettingsOutlinedIcon className="cog-backwards" />
          + <SettingsIcon className="cog" />
        </CogsContainer>
      </BackgroundContainer>
      <AppContainer>
        <NavBar handlePageChange={handlePageOnChange} ref={topNavRef} />
        <Body
          handlePageOnChange={handlePageOnChange}
          handleBeforePageChange={handleBeforePageChange}
          activePage={activePage}
          bodyHeight={bodyHeight}
        />
        <Footer ref={footerRef} />
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
    fontSize: "700px",
    display: "inline-flex",

    ":nth-child(1)": {
      top: "-80px",
      left: "-80px",
    },

    ":nth-child(2)": {
      top: "0px",
      left: "450px",
    },

    ":nth-child(3)": {
      top: "420px",
      left: "110px",
    },
  },
});
