import "./styles.css";

import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

function App() {
  const [shortenedLink, setShortenedLink] = useState("");
  const [userInput, setUserInput] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setShortenedLink(response.data.result.full_short_link);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="card--1">
      <div className="card">
        <h1 className="heading"> Our URL Shortner</h1>
        <div>
          <span className="input">
            <input
              className="input--box"
              type="text"
              placeholder="Enter link to be shortened"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
          </span>

          <button
            className="submit"
            onClick={() => {
              fetchData();
            }}
          >
            Submit URL
          </button>
          <div className=" mt-5">
            {shortenedLink}
            <CopyToClipboard text={shortenedLink}>
              <button className="clipboard">Copy URL to Clipboard</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
