export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  built: string[];
  stack: string[];
  status: string;
  githubUrl: string;
  demoUrl?: string;
  screenshot?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Genshu",
    category: "LMS for exam practice",
    description:
      "A learning platform for Indonesian Asahi scholarship students to practice training exams and review mistakes.",
    problem:
      "Exam preparation needs a structured way to practice, identify weak areas, and revisit incorrect answers.",
    built: [
      "Exam-style practice runner",
      "Practice and exam simulation",
      "Incorrect-answer review",
      "Furigana support",
      "Admin content management",
    ],
    stack: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    status: "In development",
    githubUrl: "https://github.com/amalrivel/genshu",
  },
];
