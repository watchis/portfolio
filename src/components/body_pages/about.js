import styled from "@emotion/styled";
import React from "react";
import { Box } from "@mui/material";
import { Image } from "mui-image";

import { ThemeColors } from "../../consts/colors";
import { PageTitle } from "../shared/page_title";

const About = () => {
  return (
    <AboutPage>
      <Box
        sx={{
          display: "flex",

          height: "85%",
          maxHeight: "705px",

          width: "30%",
          maxWidth: "425px",
        }}
      >
        <ProfilePicture src="about/warren.jpg" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "60%",
        }}
      >
        <PageTitle style={{ marginTop: "64px", textAlign: "left" }}>
          <span style={{ color: ThemeColors.Orange }}>About</span> Me
        </PageTitle>
        <AboutText>
          This is a long story of the warren in which the warren is known as the
          "Warren".
        </AboutText>
        <AboutText>Pickles</AboutText>
        <AboutText>Pickles</AboutText>
        <AboutText>Pickles</AboutText>
      </Box>
    </AboutPage>
  );
};

export default About;

const AboutPage = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  height: "100%",
  width: "100%",

  overflow: "hidden",
});

const ProfilePicture = styled(Image)({
  border: "5px solid",
  borderColor: ThemeColors.Orange,
});

const AboutText = styled("p")({
  color: ThemeColors.OffWhite,
  fontFamily: "'Maven Pro Variable', sans-serif",
  fontSize: "24px",

  marginLeft: "64px",
});
