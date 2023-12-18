import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './curtains.module.css';

export default function Curtains({ children, isOpen, updateCurtains }) {
  const [isOpenAfterAnimation, setIsOpenAfterAnimation] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      setIsOpenAfterAnimation(isOpen);
    } else {
      timeoutId = setTimeout(() => {
        setIsOpenAfterAnimation(isOpen);
      }, 3000);
    }
    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen]);

  const curtainBodyClass = isOpen ? styles.curtainBodyOpen : styles.curtainBody;

  return (
    <>
      {isOpenAfterAnimation && children}
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
