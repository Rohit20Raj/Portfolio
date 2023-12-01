import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/projects.css';

function ProjectItem({title, image, idx}) {
  const navigate = useNavigate();
  return (
    <div className="project-item">
      <div className="card" onClick={()=>{
        navigate("/projects/"+idx);
      }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
