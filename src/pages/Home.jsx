import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../../styles/style.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h1>Hi, My name is Rohit</h1>
        <p>A software developer with a passion for learning and creating.</p>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/rohit-raj-7a1412204/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              style={{
                cursor: "pointer",
                margin: "0.5rem",
                color: "white",
                fontSize: "4rem",
              }}
            />
          </a>
          <a href="mailto:rohitrajvns2020@gmail.com">
            <EmailIcon
              style={{
                cursor: "pointer",
                margin: "0.5rem",
                color: "white",
                fontSize: "4rem",
              }}
            />
          </a>
          <a
            href="https://github.com/Rohit20Raj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon
              style={{
                cursor: "pointer",
                margin: "0.5rem",
                color: "white",
                fontSize: "4rem",
              }}
            />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1 className="skill">SKILLS</h1>
        <div className="lang">
          <h2>Languages</h2>
          <p>C, C++, Python, JavaSript</p>
        </div>
        <div className="web-tech">
          <h2>Web Technologies</h2>
          <p> HTML5/CSS3, MongoDB, Express, ReactJs, NodeJs, SQL/MySQL, Php</p>
        </div>
        <div className="other-tech">
          <h2>Other Technologies</h2>
          <p>Git/GitHub, Docker, Selenium & WebDriver, VS Code, MS-Office</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
