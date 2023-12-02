import styles from './curtains.module.css';

export default function Curtains({ children }) {
  return (
    <>
      <div className={styles.content}>{children}</div>
      <div className={styles.curtainBody}>
        <div id={styles.leftCurtains} className={styles.curtainContainer}>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
        </div>
        <div id={styles.rightCurtains} className={styles.curtainContainer}>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
          <div className={styles.curtain}></div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </>
  );
}
