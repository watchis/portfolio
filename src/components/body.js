import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";

import About from "./body_pages/about";
import Home from "./body_pages/home";
import Resume from "./body_pages/resume";
import Skills from "./body_pages/skills";

const Body = ({
  activePage,
  handleBeforePageChange,
  handleScrollUnavailable,
}) => {
  return (
    <ReactPageScroller
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
  );
};

export default Body;
