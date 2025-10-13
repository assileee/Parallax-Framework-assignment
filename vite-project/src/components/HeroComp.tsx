// src/components/HeroComp.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./HeroComp.module.scss";

import bg from "../assets/bg.png";
import lake from "../assets/02.png";
import house from "../assets/04.png";

export default function HeroComp() {
	const { scrollY } = useScroll();

	// Different scroll speeds
	const superSlowElement = useTransform(scrollY, [0, 5000], [0, -300]);    // moon
	const slowElement = useTransform(scrollY, [0, 5000], [0, -1900]);        // background
	const fasterElement = useTransform(scrollY, [0, 5000], [0, -2100]);      // lake
	const evenFasterElement = useTransform(scrollY, [0, 5000], [0, -2300]);  // house
	const titleElement = useTransform(scrollY, [0, 5000], [0, -2800]);       // title

	return (
		<section className={styles.scene}>
			{/* moon + moonLight */}
			<motion.div
				style={{ y: superSlowElement }}
				className={styles.moonLight}
			></motion.div>
			<motion.div
				style={{ y: superSlowElement }}
				className={styles.moon}
			></motion.div>

			{/* background mountains */}
			<motion.img
				style={{ y: slowElement }}
				src={bg}
				className={styles.bg}
				alt="background mountains"
			/>

			{/* lake */}
			<motion.img
				style={{ y: fasterElement }}
				src={lake}
				className={styles.lake}
				alt="lake of the mountain"
			/>

			{/* house */}
			<motion.img
				style={{ y: evenFasterElement }}
				src={house}
				className={styles.house}
				alt="house on the lake"
			/>

			{/* title */}
			<motion.h1
				style={{ y: titleElement }}
				initial={{ opacity: 0, y: -90 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.1, delay: 0.5 }}
				className={styles.title}
			>
				Medieval Sharpness
			</motion.h1>
		</section>
	);
}
