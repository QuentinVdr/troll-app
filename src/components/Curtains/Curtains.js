import styles from './curtains.module.css';

export default function Curtains({ children, isOpen }) {
  const curtainBodyClass = isOpen ? styles.curtainBodyOpen : styles.curtainBody;

  return (
    <>
      <div className={styles.content}>{children}</div>
      <div className={curtainBodyClass}>
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
