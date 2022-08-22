import "./styles.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Quotes from "./Componenets/Quotes";
import Home from "./Componenets/Home";
import Facts from "./Componenets/Facts";
import RandomImage from "./Componenets/RandomImage";
import Database from "./Componenets/Database";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/" element={<Home />} />
          <Route path="/Facts" element={<Facts />} />
          <Route path="/RandomImage" element={<RandomImage />} />
          <Route path="/Database" element={<Database />} />

          {
            // <Route path="/news" element={<News /> } />
            //  <Route path="/database" element={<Database /> } />
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}
