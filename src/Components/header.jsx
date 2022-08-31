import React, { useEffect } from "react";
import { useState } from "react";
import "../App.css";

const Header = () => {
  const API_KEY = "b27b18620de5a2b789d6d0b01d2c2e8a";
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;
  // const form = document.getElementById("form");
  // const search = document.getElementById("search");
  // var notFound = '';
  const [searchValue, setSearchValue] = useState("");

  function getSerchResults() {
    const searchTerm = searchValue;
    const searchMovie = SEARCH_URL + searchTerm;
    if (searchTerm && searchTerm !== "") {
      (async () => {
        const response = await fetch(searchMovie);
        const data = await response.json();
        console.log(data.results);
      })();

      searchValue = "";
    }
    //  else {
    //   window.location.reload();
    // }
  }

  return (
    <>
      <header>
        <label id="home">
          <h1>MoviesApp</h1>
        </label>
        <form
          id="form"
          onSubmit={(e) => {
            e.preventDefault();
            getSerchResults();
          }}
          //onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onSubmit={getSerchResults}
          />
        </form>
      </header>
    </>
  );
};

export default Header;
