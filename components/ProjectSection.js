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
      <div className="flex flex-wrap gap-5 justify-center">
        {personalProjects.map((project) => (
          <div key={project.id} className="mx-auto p-5">
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
