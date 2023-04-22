import { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../projectData";

const ProjectSection = () => {
  const [personalProjects, setPersonalProjects] = useState(projects);

  return (
    <div className="">
      <h2 className="text-[6rem] font-bold text-center text-primary">
        Projects
      </h2>
      <div className="flex flex-wrap h-auto justify-center gap-[8rem] items-center lg:mx-[15rem] my-[4rem] mx-5">
        {personalProjects.map((project) => (
          <div key={project.id}>
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
