import React, { useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button } from "@mui/base";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography, AppBar, IconButton, Toolbar } from "@mui/material";

import { ThemeColors } from "../consts/colors";
import { PageTitles } from "../consts/page_titles";
import DrawerNav from "./drawer";

const NavBar = (props) => {
  const { handlePageChange, activePage, drawerItems } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleClick = (pageNumber) => handlePageChange(pageNumber);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <NavTitle
            variant="h6"
            component="div"
            onClick={() => handlePageChange(0)}
            sx={{
              flexGrow: 1,
              display: { sm: "block", xs: "none" },
            }}
          >
            Warren Atchison
          </NavTitle>
          <NavItemBox sx={{ display: { xs: "none", sm: "block" } }}>
            {PageTitles.map((pageTitle, pageNumber) => (
              <NavButton
                className={
                  activePage === pageNumber
                    ? "active"
                    : activePage > pageNumber
                    ? "hasBorder"
                    : ""
                }
                onClick={() => handleClick(pageNumber)}
                key={`nav-${pageTitle}`}
              >
                {pageTitle}
              </NavButton>
            ))}
          </NavItemBox>
        </Toolbar>
      </AppBar>
      <DrawerNav
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        drawerItems={drawerItems}
      />
    </Box>
  );
};

export default NavBar;

const NavBarBox = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  zIndex: 2,
  flexWrap: "nowrap",
});

const NavBox = styled(Box)({
  ".isActive > button": {
    borderColor: ThemeColors.Orange,
    color: ThemeColors.Orange,
  },
});

const NavTitle = styled(Typography)({
  display: { sm: "none" },
  display: "flex",
  justifyContent: "left",

  color: ThemeColors.Orange,
  userSelect: "none",
  fontSize: "64px",
  fontFamily: "'Libre Barcode 128 Text', sans-serif",
  cursor: "pointer",
  wordSpacing: "-12px",
  paddingLeft: "64px",
});

const NavItemBox = styled(Box)({
  display: "flex",
  minWidth: "fit-content",
  alignItems: "center",
  justifyItems: "right",

  display: { sm: "none" },

  margin: "24px",
  marginRight: "64px",

  ".active": {
    color: `${ThemeColors.OffWhite} !important`,
    borderBottom: `2px solid ${ThemeColors.Orange}`,
  },

  ".hasBorder": {
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

  margin: "0 -1px",
  padding: "8px 24px",

  userSelect: "none",
  transition: "0.3s ease",

  "&:hover": {
    color: `${ThemeColors.OffWhite}50`,
    cursor: "pointer",
  },
});

const scrolledStyle = {
  color: "white",
  boxShadow: "none",
};

const topStyle = {
  background: "transparent",
};
