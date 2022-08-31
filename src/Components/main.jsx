import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ShowMovies from "./showMovies";
import "../App.css";
import axios from "react-axios";

const Main = () => {
  const API_KEY = "b27b18620de5a2b789d6d0b01d2c2e8a";
  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;
  const [searchValue, setSearchValue] = useState("");
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState("");

  const getPopularMovies = (url) => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data.results);
          console.log(movie.length);
        });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPopularMovies(API_URL);
  }, [movie]);

  const getSerchResults = (e) => {
    e.preventDefault();
    const searchTerm = searchValue;
    const searchMovie = SEARCH_URL + searchTerm;
    if (searchTerm && searchTerm !== "") {
      //async code
      // (() => {
      //   fetch(searchMovie)
      //     .then((res) => res.json())
      //     .then((data) => setMovie(data.results));
      // })();

      getPopularMovies(searchMovie);

      // if (movie.length === 0) {
      //   console.log("movie not found");
      // }

      searchValue = "";
    } else {
      window.location.reload();
    }
  };

  //Asyc code
  // useEffect(() => {
  //   const getMovies = async () => {
  //     const response = await fetch(API_URL);
  //     const data = await response.json();
  //     setMovie(data.results);
  //   };
  //   getMovies();
  // }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <header>
        <label id="home">
          <h1>MoviesApp</h1>
        </label>
        <form
          id="form"
          //Double function call
          // onSubmit={(e) => {
          //   e.preventDefault();
          //   getSerchResults();
          // }}
          onSubmit={getSerchResults}
        >
          <input
            type="text"
            id="search"
            className="search"
            placeholder="Search"
            value={searchValue}
            onChange={handleChange}
          />
        </form>
      </header>
      <main id="main">
        {movie.map((movieData) => {
          const {
            title,
            overview,
            vote_average,
            poster_path,
            id,
            release_date,
            popularity,
          } = movieData;
          return (
            <ShowMovies
              title={title}
              overview={overview}
              vote_average={vote_average}
              poster_path={poster_path}
              search={searchValue}
              error={error}
            />
          );
        })}
      </main>
    </>
  );
};

export default Main;
