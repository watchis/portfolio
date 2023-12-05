import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { ThemeColors } from "../../../consts/colors";

const data = [
  {
    title: "Full Stack Engineer, Workiva",
    date: "Remote (June 2021 - Present)",
    list: [
      "Contributed to the development of extensible, maintainable client and server code using Dart and Golang within an Agile environment.",
      "Engineered high-quality, accessible UI components in Dart, leveraging wrappers for React and the Material UI (MUI) component library.",
      "Led and executed projects to enhance capabilities in Designed Reporting, ensuring seamless integration with the existing ecosystem.",
      "Designed and implemented responsive Rest APIs using Apache Thrift, employed across multiple Workiva repositories for internal use.",
      "Collaborated with customers, UX, and Product teams to gather requirements and translate them into comprehensive customer-facing features.",
      "Developed end-to-end features and solutions for Workiva's platform, focusing on areas such as Designed Reporting, ESG-related solutions, and more!",
    ],
  },
  {
    title: "Software Engineer, American Express",
    date: "Phoenix, Arizona (January 2020 - June 2021)",
    list: [
      "Agile team member in the Network Modernization initiative, to rebuild and reimagine the payment processing system within Amex; helping to process upwards of 3 billion new transactions!",
      "Supported a set of existing Java-based internal API designed to efficiently retrieve transaction details across multiple Cassandra tables.",
      "Enabled processing of transaction data through creation of a new Java-based payment ingestion micro-service, utilizing Kafka, Cassandra, and Elasticsearch to efficiently process and store transactions.",
      "Improved data integrity/validity of AmEx transaction data by developing a Java-based reconciliation micro-service utilizing Apache Spark, Hadoop, Cassandra, and Elasticsearch.",
      "Built a new reporting framework for compiling transactions based on a partner/merchant into a human-readable report for clients using Apache Spark, FreeMarker, Hadoop, and Cassandra.",
    ],
  },
  {
    title: "Software Development Intern, UQM Technologies",
    date: "Denver, Colorado (May 2018 - August 2018)",
    list: [
      "Created an employee tracking application for managing employee training records using C# and SAP Crystal Reports.",
      "Improved business workflow by developing an application to procedurally generate reports for clients based on motor test data using C# and PostgreSQL.",
    ],
  },
];

const Employment = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Employment History</Text>
      {data.map((item) => {
        return (
          <View key={item.title}>
            <Text style={styles.subHeader}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
            <View style={styles.detailsContainer}>
              {item.list.map((item2, i) => (
                <View style={styles.row} key={i}>
                  <View style={styles.bullet}>
                    <Text>{"\u2022" + " "}</Text>
                  </View>
                  <Text style={styles.details}>{item2}</Text>
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Employment;

const styles = StyleSheet.create({
  view: {
    fontFamily: "MavenPro",
    paddingBottom: 24,
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

  detailsContainer: {
    paddingTop: "4px",
  },

  details: {
    fontSize: 9.5,
    width: "100%",
  },

  row: {
    display: "flex",
    flexDirection: "row",

    padding: "2px 0",
  },

  bullet: {
    marginTop: "-5px",
  },
});
