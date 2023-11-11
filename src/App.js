import React, { useState } from "react";
import { Box } from "@mui/system";
import styled from "@emotion/styled";

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

function App() {
  const [activePage, setActivePage] = useState(0);
  const [isFast, setFast] = useState(false);

  const handlePageChange = (page) => {
    if (activePage !== page) {
      setActivePage(page);
      spin();
    }
  };

  const decelerateCogs = () => setFast(false);
  const accelerateCogs = () => setFast(true);

  const spin = () => {
    accelerateCogs();
    const wow = setTimeout(decelerateCogs, 1000);
    return () => clearTimeout(wow);
  };

  return (
    <RootContainer>
      <BackgroundContainer>
        <Cogs isFast={isFast} />
      </BackgroundContainer>
      <AppContainer>
        <NavBar handlePageChange={handlePageChange} activePage={activePage} />
        <Body handlePageChange={handlePageChange} activePage={activePage} />
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
