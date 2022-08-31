import ReactDOM from "react-dom/client";
import "../App.css";

const ShowMovies = ({
  title,
  vote_average,
  poster_path,
  overview,
  search,
  error,
}) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  return (
    <div className="movie">
      <img src={IMAGE_PATH + poster_path} alt={title} />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <span className="rating">{vote_average}</span>
      </div>
      <div className="overview">
        {overview}
        <button class="readMore" id="readMore">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ShowMovies;
