"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import Project from "./Card";
import Modal from "./Card/Modal";
import { ProjectsData } from "./data";

const projects = ProjectsData;

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <div className={styles.heading}>
        <h1>Projects</h1>
      </div>
      <main className={styles.main}>
        <div className={styles.body}>
          {projects.map((project, index) => {
            return (
              <Project
                url={project.url}
                index={index}
                title={project.title}
                desc={project.desc}
                setModal={setModal}
                key={index}
              />
            );
          })}
        </div>
        <Modal modal={modal} projects={projects} />
      </main>
    </>
  );
}
