export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  built: string[];
  stack: string[];
  status: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Genshu",
    category: "LMS for exam practice",
    description:
      "A focused learning platform for practicing exam-style questions and reviewing mistakes.",
    problem:
      "Students need a simple way to practice exam-style questions and understand where they can improve.",
    built: [
      "Practice runner",
      "Admin tools",
      "Furigana support",
      "Result review",
    ],
    stack: ["React", "Express", "PostgreSQL"],
    status: "In development",
  },
  {
    number: "02",
    title: "Project Two",
    category: "A practical web tool",
    description:
      "A second case study placeholder for a product that helps people get useful work done.",
    problem:
      "Replace this with the user problem, constraint, or opportunity that shaped the project.",
    built: ["Core workflow", "Responsive interface", "Useful defaults"],
    stack: ["TypeScript", "Tailwind", "Node"],
    status: "Completed",
  },
];
