import styled from "@emotion/styled";
import { BackgroundColors, ThemeColors } from "../../consts/colors";
import { Typography } from "@mui/material";

export const PageTitle = styled(Typography)({
  textShadow: `0px 4px 4px ${BackgroundColors.Dark}`,
  color: ThemeColors.OffWhite,

  fontFamily: "'Lexend Variable', sans-serif",
  fontSize: "40px",
  textAlign: "center",
  userSelect: "none",
});
