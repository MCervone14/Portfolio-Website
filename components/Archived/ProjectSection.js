import { useEffect, useState } from "react";
import { projects } from "../../projectData";
import ProjectItem from "../ProjectItem";

const ProjectSection = () => {
  const [personalProjects, setPersonalProjects] = useState([]);

  useEffect(() => {
    setPersonalProjects(projects);
  }, []);

  return (
    <section id="projects" className="max-w-screen-2xl mx-auto mb-10">
      <h2 className="text-slate-700 text-5xl mb-5 py-10 px-5">
        My Latest <span className="text-title">Projects</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {personalProjects.map((project) => (
          <div key={project.id} className="mx-auto p-5">
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
