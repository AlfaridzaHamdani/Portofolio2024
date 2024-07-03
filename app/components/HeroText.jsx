"use client";
import React, { useRef, useLayoutEffect } from "react";
import style from "../styles/heroText.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const HeroText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect(() => {
    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      if (firstText.current && secondText.current) {
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
      }
      requestAnimationFrame(animate);
      xPercent += 0.1 * direction;
    };
    if (!slider.current || !firstText.current || !secondText.current) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

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
