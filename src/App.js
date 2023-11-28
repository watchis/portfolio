import React, { useCallback, useRef, useState } from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import _ from "lodash";

import NavBar from "./components/navbar";
import Body from "./components/body";
import Footer from "./components/footer";
import { BackgroundColors } from "./consts/colors";
import Cogs from "./components/cogs";

import "./App.css";
import img from "./assets/bg-grid.png";
import "@fontsource/libre-barcode-128-text";
import "@fontsource-variable/lexend";
import "@fontsource-variable/source-code-pro";
import "@fontsource-variable/maven-pro";

function App() {
  const [activePage, setActivePage] = useState(0);
  const [isFast, setFast] = useState(false);
  const homeRef = useRef(null);
  const resumeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const drawerItems = {
    Home: () => homeRef.current?.scrollIntoView({ behavior: "smooth" }),
    Skills: () => skillsRef.current?.scrollIntoView({ behavior: "smooth" }),
    Resume: () => resumeRef.current?.scrollIntoView({ behavior: "smooth" }),
    About: () => aboutRef.current?.scrollIntoView({ behavior: "smooth" }),
  };

  const handleBeforePageChange = (page) => {
    if (activePage !== page) {
      spin();
      setActivePage(page);
    }
  };

  const handlePageChangeNav = (page) => {
    if (activePage !== page) {
      setActivePage(page);
      handlePageChangeDebounced();
    }
  };

  const handlePageChangeDebounced = useCallback(
    _.debounce(() => spin(), 1000, { trailing: true, leading: true }),
    []
  );

  const decelerateCogs = () => setFast(false);
  const accelerateCogs = () => setFast(true);

  const spin = () => {
    accelerateCogs();
    const timeout = setTimeout(decelerateCogs, 675);
    return () => clearTimeout(timeout);
  };

  const handleScrollUnavailable = () => handleBeforePageChange(0);

  return (
    <RootContainer>
      <BackgroundContainer>
        <Cogs isFast={isFast} />
      </BackgroundContainer>
      <AppContainer>
        <NavBar
          handlePageChange={handlePageChangeNav}
          activePage={activePage}
          drawerItems={drawerItems}
        />
        <Body
          handleBeforePageChange={handleBeforePageChange}
          activePage={activePage}
          handleScrollUnavailable={handleScrollUnavailable}
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          resumeRef={resumeRef}
        />
        <Footer />
      </AppContainer>
    </RootContainer>
  );
}

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
