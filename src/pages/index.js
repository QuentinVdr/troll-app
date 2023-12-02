import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Content</h1>
      </div>
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
    </main>
  );
}
