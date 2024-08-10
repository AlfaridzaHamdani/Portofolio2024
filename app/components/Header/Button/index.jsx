import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const index = ({ isActive, setIsActive }) => {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={styles.button}
    >
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <PerpectiveText label="Menu" />
        </div>
        <div className={styles.el}>
          <PerpectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
};

const PerpectiveText = ({ label }) => {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
};

export default index;
