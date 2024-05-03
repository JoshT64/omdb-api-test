import React, { useState } from "react";

export const Input = ({ getMovie }) => {
  const onSearch = (e) => {
    getMovie(e.target.value);
  };

  return (
    <div>
      <input
        className="p-2 m-2 rounded-md"
        onChange={(e) => onSearch(e)}
        placeholder="Movie title..."
        type="text"
      />
    </div>
  );
};
