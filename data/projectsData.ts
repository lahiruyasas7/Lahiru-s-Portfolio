export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Learning Material System",
    description:
      "A fully functional e-commerce platform with payment integration.",
    images: [
      "custom-images/lahiru-s-acadamy2.png",
      "custom-images/lahiru-s-acadamy4.png",
      "custom-images/lahiru-s-acadamy7.png",
      "custom-images/lahiru-s-acadamy8.png",
      "custom-images/lahiru-s-acadamy9.png",
      "custom-images/lahiru-s-acadamy10.png",
      "custom-images/lahiru-s-acadamy11.png",
    ],
  },
  {
    id: 2,
    title: "Online Compiler",
    description: "A personal portfolio showcasing projects and blogs.",
    images: [
      "custom-images/onlineCompiler1.png",
      "custom-images/onlineCompilerProject2.png",
    ],
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A web-based task management application with team collaboration.",
    images: ["/projects/taskapp1.png", "/projects/taskapp2.png"],
  },
];
