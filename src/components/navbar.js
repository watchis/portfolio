import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { ThemeColors } from "../consts/colors";
import { Button } from "@mui/base";

const NavBar = ({ handlePageChange }, ref) => {
  const pages = ["Home", "Resume", "About"];

  return (
    <NavBarBox ref={ref}>
      <NavTitle>Warren Atchison</NavTitle>
      <NavItemBox>
        {pages.map((item, i) => (
          <NavButton onClick={() => handlePageChange(i)} key={`nav-${item}`}>
            {item}
          </NavButton>
        ))}
      </NavItemBox>
    </NavBarBox>
  );
};

export default React.forwardRef(NavBar);

const NavBarBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "auto",

  minHeight: "fit-content",

  width: "100%",
  minWidth: "fit-content",

  zIndex: 2,
});

const NavTitle = styled("p")({
  display: "flex",
  justifyContent: "left",

  margin: "24px",
  marginLeft: "64px",

  color: ThemeColors.Orange,
  userSelect: "none",

  fontSize: "64px",
  fontFamily: "'Libre Barcode 128 Text', sans-serif",
});

const NavItemBox = styled(Box)({
  display: "flex",
  minWidth: "fit-content",
  alignItems: "center",
  justifyItems: "right",

  margin: "24px",
  marginRight: "64px",
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
  },
});
