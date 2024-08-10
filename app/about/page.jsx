import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "../components/Button";
import { IoLogoJavascript } from "react-icons/io";
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";

const AboutPage = () => {
  return (
    <>
      <div className={styles.page}>
        <h1>About</h1>

        <div className={styles.aboutMe}>
          <Image
            src="/images/Alfaridza.jpg"
            width={300}
            height={450}
            alt="Image"
          />

          <div className={styles.container}>
            <p>
              Hey there! I&apos;m Alfaridza, a frontend developer driven by my
              passion to create captivating and meaningful digital experiences.
              Currently, I&apos;m pursuing a degree in application software
              engineering, where I actively integrate cutting-edge technologies
              like React.js, Next.js, Tailwind CSS, Sass, and Node.js into my
              projects. I thrive on exploring the latest innovations. For
              instance, I&apos;m diving deep into Framer Motion for dynamic
              animations and leveraging Next.js to build responsive and
              lightning-fast websites. My enthusiasm for continuous learning and
              growth fuels my ambition to contribute to groundbreaking user
              experiences. Let&apos;s collaborate to craft exceptional designs
              together! Thank you for visiting my portfolio.
            </p>

            <Button text="Contact Me" linkTo="https://instgaram.com" />
          </div>
        </div>

        <h1>I Can Help you with</h1>
        <div className={styles.container}>
          <div className={styles.card}>
            <h4>1.</h4>
            <hr />
            <h2>Design</h2>
            <p>
              I'ill design your website with the latest trends and technologies,
              making it look modern and professional.
            </p>
          </div>
          <div className={styles.card}>
            <h4>2.</h4>
            <hr />
            <h2>Development</h2>
            <p>
              If you have a design and need it to be developed, I can help you.
            </p>
          </div>
        </div>

        <h1>My Skills</h1>
        <div className={styles.skills}>
          <div>
            <MdHtml />
            <MdCss />
            <IoLogoJavascript />
            <FaPhp />
            <FaReact />
            <RiNextjsLine />
            <SiMysql />
            <FaFigma />
            <FiFramer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
