"use client";
import React, { useEffect, useRef } from "react";
import styles from "../styles/paralaxGallery.module.scss";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import useDimension from "./useDimension";

const images = [
  "./images/Flowy.png",
  "./images/HarvestTable.png",
  "./images/KucingCariRumah.png",
  "./images/Portofolio.png",
  "./images/Seku.png",
  "./images/TechSprint.png",
  "./images/Flowy.png",
  "./images/HarvestTable.png",
  "./images/KucingCariRumah.png",
  "./images/Portofolio.png",
  "./images/Seku.png",
  "./images/TechSprint.png",
];

const ParalaxGallery = () => {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"], // start when the container starts, end when the container ends
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.main} ref={container}>
      <div className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </div>
  );
};

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={src} alt="Image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};

export default ParalaxGallery;
