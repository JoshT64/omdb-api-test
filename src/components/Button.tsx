import React, { useState } from "react";
import { fetchMovie } from "../api/fetchMovie";

export const Button = ({ movieTitle, movieData }) => {
  const [error, setError] = useState(false);

  const getMovie = () => {
    fetchMovie(movieTitle)
      .then((data) => {
        movieData(data);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  };

  return (
    <button className="sm:w-[20vw] m-2 " onClick={() => getMovie()}>
      {!error ? "Search Movies" : "Error!"}
    </button>
  );
};
