import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { BackgroundColors, ThemeColors } from "../../../consts/colors";

const Profile = () => {
  const currentDate = new Date();

  const monthMod = currentDate.getMonth() >= 6 ? 1 : 0;
  const yearsExperience = currentDate.getFullYear() - 2020 + monthMod;

  return (
    <View style={styles.view}>
      <Text style={styles.header}>Profile</Text>
      <View>
        <Text style={styles.summary}>
          Results-driven full stack software engineer with {yearsExperience}{" "}
          years of expertise in delivering quality, maintainable code.
          Proficient in Dart, Go, and Java, demonstrating exceptional
          adaptability and an ability to quickly master new technologies.
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  view: {
    fontFamily: "MavenPro",
    paddingBottom: 24,
  },

  header: {
    fontSize: "13px",
    fontFamily: "Lexend",
    marginBottom: 8,
    color: ThemeColors.LightGray,
    fontWeight: "semibold",
  },

  summary: {
    fontSize: 9.5,
  },
});
