import { View, StyleSheet, Text } from "@react-pdf/renderer";

const Details = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Details</Text>
      <View>
        <Text style={styles.detail}>48 Knotting Hill Dr.</Text>
        <Text style={styles.detail}>Fayetteville, TN, 37334</Text>
        <Text style={styles.detail}>United States</Text>
      </View>
      <Text style={styles.number}>(318) 525-4548</Text>
      <Text style={styles.email}>warren.atchison98@gmail.com</Text>
    </View>
  );
};

export default Details;

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

  number: {
    paddingTop: 2,
  },

  email: {
    fontSize: 8.7,
    paddingTop: 2,
  },
});
