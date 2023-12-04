import YouTube from 'react-youtube';

export const YoutubePlayer = ({ videoId }) => {
  const onReady = (event) => {
    const player = event.target;
    player.playVideo();
  };

  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };

  return <YouTube videoId={videoId} onReady={onReady} onError={onError} />;
};
