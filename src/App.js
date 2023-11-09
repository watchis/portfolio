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

const App = () => {
  const [activePage, setActivePage] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(window.innerHeight);
  const rootRef = useRef(null);
  const topNavRef = useRef(null);
  const footerRef = useRef(null);

  const handlePageOnChange = (page) => {
    setActivePage(page);
  };

  const handleBeforePageChange = () => {};

  useEffect(() => {
    if (topNavRef.current && footerRef.current && rootRef.current) {
      const body =
        rootRef.current.clientHeight -
        (topNavRef.current.clientHeight + footerRef.current.clientHeight);

      setBodyHeight(body);
    }
  }, [topNavRef, footerRef, rootRef]);

  return (
    <RootContainer ref={rootRef}>
      <CogContainer>
        <div
          style={{
            position: "relative",
            height: "100%",
          }}
        >
          <SettingsIcon id="cog-1" className="cog" />
          <SettingsOutlinedIcon id="cog-2" className="cog-backwards" />
          <SettingsIcon id="cog-3" className="cog" />
        </div>
      </CogContainer>
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
});

const CogContainer = styled("div")({
  position: "absolute",
  zIndex: 0,
  minHeight: "100px",
  width: "100%",

  svg: {
    position: "absolute",
    color: BackgroundColors.Dark,
    fontSize: "700px",
    display: "inline-flex",
  },

  "#cog-1": {
    marginTop: "-80px",
    marginLeft: "-80px",
  },

  "#cog-2": {
    marginTop: "0px",
    marginLeft: "450px",
  },

  "#cog-3": {
    marginTop: "420px",
    marginLeft: "110px",
  },
});
