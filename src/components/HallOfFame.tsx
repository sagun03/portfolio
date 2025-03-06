import React from "react";
import { motion } from "framer-motion";
import styles from "./HallOfFame.module.css";

interface Certification {
  image: string;
  name: string;
  description: string;
}

interface HallOfFameProps {
  certifications: Certification[];
}

const HallOfFame: React.FC<HallOfFameProps> = ({ certifications }) => {
  return (
    <div className={styles.container}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Certifications
      </motion.h2>

      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className={styles.frame}
            whileHover={{ scale: 1.10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className={styles.innerFrame}>
              <img src={cert.image} alt={cert.name} className={styles.image} />
            </div>
            <div className={styles.overlay}>
              <h3 className={styles.name}>{cert.name}</h3>
              <p className={styles.description}>{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HallOfFame;
