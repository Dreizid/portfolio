import React from "react";
import { TechnologiesProps } from "./TechStack";
import ProjectCard from "./ProjectCard";

export type ProjectProps = {
  projectName: string;
  projectImage: string;
  projectDescription: string;
  techstack: TechnologiesProps[];
};

type ProjectsProps = {
  projects: ProjectProps[];
};

const defaultValues = [
  {
    projectName: "Sample project",
    projectImage: "../../public/next.svg",
    projectDescription: "Sample project",
    techstack: [{ imgAlt: "Sample stack", imgSrc: "../../public/next.svg" }],
  },
];

export default function Projects({ projects = defaultValues }: ProjectsProps) {
  return (
    <div className="">
      <h1 className="text-5xl m-8 mb-2">Projects</h1>
      {projects.map(
        ({
          projectName,
          projectImage,
          projectDescription,
          techstack,
        }: ProjectProps) => (
          <ProjectCard
            projectName={projectName}
            projectImage={projectImage}
            projectDescription={projectDescription}
            techstack={techstack}
          />
        ),
      )}
    </div>
  );
}
