"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button/index";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Nav from "./Nav";

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const variants = {
    open: (isSmallScreen) => ({
      width: isSmallScreen ? "90vw" : 480,
      height: isSmallScreen ? 500 : 650,
      top: isSmallScreen ? "-25px" : "-25px",
      right: isSmallScreen ? "-25px" : "-25px",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    }),
    closed: {
      width: 100,
      height: 40,
      top: "0px",
      right: "0px",
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 481);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return Component();

  function Component() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);

    if (mounted)
      return (
        <div className={styles.header}>
          <motion.div
            className={styles.menu}
            variants={variants}
            custom={isSmallScreen}
            animate={isActive ? "open" : "closed"}
            initial="closed"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            {isActive && <Nav />}
          </motion.div>

          <Button isActive={isActive} setIsActive={setIsActive} />
        </div>
      );
  }
};

export default Index;
