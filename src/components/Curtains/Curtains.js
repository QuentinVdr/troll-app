import Image from 'next/image';
import styles from './curtains.module.css';

export default function Curtains({ children, isOpen, updateCurtains }) {
  const curtainBodyClass = isOpen ? styles.curtainBodyOpen : styles.curtainBody;

  return (
    <>
      {children}
      <div className={curtainBodyClass}>
        <Image
          src={'/rope.svg'}
          height={180}
          width={120}
          className="absolute right-20 z-10 cursor-pointer"
          alt="rope to open the curtain"
          onClick={() => updateCurtains(!isOpen)}
        />
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
