import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform with payment integration.",
    images: ["/projects/ecommerce1.png", "/projects/ecommerce2.png"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing projects and blogs.",
    images: ["/projects/portfolio1.png"],
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A web-based task management application with team collaboration.",
    images: ["/projects/taskapp1.png", "/projects/taskapp2.png"],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 border p-6 rounded-xl shadow-lg">
      {/* Left - Carousel */}
      <div className="w-full md:w-1/2">
        <Carousel>
          <CarouselContent>
            {project.images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Right - Project Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.description}</p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
