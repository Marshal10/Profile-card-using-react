import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <ProfileInfo />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img src="images/profile.jpg" alt="profile_img"></img>;
}

function ProfileInfo() {
  return (
    <div className="info">
      <p className="name">Marshal Malean</p>
      <p className="work">Front-end developer from Bengaluru</p>
      <p>
        📌<span className="location">Bengaluru,India</span>
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skills">
      <ul>
        <li>
          <Skill name="HTML+CSS" color="#2257e6" level="💪" />
        </li>
        <li>
          <Skill name="JavaScript" color="#ebd316" level="💪" />
        </li>
        <li>
          <Skill name="Web Design" color="#b8d7a2" level="👍" />
        </li>
        <li>
          <Skill name="Git and GitHub" color="#e4452c" level="👍" />
        </li>
        <li>
          <Skill name="React" color="#52d5f7" level="👶" />
        </li>
      </ul>
    </div>
  );
}

function Skill(props) {
  return (
    <span style={{ backgroundColor: props.color }}>
      {props.name}
      {props.level}
    </span>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
