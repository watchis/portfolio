import React, { useState } from "react";
import Home from "./body_pages/home";
import About from "./body_pages/about";
import Contact from "./body_pages/contact";
import ReactPageScroller from "react-page-scroller";

const Body = ({ activePage, handlePageChange }) => {
  return (
    <ReactPageScroller
      onBeforePageScroll={handlePageChange}
      customPageNumber={activePage}
      renderAllPagesOnFirstRender={true}
      zIndex={1}
    >
      <Home />
      <About />
      <Contact />
    </ReactPageScroller>
  );
};

export default Body;
