import axios from "axios";
import { useState } from "react";

import "../facts.css";
function Facts() {
  const [value, setValue] = useState("");
  const [fact, setFact] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`https://anime-facts-rest-api.herokuapp.com/api/v1/:${value}`)
      .then((res) => console.log(res));
  };
  return (
    <div className="facts">
      <div className="input__bar">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="search__button"
          type="submit"
          onClick={submitHandler}
        >
          {" "}
          Search{" "}
        </button>
      </div>
    </div>
  );
}
export default Facts;
