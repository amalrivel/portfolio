export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  built: string[];
  stack: string[];
  status: string;
  url?: string;
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
];
