import React from "react";
import { Box, Container, IconButton, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { BackgroundColors, ThemeColors } from "../consts/colors";
import { github, linkedIn, mailTo } from "../consts/footer_links";

const Footer = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleMail = (e) => {
    window.location.href = mailTo;
    e.preventDefault();
  };

  return (
    <FooterBox>
      <SocialsContainer>
        <ButtonSocials size="medium" onClick={() => handleClick(github)}>
          <GitHubIcon />
        </ButtonSocials>
        <ButtonSocials size="medium" onClick={() => handleClick(linkedIn)}>
          <LinkedInIcon />
        </ButtonSocials>
        <ButtonSocials size="medium" onClick={handleMail}>
          <MailOutlineIcon />
        </ButtonSocials>
      </SocialsContainer>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: "auto",

  borderTop: "1px solid",
  borderColor: ThemeColors.Default,

  minHeight: "fit-content",

  width: "100%",
  minWidth: "fit-content",

  background: BackgroundColors.Dark,
  zIndex: 1,
});

const SocialsContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ButtonSocials = styled(IconButton)({
  color: ThemeColors.Default,

  border: "1px solid",
  borderColor: ThemeColors.Default,

  margin: "12px",
  padding: "6px",
  transition: "0.3s",

  "&:hover": {
    borderRadius: "0",
    background: `${ThemeColors.OffWhite}10`,
  },
});
