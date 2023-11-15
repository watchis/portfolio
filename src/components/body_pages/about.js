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

          justifyContent: "center",
        }}
      >
        <PageTitle style={{ textAlign: "left" }}>
          <span style={{ color: ThemeColors.Orange }}>About</span> Me
        </PageTitle>
        <AboutText>
          Hi! I've been a professional software engineer since January 2020 and
          love to challenge myself to constantly learn new languages, skills,
          and frameworks.
        </AboutText>
        <AboutText>
          I pride myself on my ability to adapt to new teams, languages, and
          frameworks quickly. I am highly self-motivated and get most of my
          enjoyment at work meeting my own internal goals while advancing
          project milestones. I come with a diverse skill set and am able to
          work effectively in both front and back end code.
        </AboutText>
        <AboutText>
          Outside of work I love traveling, gaming, and learning. From traveling
          to the Philippines, to participating in a{" "}
          <a
            style={{ color: ThemeColors.OffWhite }}
            href="https://ludumdare.com/"
            target="_blank"
          >
            Ludum Dare Game Jam
          </a>
          , to learning how to cook and save for retirement, my evenings are
          often filled with new experiences and adventures.
        </AboutText>
        <AboutText>
          If you are looking for a versatile, adaptable engineer with a desire
          and drive to produce high-quality, maintainable code, reach out to me
          today!
        </AboutText>
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

const LudumDare = styled("a")({
  color: ThemeColors.OffWhite,
});

const AboutText = styled("p")({
  color: ThemeColors.OffWhite,
  fontFamily: "'Maven Pro Variable', sans-serif",
  fontSize: "24px",

  marginLeft: "64px",

  userSelect: "none",
});
