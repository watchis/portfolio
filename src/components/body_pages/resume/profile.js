import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { BackgroundColors, ThemeColors } from "../../../consts/colors";

const Profile = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Profile</Text>
      <View>
        <Text style={styles.summary}>
          Goal-oriented full stack software engineer with nearly 5 years of
          experience striving to produce quality, maintainable code. Highly
          adaptable; able to quickly learn and master new languages and
          frameworks.
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
