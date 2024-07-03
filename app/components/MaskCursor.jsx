"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "../styles/maskCursor.module.scss";
import HeroText from "./HeroText";

const MaskCursor = () => {
  const divRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 0;

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const { x, y } = mousePosition;
  const updateMousePosition = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    const divElement = divRef.current;

    divElement.addEventListener("mousemove", updateMousePosition);
    return () =>
      divElement.removeEventListener("mousemove", updateMousePosition);
  }, [divRef]);

  return (
    <main className={styles.main} ref={divRef}>
      <motion.div
        className={styles.mask}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <div
          className={styles.maskContent}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <HeroText />
        </div>
      </motion.div>
      <div className={styles.body}>
        <HeroText />
      </div>
    </main>
  );
};

export default MaskCursor;
