import React from "react";
import Project from "./Project";
import { useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectPage = () => {
  const { title } = useParams();
  const project = projects[title];
  if (!project) {
    return <div className="text-center text-2xl py-20">Project not found.</div>;
  }

  return (
    <div className="min-h-screen  flex flex-col md:px-12 ">
      <Project
        imgURL={project.imgURL}
        title={project.title}
        desc={project.desc}
        metrics={project.metrics}
        to={project.to}
        showLearnMore={false} // No "Learn More" since we're already on the page
      />
      <h1>More Info, Photos soon</h1>
    </div>
  );
};

export default ProjectPage;
