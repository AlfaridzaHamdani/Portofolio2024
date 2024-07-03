"use client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const Index = ({ text, linkTo }) => {
  const [onHover, setOnHover] = React.useState(false);

  return (
    <Link
      href={linkTo}
      className={styles.button}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className={styles.textContainer}>
        <motion.div>
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: onHover ? 0 : 100 }}
            transition={{
              duration: 0.5,
            }}
          >
            {text}
          </motion.h1>
        </motion.div>
        <div>
          <motion.h1
            initial={{ y: 0 }}
            animate={{ y: onHover ? -100 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {text}
          </motion.h1>
        </div>
      </div>
    </Link>
  );
};

export default Index;
