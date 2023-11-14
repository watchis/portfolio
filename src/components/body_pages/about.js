import styled from "@emotion/styled";
import React from "react";
import { Box } from "@mui/material";

import { ThemeColors } from "../../consts/colors";
import { PageTitle } from "../shared/page_title";

const About = () => {
  return (
    <AboutPage>
      <PageTitle>
        About <span style={{ color: ThemeColors.Orange }}>Warren</span>
      </PageTitle>
    </AboutPage>
  );
};

export default About;

const AboutPage = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
