import {
  Font,
  Page,
  View,
  Document,
  StyleSheet,
  Svg,
  Image,
} from "@react-pdf/renderer";
import Header from "./header";
import Profile from "./profile";

import LexendRegular from "./fonts/Lexend-Regular.ttf";
import LexendSemiBold from "./fonts/Lexend-SemiBold.ttf";
import LexendBold from "./fonts/Lexend-Bold.ttf";
import MavenProRegular from "./fonts/MavenPro-Regular.ttf";
import MavenProSemiBold from "./fonts/MavenPro-SemiBold.ttf";
import MavenProBold from "./fonts/MavenPro-Bold.ttf";
import Details from "./details";
import Skills from "./skills";
import Links from "./links";
import Employment from "./employment";
import Education from "./education";
import { BackgroundColors, ThemeColors } from "../../../consts/colors";
import cog from "./images/cog150.png";

Font.register({
  family: "Lexend",
  fonts: [
    {
      src: LexendRegular,
    },
    {
      src: LexendSemiBold,
      fontWeight: "semibold",
    },
    {
      src: LexendBold,
      fontWeight: "bold",
    },
  ],
});

Font.register({
  family: "MavenPro",
  fonts: [
    {
      src: MavenProRegular,
    },
    {
      src: MavenProSemiBold,
      fontWeight: "semibold",
    },
    {
      src: MavenProBold,
      fontWeight: "bold",
    },
  ],
});

const Resume = (props) => (
  <Page {...props} style={styles.page}>
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image src={cog} style={styles.cog1} />
        <Image src={cog} style={styles.cog2} />
        <Image src={cog} style={styles.cog3} />
        <View>
          <Header />
          <Profile />
          <Employment />
          <Education />
        </View>
      </View>
      <View style={styles.rightColumn}>
        <Details />
        <Links />
        <Skills />
      </View>
    </View>
  </Page>
);

const DocumentResume = () => (
  <Document
    author="Warren Atchison"
    keywords="software engineer, resume"
    subject="Resume - Warren Atchison"
    title="Resume - Warren Atchison"
  >
    <Resume size="A4" />
  </Document>
);

export default DocumentResume;

const styles = StyleSheet.create({
  page: {
    padding: 0,
  },
  container: {
    flex: 1,
    flexDirection: "row",
  },
  leftColumn: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 32,
    paddingRight: 24,
    color: BackgroundColors.Light,
    width: 425,
    position: "relative",
  },
  rightColumn: {
    flexDirection: "column",
    width: 171,
    paddingTop: 80,
    paddingBottom: 32,
    paddingRight: 24,
    paddingLeft: 24,
    backgroundColor: ThemeColors.Default,
    color: ThemeColors.OffWhite,
    height: "100%",
  },
  cog1: {
    width: 150,
    height: 150,
    position: "absolute",
    color: ThemeColors.Default,
    right: -80,
    top: -80,
  },
  cog2: {
    width: 150,
    height: 150,
    position: "absolute",
    color: ThemeColors.Default,
    right: -80,
    top: 680,
  },
  cog3: {
    width: 150,
    height: 150,
    position: "absolute",
    color: ThemeColors.Default,
    right: -19,
    top: 779,
    transform: "rotate(152)",
  },
});
