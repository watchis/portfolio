import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

import { PageTitle } from "../shared/page_title";
import { ThemeColors } from "../../consts/colors";
import { SkillCard } from "../shared/skill_card";
import { LanguageSkills, ToolSkills } from "../../consts/skills_data";

const Skills = (_, ref) => {
  return (
    <SkillsPage ref={ref} sx={{ padding: { sm: "0 10vw", xs: "8px" } }}>
      <PageTitle style={{ marginTop: "0px", marginBottom: "50px" }}>
        My <span style={{ color: ThemeColors.Orange }}>Skills</span>
      </PageTitle>
      <SkillContainer sx={{ gap: { sm: "40px", xs: "24px" } }}>
        {[...LanguageSkills, ...ToolSkills].map((skill) => (
          <SkillCard key={`languageSkillCard-${skill.title}`} skill={skill} />
        ))}
      </SkillContainer>
    </SkillsPage>
  );
};

export default React.forwardRef(Skills);

const SkillsPage = styled(Box)({
  display: "flex",
  flexDirection: "column",

  minHeight: "100%",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",
});

const SkillContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
});
