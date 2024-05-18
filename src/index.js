import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <ProfileInfo />
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
