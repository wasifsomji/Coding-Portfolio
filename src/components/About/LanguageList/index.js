import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
  const [languages] = useState([
    { name: "Java", progress: 100, className: "java-progress", years: 2.5 },
    { name: "Python", progress: 80, className: "python-progress", years: 2 },
    { name: "Go", progress: 10, className: "go-progress", years: 0.25 },
    { name: "HTML5 / CSS3", progress: 40, className: "web-progress", years: 1 },
    { name: "JavaScript / TypeScript", progress: 40, className: "web-progress", years: 1 },
    { name: "C", progress: 60, className: "c-progress", years: 1.5 },
    { name: "ARM7 Assembly", progress: 32, className: "arm7-assembly-progress", years: 0.8 },
  ]);

  return (
    <div>
      <h2>Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>{language.name}: {`${language.years} years`}</span>
            <ProgressBar progress={language.progress} className={language.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
