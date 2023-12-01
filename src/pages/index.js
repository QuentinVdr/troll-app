import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.rxWorld}>
        <section className={styles.rnOuter}>
          <section className={styles.aoTable}>
            <div className={styles.aoTableCell}>
              <h1>vertical & horizontal centering with display:table</h1>
              <p>With connected subline</p>
            </div>
          </section>

          <div className={styles.rnInner}>
            <div className={styles.rnUnit}></div>
            <div className={styles.rnUnit}></div>
            <div className={styles.rnUnit}></div>
            <div className={styles.rnUnit}></div>
            <div className={styles.rnUnit}></div>
            <div className={styles.rnUnit}></div>
            <div className={styles.rnUnit}></div>
            <div className={styles.rnUnit}></div>
            <div className={styles.rnUnit}></div>
            <div className={styles.rnUnit}></div>
          </div>
        </section>
      </div>
    </main>
  );
}
