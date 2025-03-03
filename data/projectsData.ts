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
      "A fully functional Learning Material Platform. user can create courses and exam categories, add questions with answers, user details, experiece, education, project details. used technologies are nextjs, tailwind, redux saga for frontend and nest js, typeorm and postgresql for backend.",
    images: [
      "custom-images/lahiru-s-acadamy2.PNG",
      "custom-images/lahiru-s-acadamy4.PNG",
      "custom-images/lahiru-s-acadamy7.PNG",
      "custom-images/lahiru-s-acadamy8.PNG",
      "custom-images/lahiru-s-acadamy9.PNG",
      "custom-images/lahiru-s-acadamy10.PNG",
      "custom-images/lahiru-s-acadamy11.PNG",
    ],
  },
  {
    id: 2,
    title: "Online Compiler",
    description:
      "An online compiler with error showing for c, c++, java, python, html. use technologies are react js, monaco editor, bootstrap, react-select",
    images: [
      "custom-images/onlineCompiler1.PNG",
      "custom-images/onlineCompilerProject2.PNG",
    ],
  },
  {
    id: 3,
    title: "Latest Trending Movies ",
    description:
      "A website view latest trending movies and check their details. use technologies are react js, axios, redux saga, tailwind",
    images: [
      "/custom-images/movieRating2.PNG",
      "/custom-images/movieRating1.PNG",
    ],
  },
  {
    id: 4,
    title: "Online Part time job portal ",
    description:
      "This job portal for mainly for day jobs and part time jobs. there are 3 roles accounts. Admin, Employer, Employee. Employee post, update, delete job posts. system shows the nearest job for job seekers. also system suggest best job applier for employee. use technologies are Html, css, javascript, bootstrap, php, mysql.",
    images: [
      "/custom-images/jobPortal1.PNG",
      "/custom-images/jobPortal2.PNG",
      "/custom-images/jobPortal3.PNG",
      "/custom-images/jobPortal4.PNG",
      "/custom-images/jobPortal5.PNG",
      "/custom-images/jobPortal6.PNG",
      "/custom-images/jobPortal7.PNG",
      "/custom-images/jobPortal8.PNG",
    ],
  },
  {
    id: 3,
    title: "Weather App ",
    description:
      "User can check weather details of main cities of the world. used technologies are react js, axios, bootstrap",
    images: [
      "/custom-images/weatherApp1.PNG",
      "/custom-images/weatherApp2.PNG",
    ],
  },
];
