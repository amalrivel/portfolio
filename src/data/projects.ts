export type Project = {
  number: string;
  title: string;
  role: string;
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
    role: "End-to-end product development",
    description:
      "A learning platform for Indonesian students preparing for Japan's gentsuki examination.",
    stack: ["Next.js", "TypeScript", "Bun", "PostgreSQL"],
    status: "In development",
    githubUrl: "https://github.com/amalrivel/genshu",
  },
  {
    number: "02",
    title: "Finori",
    role: "Product design, frontend, backend, database",
    description:
      "A personal finance system for tracking everyday financial activity across multiple accounts.",
    stack: ["React Router", "TypeScript", "PostgreSQL", "shadcn/ui"],
    status: "MVP",
    githubUrl: "https://github.com/amalrivel/finori",
  },
  {
    number: "03",
    title: "Gentsuki Ready",
    role: "Design and frontend development",
    description:
      "A lightweight gentsuki exam-practice app with quiz interaction, furigana, explanations, and local progress.",
    stack: ["Preact", "TypeScript", "Vite"],
    status: "Live",
    githubUrl: "https://github.com/amalrivel/gentsuki-ready",
  },
];
