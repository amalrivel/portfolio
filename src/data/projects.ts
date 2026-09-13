export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  status: string;
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Genshu",
    category: "LMS for exam practice",
    description:
      "A learning platform for Indonesian students in the Asahi scholarship program to practice exams and review mistakes.",
    stack: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    status: "In development",
    githubUrl: "https://github.com/amalrivel/genshu",
  },
  {
    number: "02",
    title: "Amalrivel",
    category: "Personal developer portfolio",
    description:
      "An editorial developer portfolio built around a focused, screen-based workspace with responsive navigation and accessible interactions.",
    stack: ["React", "TypeScript", "Tailwind", "Motion"],
    status: "In development",
    githubUrl: "https://github.com/amalrivel/portfolio",
  },
];
