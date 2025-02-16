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
    description: "A fully functional Learning Material Platform.",
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
    description:
      "An online compiler with error showing for c, c++, java, python, html",
    images: [
      "custom-images/onlineCompiler1.png",
      "custom-images/onlineCompilerProject2.png",
    ],
  },
  {
    id: 3,
    title: "Latest Trending Movies ",
    description:
      "A website view latest trending movies and check their details",
    images: [
      "/custom-images/movieRating2.png",
      "/custom-images/movieRating1.png",
    ],
  },
  {
    id: 4,
    title: "Online Part time job portal ",
    description:
      "A web-based task management application with team collaboration.",
    images: [
      "/custom-images/jobPortal1.png",
      "/custom-images/jobPortal2.png",
      "/custom-images/jobPortal3.png",
      "/custom-images/jobPortal4.png",
      "/custom-images/jobPortal5.png",
      "/custom-images/jobPortal6.png",
      "/custom-images/jobPortal7.png",
      "/custom-images/jobPortal8.png",
    ],
  },
];
