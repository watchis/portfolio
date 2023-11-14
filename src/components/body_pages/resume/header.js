import { View, StyleSheet, Text, Image } from "@react-pdf/renderer";
import { ThemeColors } from "../../../consts/colors";
import Img from "./images/warren.jpg";

const Header = () => {
  return (
    <View style={styles.view}>
      <View style={styles.imageContainer}>
        <Image src={Img} style={styles.image} />
      </View>
      <View>
        <Text style={styles.name}>Warren Atchison</Text>
        <Text style={styles.position}>SOFTWARE ENGINEER</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 8,
    marginBottom: 16,
    borderBottom: `1px solid ${ThemeColors.Orange}`,
  },

  imageContainer: {
    border: `1px solid ${ThemeColors.Orange}`,
    borderRadius: "100%",
    display: "flex",
    marginRight: 16,
    width: 72,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: "100%",
  },

  name: {
    fontSize: "16px",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Lexend",
    color: ThemeColors.Orange,
  },

  position: {
    fontSize: 8,
    fontFamily: "MavenPro",
    color: ThemeColors.Gray,
  },
});
