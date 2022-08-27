import "./styles.css";
import Reactplayer from "react-player";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h1> React Video Player </h1>

      <input
        type="text"
        className="input"
        placeholder="enter url"
        onChange={(e) => setInput(e.target.value)}
      />

      <Reactplayer url={input} />
    </div>
  );
}
