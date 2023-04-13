import { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../projectData";

const ProjectSection = () => {
  const [personalProjects, setPersonalProjects] = useState(projects);

  return (
    <>
      <h2 className="text-[6rem] underline font-bold text-center">Projects</h2>
      <div className="flex flex-wrap justify-center gap-[8rem] items-center lg:mx-[15rem] my-[4rem]">
        {personalProjects.map((project) => (
          <div key={project.id}>
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
