import styled from "@emotion/styled";
import { Card, CardContent, CardMedia, LinearProgress } from "@mui/material";

import { BackgroundColors, ThemeColors } from "../../consts/colors";

export const SkillCard = ({ skill }) => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <StyledCard variant="outlined" onClick={() => handleClick(skill.url)}>
      <CardLogo image={skill.logo} title={skill.title} />
      <CardContent
        sx={{
          padding: 0,
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <TitleText>{skill.title}</TitleText>
        <ProficiencyBar variant="determinate" value={skill.proficiency} />
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  justifyContent: "center",
  backgroundColor: ThemeColors.Default,

  minHeight: "200px",
  height: "200px",

  minWidth: "158px",
  width: "158px",

  margin: "16px",

  border: "1px solid",
  borderColor: ThemeColors.Orange,

  transition: "0.15s",

  "&:hover": {
    filter: `drop-shadow(0 0 0.50rem ${ThemeColors.Orange})`,
    cursor: "pointer",
  },
});

const CardLogo = styled(CardMedia)({
  height: "138px",
  width: "138px",

  margin: "10px",
});

const TitleText = styled("p")({
  color: ThemeColors.OffWhite,
  backgroundColor: BackgroundColors.Light,
  userSelect: "none",
  fontFamily: "'Maven Pro Variable', sans-serif",
  textAlign: "center",
  fontSize: "19px",

  margin: 0,
  padding: "8px 0 8px 0",
});

const ProficiencyBar = styled(LinearProgress)({
  backgroundColor: BackgroundColors.Dark,

  "& .MuiLinearProgress-bar": {
    backgroundColor: ThemeColors.Orange,
  },
});
