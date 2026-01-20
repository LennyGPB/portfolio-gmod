"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./ProjectContent.module.css";
import CardProject from "./CardProjects";

export default function ProjectContent() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          delay: 0.5,
          transition: { ease: "easeOut", duration: 3 },
        },
      }}
    >
      <div className={styles.container__title}>
        <motion.h2
          className={styles.titleAndMore}
          initial={{ x: "-100%" }}
          animate={{ x: "40%" }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          PROJECTS <span className={styles.titleName}>REALISATIONS</span>{" "}
          PROJECTS <span className={styles.titleName}>REALISATIONS</span>{" "}
          PROJECTS <span className={styles.titleName}>REALISATIONS</span>{" "}
          PROJECTS
        </motion.h2>
      </div>
      
      <div className={styles.filterButtons}>
        <button
          className={`${styles.filterBtn} ${activeFilter === "all" ? styles.active : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          Tous
        </button>
        <button
          className={`${styles.filterBtn} ${activeFilter === "web" ? styles.active : ""}`}
          onClick={() => setActiveFilter("web")}
        >
          WEB
        </button>
        <button
          className={`${styles.filterBtn} ${activeFilter === "Systèmes" ? styles.active : ""}`}
          onClick={() => setActiveFilter("Systèmes")}
        >
          Garry&apos;s Mod - Systèmes
        </button>
        <button
          className={`${styles.filterBtn} ${activeFilter === "Sweps" ? styles.active : ""}`}
          onClick={() => setActiveFilter("Sweps")}
        >
          Garry&apos;s Mod - Sweps
        </button>
      </div>

      <div className={styles.container__infosMore}>
        <CardProject filter={activeFilter} />
      </div>
    </motion.div>
  );
}
