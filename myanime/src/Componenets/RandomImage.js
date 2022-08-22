import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../randomimage.css";
function RandomImage() {
  const [image, setImage] = useState("");

  const Generate = () => {
    axios
      .get("https://api.catboys.com/img")
      .then((res) => setImage(res.data.url));
  };
  return (
    <div className="image__generator">
      <img className="image" src={image} alt="" />
      <br />

      <button type="submit" onClick={Generate}>
        {" "}
        Generate Random Image{" "}
      </button>
      <a className="link" href={image} download="image.png">
        {" "}
        Download{" "}
      </a>
      <Link className="home" to="/">
        {" "}
        Home{" "}
      </Link>
    </div>
  );
}
export default RandomImage;
