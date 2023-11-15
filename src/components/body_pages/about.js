import styled from "@emotion/styled";
import React from "react";
import { Box } from "@mui/material";
import { Image } from "mui-image";

import { ThemeColors } from "../../consts/colors";
import { PageTitle } from "../shared/page_title";

const About = () => {
  const currentDate = new Date();

  const monthMod = currentDate.getMonth() + 1 > 6 ? 1 : 0;
  const yearsExperience = currentDate.getFullYear() - 2020 + monthMod;

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
          Hi! I'm Warren, a seasoned software engineer with a passion for
          creating innovative solutions and a track record of success in the
          dynamic field of technology. With {yearsExperience} years of
          experience under my belt, I specialize in languages such as Dart, Go,
          and Java, and have honed my skills working with a diverse range of
          tools and frameworks including Docker, Kafka, Cassandra, and React.
        </AboutText>
        <AboutText>
          My professional journey includes contributing to the development of
          enterprise webservices (SaaS) at Workiva and architecting cloud-based
          microservices with American Express. I thrive on challenges and take
          pride in my ability to seamlessly integrate into new teams and
          environments. My diverse skill set allows me to navigate both
          front-end and back-end code with equal proficiency.
        </AboutText>
        <AboutText>
          I actively seek opportunities to explore new languages, acquire fresh
          skills, and master emerging frameworks. Motivated by a desire to
          achieve personal, team, and project goals, I am driven to deliver
          high-quality, maintainable code.
        </AboutText>
        <AboutText>
          Beyond the world of coding, I find joy in exploring different cultures
          and embracing unfamiliar walks of life through travel. Whether I'm
          developing games in the{" "}
          <a
            style={{ color: ThemeColors.OffWhite }}
            href="https://ludumdare.com/"
            target="_blank"
          >
            Ludum Dare Game Jam
          </a>{" "}
          or immersing myself in Path of Exile with friends, my love for gaming
          is a constant source of inspiration and creativity.
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

  margin: "12px 0 12px 64px",

  userSelect: "none",
});
