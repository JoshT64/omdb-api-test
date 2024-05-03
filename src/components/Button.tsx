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
    <button className=" m-1 " onClick={() => getMovie()}>
      {!error ? "Search Movies" : "Error!"}
    </button>
  );
};
