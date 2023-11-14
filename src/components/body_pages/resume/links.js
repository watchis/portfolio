import { View, StyleSheet, Text, Link } from "@react-pdf/renderer";
import { github, linkedIn, portfolio } from "../../../consts/footer_links";
import { ThemeColors } from "../../../consts/colors";

const Links = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Links</Text>
      <Link style={styles.detail} src={portfolio}>
        Portfolio
      </Link>
      <Link style={styles.detail} src={github}>
        Github
      </Link>
      <Link style={styles.detail} src={linkedIn}>
        LinkedIn
      </Link>
    </View>
  );
};

export default Links;

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
    paddingTop: 2,
    color: ThemeColors.OffWhite,
  },
});
