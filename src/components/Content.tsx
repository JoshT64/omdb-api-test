import React from "react";

export const Content = ({ foundMovies }) => {
  return (
    <>
      {foundMovies.length === 0 && (
        <div>
          <h1 className="text-md font-mono">Input a movie and search!</h1>
          <p className="font-mono">(mobile responsive !)</p>
        </div>
      )}
      {foundMovies.Error && <h1>{foundMovies.Error}</h1>}
    </>
  );
};
