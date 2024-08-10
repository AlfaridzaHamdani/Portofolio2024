"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "../styles/variables.module.scss";
import arrow from "../assets/images/Arrow.svg";
import Image from "next/image";
import { useInView } from "framer-motion";

const ProjectCard = ({ title, desc, cat, position, id, tech }) => {
  const container = React.useRef(null);
  const isInView = useInView(container, { once: true });
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <div
      className={position == "top" ? style.projectCardTop : style.projectCard}
      ref={container}
      onClick={handleCardClick}
    >
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.textContainer}>
            <h1
              style={{
                transform: isInView ? "translateY(0)" : "translateY(100px)",
                transition: "transform 0.5s ease-in-out",
                transitionDelay: "0.5s",
              }}
            >
              {title}
            </h1>
          </div>
          <div className={style.textContainer}>
            <h2
              style={{
                transform: isInView ? "translateY(0)" : "translateY(100px)",
                transition: "transform 0.5s ease-in-out",
                transitionDelay: "0.5s",
              }}
            >
              {cat}
            </h2>
          </div>
          <div className={style.textContainer}>
            <h2
              style={{
                transform: isInView ? "translateY(0)" : "translateY(100px)",
                transition: "transform 0.5s ease-in-out",
                transitionDelay: "0.5s",
              }}
              className={style.tech}
            >
              {tech}
            </h2>
          </div>
        </div>
        <div className={style.textContainer}>
          <p
            style={{
              transform: isInView ? "translateY(0)" : "translateY(100px)",
              transition: "transform 0.5s ease-in-out",
              transitionDelay: "0.5s",
            }}
          >
            {desc}
          </p>
        </div>
        <Image src={arrow} alt="Arrow icon" priority={true} />
      </div>
    </div>
  );
};

export default ProjectCard;
