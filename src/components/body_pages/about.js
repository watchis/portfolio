import styled from "@emotion/styled";
import React from "react";
import { Box } from "@mui/material";

import { ThemeColors } from "../../consts/colors";
import { PageTitle } from "../shared/page_title";
import WarrenPic from "./../../assets/about/warren.jpg";
import WarrenSmallPic from "./resume/images/warren.jpg";

const About = (_, ref) => {
  const currentDate = new Date();

  const monthMod = currentDate.getMonth() >= 6 ? 1 : 0;
  const yearsExperience = currentDate.getFullYear() - 2020 + monthMod;

  return (
    <AboutPage
      ref={ref}
      sx={{
        flexDirection: { sm: "row", xs: "column-reverse" },
        height: { sm: "100vh", xs: "initial" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "0 36px 0 120px",
          width: "70%",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <ProfilePicture src={WarrenPic} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: { sm: "0 120px 0 36px", xs: "0 24px" },
        }}
      >
        <PageTitle sx={{ textAlign: { sm: "left", xs: "center" } }}>
          <span style={{ color: ThemeColors.Orange }}>About</span> Me
        </PageTitle>
        <Box sx={{ display: { sm: "none", xs: "flex" }, width: "100%" }}>
          <ProfilePicture src={WarrenSmallPic} />
        </Box>
        <AboutText sx={{ fontSize: { xs: "5vw", sm: "1.1vw" } }}>
          <p>
            Hi! I'm Warren, a seasoned software engineer with a passion for
            creating innovative solutions and a track record of success in the
            dynamic field of technology. With {yearsExperience} years of
            experience under my belt, I specialize in languages such as Dart,
            Go, and Java, and have honed my skills working with a diverse range
            of tools and frameworks including Docker, Kafka, Cassandra, and
            React.
          </p>
          <p>
            My professional journey includes contributing to the development of
            enterprise webservices (SaaS) at Workiva and architecting
            cloud-based microservices with American Express. I thrive on
            challenges and take pride in my ability to seamlessly integrate into
            new teams and environments. My diverse skill set allows me to
            navigate both front-end and back-end code with equal proficiency.
          </p>
          <p>
            I actively seek opportunities to explore new languages, acquire
            fresh skills, and master emerging frameworks. Motivated by a desire
            to achieve personal, team, and project goals, I am driven to deliver
            high-quality, maintainable code.
          </p>
          <p>
            Beyond the world of coding, I find joy in exploring different
            cultures and embracing unfamiliar walks of life through travel.
            Whether I'm developing games in the{" "}
            <a
              style={{ color: ThemeColors.OffWhite }}
              href="https://ludumdare.com/"
              target="_blank"
            >
              Ludum Dare Game Jam
            </a>{" "}
            or immersing myself in Path of Exile with friends, my love for
            gaming is a constant source of inspiration and creativity.
          </p>
          <p>
            If you are looking for a versatile, adaptable engineer with a desire
            and drive to produce high-quality, maintainable code, reach out to
            me today!
          </p>
        </AboutText>
      </Box>
    </AboutPage>
  );
};

export default React.forwardRef(About);

const AboutPage = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const ProfilePicture = styled("img")({
  userSelect: "none",
  border: "5px solid",
  borderColor: ThemeColors.Orange,
  width: "100%",
});

const LudumDare = styled("a")({
  color: ThemeColors.OffWhite,
});

const AboutText = styled(Box)({
  color: ThemeColors.OffWhite,
  fontFamily: "'Maven Pro Variable', sans-serif",
  userSelect: "none",
});
