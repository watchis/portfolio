import styled from "@emotion/styled";
import { BackgroundColors, ThemeColors } from "../../consts/colors";

export const PageTitle = styled("p")({
  textShadow: `0px 4px 4px ${BackgroundColors.Dark}`,
  color: ThemeColors.OffWhite,

  fontFamily: "'Lexend Variable', sans-serif",
  fontSize: "40px",
  textAlign: "center",
  userSelect: "none",

  margin: "16px 64px 16px 64px",
});
