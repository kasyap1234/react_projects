import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css"; 

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  function Search(e) {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=j-UqKYdWVaDMSfwlQSCg2b5DMPYvW5JMhSN33_6AKL4`
      )
      .then((response) => {
        setPhotos(response.data);
        setFilteredPhotos(response.data);
        console.log(response.data);
        // console.log(response.data.results[0].urls.small)
      })
      .catch((error) => {
        setError(error);
      });
      e.preventDefault(); 
     

  }

  if (error) {
    return <p>There was an error loading the photos.</p>;
  }

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="photo-gallery">
      <form onSubmit={Search}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
          placeholder="search here"
          className="input-bar"
        />
        <button  className="search" type="submit" onClick={Search}>
          Search
        </button>
      </form>
      {  filteredPhotos.results ? filteredPhotos.results.map((photo, index) => (
  <img src={photo.urls.small} key={index} />
)) : null }

   


     
    </div>
  );
}

export default PhotoGallery;
