import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="icons container">
        <a
          href="https://github.com/Rohit20Raj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            style={{
              cursor: "pointer",
              margin: "1.15rem",
              color: "white",
              fontSize: "2rem",
              color: "white",
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/i.am_rohit.raj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon
            style={{
              cursor: "pointer",
              margin: "1.15rem",
              color: "white",
              fontSize: "2rem",
              color: "white",
            }}
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100053598156001&ref=xav_ig_profile_web"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            style={{
              cursor: "pointer",
              margin: "1.15rem",
              color: "white",
              fontSize: "2rem",
              color: "white",
            }}
          />
        </a>
        <a href="mailto:rohitrajvns2020@gmail.com">
          <EmailIcon
            style={{
              cursor: "pointer",
              margin: "1.15rem",
              color: "white",
              fontSize: "2rem",
              color: "white",
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rohit-raj-7a1412204/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            style={{
              cursor: "pointer",
              margin: "1.15rem",
              color: "white",
              fontSize: "2rem",
              color: "white",
            }}
          />
        </a>
      </div>
      <div className="copyright">&copy; {year} Rohit Raj</div>
    </div>
  );
}

export default Footer;
