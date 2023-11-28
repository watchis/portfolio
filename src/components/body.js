import React from "react";
import ReactPageScroller from "react-page-scroller";

import About from "./body_pages/about";
import Home from "./body_pages/home";
import Resume from "./body_pages/resume";
import Skills from "./body_pages/skills";
import { Box } from "@mui/material";

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
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
        <Box>
          <Home ref={homeRef} />
          <Skills ref={skillsRef} />
          <Resume ref={resumeRef} />
          <About ref={aboutRef} />
        </Box>
      </Box>
    </>
  );
};

export default Body;
