import "../quote.css";
import Quote from "./Quote";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Quotes() {
  const [quote, setQuote] = useState({
    anime: "Naruto",

    character: "Madara",
    quote:
      "People cannot show each other their true feelings fear suspicion and resentment never subside."
  });
  const FetchQuote = () => {
    axios
      .get("https://animechan.vercel.app/api/random")
      .then((response) => setQuote(response.data));
  };

  return (
    <div className="App">
      <Quote quote={quote} />

      <button onClick={FetchQuote}> Generate New Quote </button>
      <Link className="quotes-home" to="/">
        {" "}
        Home{" "}
      </Link>
    </div>
  );
}
