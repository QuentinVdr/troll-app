import styles from '../styles/test.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}></div>
      <div className={styles.curtainBody}>
        <div id="leftCurtain" className={styles.curtainContainer}>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
        </div>
        <div id="rightCurtain" className={styles.curtainContainer}>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
          <div className={styles.unCurtain}></div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </main>
  );
}
