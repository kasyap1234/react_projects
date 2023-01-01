import { useState, useRef } from "react";
const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const Video = useRef(null);
  const Toggle = () => {
    if (isPlaying) {
      Video.current.pause();
    } else {
      Video.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <video ref={Video} width="100%" height="100%" controls>
        {" "}
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>
      <button onClick={Toggle}> {isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};
export default Player;
