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
    logo: "skills/languages/dart.svg",
    url: "https://dart.dev/",
    proficiency: Proficiency.Expert,
  },
  {
    title: "Go",
    logo: "skills/languages/go.svg",
    url: "https://go.dev/",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "Java",
    logo: "skills/languages/java.svg",
    url: "https://openjdk.org/",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "Javascript",
    logo: "skills/languages/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    proficiency: Proficiency.Skilled,
  },
  {
    title: "Python",
    logo: "skills/languages/python.svg",
    url: "https://www.python.org/",
    proficiency: Proficiency.Knowledgable,
  },
  {
    title: "HTML",
    logo: "skills/languages/html5.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "CSS",
    logo: "skills/languages/css3.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    proficiency: Proficiency.Proficient,
  },
];

export const ToolSkills = [
  {
    title: "Docker",
    logo: "skills/tools/docker.svg",
    url: "https://www.docker.com/",
    proficiency: Proficiency.Skilled,
  },
  {
    title: "Git",
    logo: "skills/tools/git.svg",
    url: "https://git-scm.com/",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "Kafka",
    logo: "skills/tools/kafka.svg",
    url: "https://kafka.apache.org/",
    proficiency: Proficiency.Knowledgable,
  },
  {
    title: "Cassandra",
    logo: "skills/tools/cassandra.svg",
    url: "https://cassandra.apache.org/",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "PostgreSQL",
    logo: "skills/tools/postgresql.svg",
    url: "https://www.postgresql.org/",
    proficiency: Proficiency.Proficient,
  },
  {
    title: "React",
    logo: "skills/tools/react.svg",
    url: "https://react.dev/",
    proficiency: Proficiency.Knowledgable,
  },
];
