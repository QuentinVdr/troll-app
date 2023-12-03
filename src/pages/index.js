import styles from '@styles/index.module.css';

export default function Home() {
  return (
    <main className={styles.content}>
      <div className="align-center mt-20 flex justify-center">
        <h1 className="w-fit text-4xl font-bold tracking-tight text-gray-900 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] sm:text-6xl">
          Bienvenue dans le cirque
        </h1>
      </div>
    </main>
  );
}
