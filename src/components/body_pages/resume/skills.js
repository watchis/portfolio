import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { LanguageSkills, ToolSkills } from "../../../consts/skills_data";
import { BackgroundColors, ThemeColors } from "../../../consts/colors";

const Skills = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Skills</Text>
      {[...LanguageSkills, ...ToolSkills].map((skill) => (
        <View key={`resume-skill-${skill.title}`}>
          <Text style={styles.detail}>{skill.title}</Text>
          <View style={styles.progress}>
            <View
              style={{
                ...styles.progressValue,
                ...{ width: skill.proficiency + "%" },
              }}
            ></View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Skills;

const styles = StyleSheet.create({
  view: {
    fontFamily: "MavenPro",
    paddingBottom: 30,
    fontSize: 10,
  },

  header: {
    fontSize: 14,
    marginBottom: 4,
    fontFamily: "Lexend",
    fontWeight: "semibold",
  },

  detail: {
    fontSize: 10,
    paddingTop: 8,
    paddingBottom: 4,
  },

  progress: {
    width: "100%",
    height: 5,
    backgroundColor: BackgroundColors.Light,
  },

  progressValue: {
    backgroundColor: ThemeColors.Orange,
    height: "100%",
  },
});
