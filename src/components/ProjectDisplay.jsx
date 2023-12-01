import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../helper/projectList";
import '../../styles/projectDisplay.css'

function ProjectDisplay() {
  const { id } = useParams();
  const proj = projects[id];
  return (
    <div className="project-display">
      <div className="card">
        <img src={proj.image} class="card-img-top" alt={proj.Title} />
        <div className="card-body">
          <h3 className="card-text">
            {proj.Title}
          </h3>
          <p>
            <b>Skills used</b>: {proj.skills}
          </p>
          <p>
            {proj.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
