import { YoutubePlayer } from '@components/YoutubePlayer/YoutubePlayer';
import { useCurtains } from '@contexts/CurtainsContext';
import { cringeVideos } from '@data/cringeVideo';
import styles from '@styles/index.module.css';
import { useState } from 'react';

export default function Home() {
  const { isOpen } = useCurtains();
  const getRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * cringeVideos.length);
    return cringeVideos[randomIndex];
  };
  const [cringeVideo, setCringeVideo] = useState(getRandomVideo());

  return (
    <main className={styles.content}>
      <div className="align-center mt-20 flex justify-center">
        <h1 className="w-fit text-4xl font-bold tracking-tight text-gray-900 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] sm:text-6xl">
          Bienvenue dans le cirque
        </h1>
      </div>
      <div className="mt-20 flex justify-center">{!!isOpen && <YoutubePlayer videoId={cringeVideo.id} />}</div>
    </main>
  );
}
