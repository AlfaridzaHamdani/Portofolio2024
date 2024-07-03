"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./components/Curve/styles.module.scss";

const Template = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const Svg = ({ width, height }) => {
    const anim = (variants) => {
      return {
        variants,
        initial: "initial",
        animate: "enter",
        exit: "exit",
      };
    };

    const variants = {
      initial: {
        top: "-300px",
      },
      enter: {
        top: "-100vh",
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
        transitionEnd: {
          top: "100vh",
        },
      },
      exit: {
        top: "-300px",
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
      },
    };

    const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

    const curve = (initialPath, targetPath) => {
      return {
        initial: {
          d: initialPath,
        },
        enter: {
          d: targetPath,
          transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
          d: initialPath,
          transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
        },
      };
    };

    return (
      <motion.svg
        className={styles.svg}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.path {...anim(curve(initialPath, targetPath))} fill="#3d3b3c" />
      </motion.svg>
    );
  };

  return (
    <div className={styles.page}>
      {/* <div
        style={{ opacity: dimensions == null ? 1 : 0 }}
        className={styles.background}
      />
      {dimensions.width > 0 && <Svg {...dimensions} />} */}
      {children}
    </div>
  );
};

export default Template;
