"use client";
import { motion } from "framer-motion";
import styles from "./AboutContent.module.css";

export default function AboutContent() {
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
      className={styles.container}
    >
      <div className={styles.container__title}>
        <motion.h2
          className={styles.titleAndMore}
          initial={{ x: "-80%" }}
          animate={{ x: "25%" }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          ABOUT <span className={styles.titleName}>A PROPOS</span> ABOUT{" "}
          <span className={styles.titleName}>A PROPOS</span> ABOUT{" "}
        </motion.h2>
      </div>
      <div className={styles.container__infosMore}>
        <article className={styles.description}>
          <p>
            {/* Je m&apos;appelle Jessy, et je suis animé par le développement, le
            design digital, la danse & l'écriture. En tant que Compositeur MAO
            (Beatmaker) & Développeur, j&apos;excelle à créer des univers tant
            musicaux que visuels. Mon objectif est d&apos;utiliser la puissance
            infinie des solutions offertes par le web pour résoudre des
            problèmes de manière innovante. Mon engagement dans ces domaines me
            permet d&apos;explorer et de fusionner harmonieusement les mondes du
            développement et de la création artistique. */}

            Je m&apos;appelle Lenny, et je suis animé par le développement, le
            design digital, la danse & l'écriture. La fusion de toutes ces compétences
            m&apos;est utile dans chacun des projets que j&apos;entreprends. Ma soif d'apprendre est
            inépuisable, et je suis constamment à la recherche de nouvelles idées et de
            d'inspiration pour enrichir mon travail. Mon engagement dans ces domaines me
            permet d&apos;explorer et de fusionner harmonieusement les mondes du
            développement et de la création artistique.
          </p>
        </article>
        <div className={styles.skills}>
          <p>NodeJs & MySQL | MongoDb/Prisma</p>
          <p>Next.js (ReactJs) | Redux/Zustand</p>
          <p>Lua/C++ & Discord.js | Glua/Unity</p>
          <p>Figma (Design)</p>
          <p>Blender (3D)</p>
        </div>
      </div>
    </motion.div>
  );
}
