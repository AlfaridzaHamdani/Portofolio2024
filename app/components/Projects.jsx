import React from "react";
import style from "../styles/variables.module.scss";
import ProjectCard from "./ProjectCard";
import Button from "./Button";

const Projects = () => {
  return (
    <div className={style.projects}>
      <h1 className={style.title}>Recent Projects</h1>
      <ProjectCard
        position="top"
        projectName="Seku"
        projectCategory="Web Design & Development"
        projectDescription="Seku adalah website yang memberikan penggunanya inspirasi untuk bla bla bla"
      />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <Button text="More Projects" linkTo="/projects" />
    </div>
  );
};

export default Projects;
