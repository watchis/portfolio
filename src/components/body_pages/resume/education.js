import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { ThemeColors } from "../../../consts/colors";

const Education = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Education</Text>
      <View>
        <Text style={styles.subHeader}>
          Bachelor's of Computer Science, University of Central Florida
        </Text>
        <Text style={styles.date}>
          Orlando, Florida (August 2016 - December 2019)
        </Text>
      </View>
    </View>
  );
};

export default Education;

const styles = StyleSheet.create({
  view: {
    fontFamily: "MavenPro",
  },

  header: {
    fontSize: "13px",
    fontFamily: "Lexend",
    color: ThemeColors.LightGray,
    fontWeight: "semibold",
  },

  subHeader: {
    fontSize: 11,
    marginTop: 8,
    color: ThemeColors.Orange,
    fontWeight: "semibold",
  },

  date: {
    fontSize: 7,
    color: ThemeColors.Gray,
    fontWeight: "semibold",
    paddingTop: 1,
  },

  details: {
    fontSize: 9.5,
    width: "100%",
  },
});
