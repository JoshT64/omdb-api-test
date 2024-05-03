import React, { useState } from "react";

interface Movie {
  Title: string;
  Year: string;
  Type: string;
  imdbDB?: string;
  Poster: string;
}

export const Table = ({ movieData }) => {
  const [sortedMovies, setSortedMovies] = useState<Movie[]>([]);
  const [sortAscending, setSortAscending] = useState(true);

  const sortMovies = (field) => {
    const sorted = [...movieData.Search].sort((a, b) =>
      sortAscending
        ? a[field].localeCompare(b[field])
        : b[field].localeCompare(a[field])
    );
    setSortedMovies(sorted);
    setSortAscending(!sortAscending);
  };

  console.log(movieData.Search);

  const renderMovies = () => {
    const moviesToRender =
      sortedMovies.length > 0 ? sortedMovies : movieData.Search;
    if (!moviesToRender) return;

    return moviesToRender.map((movie) => {
      return (
        <div className="flex flex-col items-center">
          <div
            onClick={() => sortMovies("Title")}
            className=" hover:text-blue-300 cursor-pointer underline"
          >
            <p className="text-wrap text-center sm:w-[15vw]">{movie.Title}</p>
          </div>
          <div
            className=" hover:text-blue-300 cursor-pointer "
            onClick={() => sortMovies("Year")}
          >
            <p>Year: {movie.Year}</p>
          </div>
          <div
            className=" hover:text-blue-300 cursor-pointer "
            onClick={() => sortMovies("Type")}
          >
            <p> Type: {movie.Type}</p>
          </div>
          <div>
            <p>{movie.imdbDB}</p>
          </div>
          <div>
            <img src={`${movie.Poster}`}></img>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex gap-2 justify-center flex-wrap">{renderMovies()}</div>
  );
};
