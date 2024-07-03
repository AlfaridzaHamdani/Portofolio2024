"use client";
import React from "react";
import Button from "./Button";
import { motion, useInView } from "framer-motion";
import style from "../styles/variables.module.scss";

const About = () => {
  const container = React.useRef(null);
  const isInView = useInView(container, { once: true });

  const text = [
    "Step into the future and let us turn your dreams into reality.",
    "Together, we can break boundaries and set new standards in the digital era.",
  ];

  return (
    <div className={style.about}>
      <div>
        {text.map((t, index) => {
          return (
            <div
              key={`about_${index} `}
              className={style.container}
              ref={container}
            >
              <motion.p
                style={{
                  transform: isInView ? "translateY(0)" : "translateY(100px)",
                  transition: "all 0.5s ease-in-out",
                  transitionDelay: `${index * 0.5}s`,
                }}
                className={style.text}
              >
                {t}
              </motion.p>
            </div>
          );
        })}
        <Button linkTo="/about" text="About Me" type="light" />
      </div>
    </div>
  );
};

export default About;
