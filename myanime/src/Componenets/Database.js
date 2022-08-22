import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../database.css";

import MainContent from "./MainContent";

function App() {
  const [animeList, SetAnimeList] = useState([]);

  const [search, setSearch] = useState("");

  const HandleSearch = (e) => {
    e.preventDefault();

    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    SetAnimeList(temp.results);
  };

  return (
    <div className="App">
      <div className="content-wrap">
        <Link className="database-home" to="/">
          {" "}
          Home{" "}
        </Link>
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
