import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button } from "@mui/base";

import { ThemeColors } from "../consts/colors";
import { PageTitles } from "../consts/page_titles";

const NavBar = ({ handlePageChange, activePage }) => {
  return (
    <NavBarBox>
      <NavTitle onClick={() => handlePageChange(0)}>Warren Atchison</NavTitle>
      <NavItemBox>
        {PageTitles.map((pageTitle, pageNumber) => (
          <NavButton
            className={activePage === pageNumber ? "active" : ""}
            onClick={() => handlePageChange(pageNumber)}
            key={`nav-${pageTitle}`}
          >
            {pageTitle}
          </NavButton>
        ))}
      </NavItemBox>
    </NavBarBox>
  );
};

export default NavBar;

const NavBarBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "auto",

  minHeight: "fit-content",

  width: "100%",
  minWidth: "fit-content",

  zIndex: 2,
  flexWrap: "nowrap",
});

const NavTitle = styled("p")({
  display: "flex",
  justifyContent: "left",

  margin: "24px",
  marginLeft: "64px",

  color: ThemeColors.Orange,
  userSelect: "none",
  whiteSpace: "nowrap",

  fontSize: "64px",
  fontFamily: "'Libre Barcode 128 Text', sans-serif",
  cursor: "pointer",
});

const NavItemBox = styled(Box)({
  display: "flex",
  minWidth: "fit-content",
  alignItems: "center",
  justifyItems: "right",

  margin: "24px",
  marginRight: "64px",

  ".active": {
    color: `${ThemeColors.OffWhite} !important`,
    borderBottom: `2px solid ${ThemeColors.Orange}`,
  },
});

const NavButton = styled(Button)({
  fontFamily: "'Lexend Variable', sans-serif",
  fontSize: "24px",

  color: ThemeColors.Default,
  background: "transparent",

  border: "transparent solid 1px",
  borderRadius: "0",

  margin: "0 8px",
  padding: "8px 16px",

  userSelect: "none",
  transition: "0.1s",

  "&:hover": {
    color: `${ThemeColors.OffWhite}50`,
    cursor: "pointer",
  },
});
