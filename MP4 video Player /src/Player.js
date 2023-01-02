import { useState, useRef } from "react";
const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [link, setLink] = useState("");

  const Video = useRef(null);
  const Toggle = () => {
    if (isPlaying) {
      Video.current.pause();
    } else {
      Video.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const empty = "";

  const removeInput = () => {
    setLink(empty);
  };

  return (
    <div>
      <h1> MP4 Player </h1>

      <input
        type="text"
        className="input--bar"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button className="clear--button" onClick={removeInput}>
        {" "}
        Clear{" "}
      </button>

      <video ref={Video} width="100%" height="100%" controls>
        {" "}
        <source src={link} type="video/mp4" />
      </video>
      <button className="Toggle" onClick={Toggle}>
        {" "}
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};
export default Player;
