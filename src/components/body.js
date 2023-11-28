import React from "react";
import ReactPageScroller from "react-page-scroller";
import { Box } from "@mui/material";
import About from "./body_pages/about";
import Home from "./body_pages/home";
import Resume from "./body_pages/resume";
import Skills from "./body_pages/skills";

const Body = ({
  activePage,
  handleBeforePageChange,
  handleScrollUnavailable,
  homeRef,
  skillsRef,
  resumeRef,
  aboutRef,
}) => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "contents" } }}>
        <ReactPageScroller
          animationTimer={750}
          onBeforePageScroll={handleBeforePageChange}
          customPageNumber={activePage}
          renderAllPagesOnFirstRender={true}
          handleScrollUnavailable={handleScrollUnavailable}
          zIndex={1}
        >
          <Home />
          <Skills />
          <Resume />
          <About />
        </ReactPageScroller>
      </Box>
      <Box
        width="100vw"
        height="100vh"
        overflow="auto"
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <Home ref={homeRef} />
        <Skills ref={skillsRef} />
        <Resume ref={resumeRef} />
        <About ref={aboutRef} />
      </Box>
    </>
  );
};

export default Body;
