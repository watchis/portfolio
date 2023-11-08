import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { ThemeColors } from "../consts/colors";
import { Button } from "@mui/base";

function NavBar() {
  return (
    <NavBarBox>
      <NavTitle>Warren Atchison</NavTitle>
      <NavBox sx={{ display: { xs: "none", sm: "block" } }}>
        {NavItems.map((item) => (
          <NavLink
            to={item.href}
            className={({ isActive }) => (isActive ? "isActive" : "")}
            key={item.name}
          >
            <NavButton className="animate__animated animate__flash animate__slow">
              {item.name}
            </NavButton>
          </NavLink>
        ))}
      </NavBox>
    </NavBarBox>
  );
}

export default NavBar;

const NavBarBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
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

const NavBox = styled(Box)({
  ".isActive > button": {
    borderColor: "white",
    color: PrimaryColors[0],
  },
});

const NavButton = styled(Button)({
  fontFamily: "Montserrat",
  color: "white",
  background: "transparent",
  border: "transparent solid 1px",
  borderRadius: "0",
  margin: "0 8px",
  padding: "8px 24px",
  transition: "0.3s",

  "&:hover": {
    backgroundColor: "#ffffff42",
  },
});
