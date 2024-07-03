import React from "react";
import style from "../styles/variables.module.scss";
import ProjectCard from "./ProjectCard";
import Button from "./Button";

const Projects = () => {
  return (
    <div className={style.projects}>
      <h1 className={style.title}>Recent Projects</h1>
      <ProjectCard
        title={"Seku"}
        desc={"Seku is a web App"}
        cat={"Design & Development"}
        type={"top"}
        url={"https://alfaridzahamdani.github.io/Seku/"}
      />
      <ProjectCard
        title={"Harvest Table"}
        desc={""}
        cat={"Development"}
        type={""}
        url={"https://alfaridzahamdani.github.io/Seku/"}
      />
      <ProjectCard title={"Flowy"} desc={""} cat={"Development"} type={""} />
      <ProjectCard
        title={"Kucing Cari Rumah"}
        desc={""}
        cat={"Design & Development"}
        type={""}
        url={"https://alfaridzahamdani.github.io/Seku/"}
      />
      <Button text="More Projects" linkTo="/projects" />
    </div>
  );
};

export default Projects;
