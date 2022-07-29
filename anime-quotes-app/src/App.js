import "./styles.css";
import Quote from "./Quotes";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [quote, setQuote] = useState({
    anime: "Naruto",

    character: "Madara",
    quote: "The world is full of suffering"
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
    </div>
  );
}
