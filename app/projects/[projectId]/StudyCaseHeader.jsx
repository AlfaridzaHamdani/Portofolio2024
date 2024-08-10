"use client";
import styles from "./styles.module.scss";

const StudyCaseHeader = ({ title, cat, tech, date, studycase }) => {
  const formattedTitle = title ? title.toUpperCase() : "No Title";

  return (
    <div className={styles.title}>
      <div className={styles.containerTop}>
        <div>
          <div className={styles.bullet}></div>
          <h1>STUDY CASE</h1>
        </div>
        <h1>{formattedTitle}</h1>
        <p>Role : {cat}</p>
        <p className={styles.tech}>Tech : {tech}</p>
        <p>Date : {date || "-"}</p>
      </div>
      <div className={styles.paragraph}>
        <p>{studycase}</p>
      </div>
    </div>
  );
};

export default StudyCaseHeader;
