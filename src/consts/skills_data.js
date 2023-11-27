import {
  DartIcon,
  CSSIcon,
  GoIcon,
  HtmlIcon,
  JavaIcon,
  JavascriptIcon,
  PythonIcon,
  CassandraIcon,
  DockerIcon,
  GitIcon,
  KafkaIcon,
  PostgresqlIcon,
  ReactIcon,
} from "./../assets/skills/index";

const Proficiency = {
  Knowledgable: 40,
  Skilled: 60,
  Proficient: 80,
  Expert: 100,
};

/**
 *  SKILLS MUST CONTAIN:
 *      1. A skill title (string)
 *      2. A logo (file path)
 *      3. A url (string)
 *      3. A skill level (int)
 */
export const LanguageSkills = [
  {
    title: "Dart",
    logo: DartIcon,
    url: "https://dart.dev/",
    proficiency: Proficiency.Expert,
  },
  {
    title: "Go",
    logo: GoIcon,
    url: "https://go.dev/",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "Java",
    logo: JavaIcon,
    url: "https://openjdk.org/",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "Javascript",
    logo: JavascriptIcon,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    proficiency: Proficiency.Skilled,
  },
  {
    title: "Python",
    logo: PythonIcon,
    url: "https://www.python.org/",
    proficiency: Proficiency.Knowledgable,
  },
  {
    title: "HTML",
    logo: HtmlIcon,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "CSS",
    logo: CSSIcon,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    proficiency: Proficiency.Proficient,
  },
];

export const ToolSkills = [
  {
    title: "Docker",
    logo: DockerIcon,
    url: "https://www.docker.com/",
    proficiency: Proficiency.Skilled,
  },
  {
    title: "Git",
    logo: GitIcon,
    url: "https://git-scm.com/",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "Kafka",
    logo: KafkaIcon,
    url: "https://kafka.apache.org/",
    proficiency: Proficiency.Knowledgable,
  },
  {
    title: "Cassandra",
    logo: CassandraIcon,
    url: "https://cassandra.apache.org/",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "PostgreSQL",
    logo: PostgresqlIcon,
    url: "https://www.postgresql.org/",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "React",
    logo: ReactIcon,
    url: "https://react.dev/",
    proficiency: Proficiency.Knowledgable,
  },
];
