import React from "react";
import ProjectItem from "../components/ProjectItem";
import { projects } from "../helper/projectList.js";
import "../../styles/projects.css";

function Projects() {
  return (
    <div className="project-body">
      <h1 className="heading">My Personal Projects</h1>
      <div className="projects">
        {projects.map((project)=>{
          return <ProjectItem title={project.Title} image={project.image}/>;
        })}
      </div>
    </div>
  );
}

export default Projects;
