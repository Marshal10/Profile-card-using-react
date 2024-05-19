import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <ProfileInfo />
      <SkillList />
      <Socials />
    </div>
  );
}

function Avatar() {
  return (
    <div className="image-wrapper">
      <img src="images/profile.jpg" alt="Profile Picture"></img>
    </div>
  );
}

function ProfileInfo() {
  return (
    <div className="info">
      <p className="name">Marshal Malean</p>
      <p className="work">
        Front-end developer from <span>Bengaluru</span>
      </p>
      <p className="location">
        <FontAwesomeIcon icon={faLocationDot} />
        <span className="location">Bengaluru,India</span>
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skills">
      <ul>
        {skills.map((skill) => (
          <li>
            <Skill name={skill.skill} color={skill.color} level={skill.level} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skill(props) {
  return (
    <span style={{ backgroundColor: props.color }}>
      {props.name}
      {props.level === "advanced" && "💪"}
      {props.level === "intermediate" && "👍"}
      {props.level === "beginner" && "👶"}
    </span>
  );
}

function Socials() {
  return (
    <div className="socials">
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faXTwitter} />
      <FontAwesomeIcon icon={faLinkedin} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
