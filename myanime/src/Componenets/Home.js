import "../home.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Home() {
  return (
    <div className="home__bar">
      <h1> My anime App </h1>
      <div className="navbar">
        <Link className="quotes" to="/Quotes">
          {" "}
          Random anime Quotes{" "}
        </Link>
        <Link className="facts__link" to="/Facts">
          {" "}
          Anime Facts{" "}
        </Link>
        <Link className="random__image" to="/RandomImage">
          Random Anime image{" "}
        </Link>
        <Link className="database__link" to="/Database">
          {" "}
          Anime Search{" "}
        </Link>
      </div>
    </div>
  );
}
export default Home;
