"use client";
import React, { useEffect, useState } from "react";
import style from "../styles/variables.module.scss";
import arrow from "../assets/images/Arrow.svg";
import Image from "next/image";
import { useInView } from "framer-motion";

const ProjectCard = (props) => {
  const container = React.useRef(null);
  const isInView = useInView(container, { once: true });
  const [projectName, setProjectName] = useState("Project Name Here");
  const [projectCategory, setProjectCategory] = useState(
    "Project Category Here"
  );
  const [projectDescription, setProjectDescription] = useState(
    "Project Description Here"
  );

  const [stylingCard, setStylingCard] = useState("");

  useEffect(() => {
    if (props.projectName) {
      setProjectName(props.projectName);
    }
    if (props.projectCategory) {
      setProjectCategory(props.projectCategory);
    }
    if (props.projectDescription) {
      setProjectDescription(props.projectDescription);
    }

    if (props.position === "top") {
      setStylingCard(style.projectCardTop);
    } else {
      setStylingCard(style.projectCard);
    }
  }, [props.position]);

  return (
    <div className={stylingCard} ref={container}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.textContainer}>
            <h1
              style={{
                transform: isInView ? "translateY(0)" : "translateY(100px)",
                transition: "all 0.5s ease-in-out",
                transitionDelay: 0.5,
              }}
            >
              {projectName}
            </h1>
          </div>
          <div className={style.textContainer}>
            <h2
              style={{
                transform: isInView ? "translateY(0)" : "translateY(100px)",
                transition: "all 0.5s ease-in-out",
                transitionDelay: 0.5,
              }}
            >
              {projectCategory}
            </h2>
          </div>
        </div>
        <div className={style.textContainer}>
          <p
            style={{
              transform: isInView ? "translateY(0)" : "translateY(100px)",
              transition: "all 0.5s ease-in-out",
              transitionDelay: 0.5,
            }}
          >
            {projectDescription}
          </p>
        </div>

        <Image src={arrow} alt="Arrow" priority={true} />
      </div>
    </div>
  );
};

export default ProjectCard;
