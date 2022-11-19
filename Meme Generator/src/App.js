import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [topText, setToptext] = useState("");
  const [bottomText, setBottomText] = useState("");

  const [allMemeImgs, setAllMemeImgs] = useState([]);
  const [RandomImage, setRandomImage] = useState("");

  useEffect(() => {
    console.log("api loading ");
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setAllMemeImgs(response.data.memes));
    console.log("api loaded");
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * allMemeImgs.length);
    const randMemeImgUrl = allMemeImgs[randNum].url;
    setRandomImage(randMemeImgUrl);
    console.log("submitted ");
  };

  return (
    <div className="App">
      <h1> Meme Generator </h1>
      <form onSubmit={submit}>
        <input
          type="text"
          className="top"
          onChange={(f) => {
            setToptext(f.target.value);
          }}
        />
        <input
          type="text"
          className="bottom"
          onChange={(e) => {
            setBottomText(e.target.value);
          }}
        />

        <br />

        <button className="generate"> Generate </button>
      </form>

      <div className="display">
        <h2 className="top"> {topText} </h2>

        <img src={RandomImage} alt="" />

        <h2 className="bottom"> {bottomText} </h2>
      </div>
    </div>
  );
}
