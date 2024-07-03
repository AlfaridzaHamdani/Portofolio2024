import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "../components/Button";

const AboutPage = () => {
  return (
    <>
      <div className={styles.page}>
        <h1>About</h1>

        <div className={styles.aboutMe}>
          <Image src="/images/Alfaridza.jpg" width={300} height={450} />

          <div className={styles.container}>
            <p>
              Hey there! I'm Alfaridza, a frontend developer driven by my
              passion to create captivating and meaningful digital experiences.
              Currently, I'm pursuing a degree in application software
              engineering, where I actively integrate cutting-edge technologies
              like React.js, Next.js, Tailwind CSS, Sass, and Node.js into my
              projects. I thrive on exploring the latest innovations. For
              instance, I'm diving deep into Framer Motion for dynamic
              animations and leveraging Next.js to build responsive and
              lightning-fast websites. My enthusiasm for continuous learning and
              growth fuels my ambition to contribute to groundbreaking user
              experiences. Let's collaborate to craft exceptional designs
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis, voluptatibus?
            </p>
          </div>
          <div className={styles.card}>
            <h4>2.</h4>
            <hr />
            <h2>Development</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis, voluptatibus?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
