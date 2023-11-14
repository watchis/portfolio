import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

import { PageTitle } from "../shared/page_title";
import { ThemeColors } from "../../consts/colors";
import { SkillCard } from "../shared/skill_card";
import { LanguageSkills, ToolSkills } from "../../consts/skills_data";

const Skills = () => {
  return (
    <SkillsPage>
      <PageTitle style={{ marginTop: "0px", marginBottom: "50px" }}>
        My <span style={{ color: ThemeColors.Orange }}>Skills</span>
      </PageTitle>
      <SkillContainer>
        {LanguageSkills.map((skill) => (
          <SkillCard key={`languageSkillCard-${skill.title}`} skill={skill} />
        ))}
      </SkillContainer>
      <SkillContainer>
        {ToolSkills.map((skill) => (
          <SkillCard key={`toolSkillCard-${skill.title}`} skill={skill} />
        ))}
      </SkillContainer>
    </SkillsPage>
  );
};

export default Skills;

const SkillsPage = styled(Box)({
  display: "flex",
  flexDirection: "column",

  minHeight: "100%",
  alignItems: "center",
  justifyContent: "center",

  justifyContent: "center",
});

const SkillContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  marginTop: "16px",
});
