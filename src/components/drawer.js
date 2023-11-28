import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";
import { ThemeColors } from "../consts/colors";

const DrawerNav = (props) => {
  const { window, handleDrawerToggle, mobileOpen, drawerItems } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
        },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <NavTitle>Warren Atchison</NavTitle>
        <Divider />
        <ListComponent>
          {Object.keys(drawerItems).map((pageTitle, pageNumber) => (
            <ListItem key={pageNumber} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                component="div"
                onClick={() => {
                  drawerItems[pageTitle]();
                  handleDrawerToggle();
                }}
              >
                <ListItemText primary={pageTitle} />
              </ListItemButton>
            </ListItem>
          ))}
        </ListComponent>
      </Box>
    </Drawer>
  );
};

export default DrawerNav;

DrawerNav.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  window: PropTypes.instanceOf(window.constructor),
};

const ListComponent = styled(List)({
  ".isActive ": {
    color: "white !important",
    background: ThemeColors.Default,
  },
});

const NavTitle = styled("p")({
  display: "flex",
  justifyContent: "center",

  color: ThemeColors.Orange,
  userSelect: "none",
  whiteSpace: "nowrap",

  fontSize: "36px",
  fontFamily: "'Libre Barcode 128 Text', sans-serif",
  cursor: "pointer",
});
