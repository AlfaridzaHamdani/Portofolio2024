"use client";
import React, { useState, useRef, useEffect } from "react";
import style from "../styles/heroText.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const HeroText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const [xPercent, setXPercent] = useState(0);
  const [direction, setDirection] = useState(-1);

  useEffect(() => {
    if (!slider.current || !firstText.current || !secondText.current) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => setDirection(e.direction * -1),
      },
      x: "-500px",
    });

    animate();

    return () => {
      // Clean up animation if needed
      cancelAnimationFrame(animate);
    };
  }, []);

  const animate = () => {
    let newXPercent = xPercent + 0.1 * direction;
    if (newXPercent < -100) {
      newXPercent = 0;
    } else if (newXPercent > 0) {
      newXPercent = -100;
    }

    setXPercent(newXPercent);

    if (firstText.current && secondText.current) {
      gsap.set(firstText.current, { xPercent: newXPercent });
      gsap.set(secondText.current, { xPercent: newXPercent });
    }

    requestAnimationFrame(animate);
  };

  return (
    <div className={style.sliderContainer}>
      <div ref={slider} className={style.slider}>
        <p ref={firstText}>Alfaridza Hamdani -</p>
        <p ref={secondText}>Alfaridza Hamdani -</p>
      </div>
    </div>
  );
};

export default HeroText;
