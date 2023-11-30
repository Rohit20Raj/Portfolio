import React from "react";
import '../../styles/projects.css';

function ProjectItem({title, image}) {
  return (
    <div>
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
