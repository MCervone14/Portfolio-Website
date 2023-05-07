import { useEffect, useState } from "react";
import { projects } from "../projectData";
import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
  const [personalProjects, setPersonalProjects] = useState([]);

  useEffect(() => {
    setPersonalProjects(projects);
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-8 justify-around items-center lg:mx-[15rem] my-[4rem] mx-5">
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
