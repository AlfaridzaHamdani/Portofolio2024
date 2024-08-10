import styles from "./styles.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Links, FooterLinks } from "./data";
import Link from "next/link";

const index = () => {
  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
    },
    enter: (i) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.35,
        delay: 0.25 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.35 },
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slideIn = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.75 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link, i) => {
          return (
            <div key={i} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={link.href}>{link.title}</Link>
              </motion.div>
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        {FooterLinks.map((link, i) => {
          return (
            <motion.a
              target="_blank"
              key={`f_${i}`}
              href={link.href}
              variants={slideIn}
              custom={i}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              {link.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default index;
