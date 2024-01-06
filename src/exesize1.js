import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

var resum =(
<div>
   <div className="container">
    <div className="header mt-2"> <h1>John Doe</h1>
      <p>Web Developer</p>
    </div>

    <div className="section">
      <h2>Summary</h2>
      <p>A passionate web developer with experience in HTML, CSS, and JavaScript. Dedicated to creating user-friendly and responsive websites.</p>
    </div>

    <div className="section">
      <h2>Skills</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Responsive Design</li>
        <li>Bootstrap</li>
      </ul>
    </div>

    <div className="section">
      <h2>Experience</h2>
      <h3>Web Developer Intern - ABC Company</h3>
      <p>Developed and maintained web applications using HTML, CSS, and JavaScript. Assisted in troubleshooting and optimizing website performance.</p>
    </div>

    <div className="section">
      <h2>Education</h2>
      <h3>Bachelor's Degree in Computer Science - XYZ University</h3>
      <p>Graduated with honors. Coursework included web development, algorithms, and software engineering.</p>
    </div>
  </div>
</div>)
root.render(resum);

reportWebVitals();
