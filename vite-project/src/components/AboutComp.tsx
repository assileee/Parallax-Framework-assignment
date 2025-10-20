// src/components/AboutComp.tsx
import styles from "./AboutComp.module.scss";
import woman from "../assets/woman.png";

export default function AboutComp() {
  return (
    <section className={styles.about}>
      <h2>Some
      <br/>
      Medieval
      </h2>
      <img src={woman} className={styles.woman} alt="japanese woman" />
      <div className={styles.redDot}></div>
      
    
    </section>
  );
}
