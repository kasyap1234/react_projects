import React, { useState } from "react";
import "./styles.css";
import { CSSTransition } from "react-transition-group";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const options = ["rock", "paper", "scissors"];

const App = () => {
  const [playerOption, setPlayerOption] = useState("");
  const [computerOption, setComputerOption] = useState("");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");

  const handlePlay = (playerOption) => {
    let computerOption;
    if (difficulty === "easy") {
      computerOption = options[Math.floor(Math.random() * options.length)];
    } else if (difficulty === "medium") {
      computerOption =
        options[Math.floor(Math.random() * options.length - 1) + 1];
    } else {
      computerOption =
        options[Math.floor(Math.random() * options.length - 2) + 2];
    }

    setPlayerOption(playerOption);
    setComputerOption(computerOption);

    if (playerOption === computerOption) {
      setResult("It's a tie!");
    } else if (
      (playerOption === "rock" && computerOption === "scissors") ||
      (playerOption === "paper" && computerOption === "rock") ||
      (playerOption === "scissors" && computerOption === "paper")
    ) {
      setPlayerScore(playerScore + 1);
      setResult("You win!");
    } else {
      setComputerScore(computerScore + 1);
      setResult("You lose!");
    }
    setShowResult(true);
   
  };

  

  const handleReset = () => {
    setPlayerOption("");
    setComputerOption("");
    setResult("");
    setPlayerScore(0);
    setComputerScore(0);
  };

  return (
    <div className="App">
      <h1>Rock, Paper, Scissors</h1>
      <div className="difficulty">
        <p>Difficulty:</p>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="options">
        <div className="option" onClick={() => handlePlay("rock")}>
          <FaHandRock size={50} color={"#f4a460"} />
          <p>Rock</p>
       
         
          </div>
          <div className="option" onClick={() => handlePlay("paper")}>
            <FaHandPaper size={50} color={"#add8e6"} />
            <p>Paper</p>
          </div>
          <div className="option" onClick={() => handlePlay("scissors")}>
            <FaHandScissors size={50} color={"#ffa07a"} />
            <p>Scissors</p>
          </div>
        </div>
        <CSSTransition
          in={showResult}
          timeout={300}
          classNames="result"
          unmountOnExit
          onExited={() => setShowResult(false)}
        >
          <div className="result">
            <h2>Result</h2>
            <p>You chose: {playerOption}</p>
            <p>Computer chose: {computerOption}</p>
            <p>{result}</p>
            <p>Player Score: {playerScore}</p>
            <p>Computer Score: {computerScore}</p>
          </div>
        </CSSTransition>
        <div className="reset">
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
  };

  export default App;



