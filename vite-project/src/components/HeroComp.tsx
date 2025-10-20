import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeroComp.module.scss";

import bg from "../assets/bg.png";
import lake from "../assets/02.png";
import house from "../assets/04.png";
import nearMountainsLeft from "../assets/05.png";
import nearMountainsRight from "../assets/03.png";
import blossoms from "../assets/06.png";
import upCloseTrees from "../assets/treees.png"

export default function HeroComp() {
  const { scrollY } = useScroll();

  // Desktop parallax speeds (no mobile tweaks)
  const superSlowElement  = useTransform(scrollY, [0, 5000], [0, -300]);   // moon + halo
  const slowElement       = useTransform(scrollY, [0, 5000], [0, -1800]);  // far background
  const fasterElement     = useTransform(scrollY, [0, 5000], [0, -2000]);  // lake
  const nearLeftElement   = useTransform(scrollY, [0, 5000], [0, -2150]);  // near L
  const nearRightElement  = useTransform(scrollY, [0, 5000], [0, -2200]);  // near R
  const evenFasterElement = useTransform(scrollY, [0, 5000], [0, -2300]);  // house
  const titleElement      = useTransform(scrollY, [0, 5000], [0, -2500]);  // title
// foreground – moves fastest
  const foregroundElement = useTransform(scrollY, [0, 5000], [0, -2600]);

  return (
    <section className={styles.scene}>
      {/* halo + moon */}
      <motion.div style={{ y: superSlowElement }} className={styles.moonLight} />
      <motion.div style={{ y: superSlowElement }} className={styles.moon} />

      {/* far background band */}
      <motion.img
        style={{ y: slowElement }}
        src={bg}
        className={styles.bg}
        alt="background mountains"
      />
      <motion.img
        style={{ y: foregroundElement }}
        src={upCloseTrees}
        className={styles.upCloseTrees}
        alt="up-close trees"
      />

      {/* lake */}
      <motion.img
        style={{ y: fasterElement }}
        src={lake}
        className={styles.lake}
        alt="lake"
      />
      {/* blossom tree in front */}
      <motion.img
      style={{ y: evenFasterElement }}
      src={blossoms}
      className={styles.blossoms}
      alt="blossom tree foreground"
      />

      {/* near mountains */}
      <motion.img
        style={{ y: nearLeftElement }}
        src={nearMountainsLeft}
        className={styles.nearMountainsLeft}
        alt="left mountains"
      />
      <motion.img
        style={{ y: nearRightElement }}
        src={nearMountainsRight}
        className={styles.nearMountainsRight}
        alt="right mountains"
      />

      {/* house */}
      <motion.img
        style={{ y: evenFasterElement }}
        src={house}
        className={styles.house}
        alt="house on the lake"
      />

      {/* title (if you want it fixed like figma; remove if not needed) */}
      <motion.h1
        style={{ y: titleElement }}
        className={styles.title}
        initial={{ opacity: 0, y: -90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5 }}
      >
        Medieval Sharpness
      </motion.h1>
    </section>
  );
}
