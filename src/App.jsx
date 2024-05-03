import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useState } from "react";
import { Table } from "./components/Table";

function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);

  return (
    <div>
      <div className="input-button">
        <Input getMovie={(data) => setMovieTitle(data)} />
        <Button
          movieData={(data) => setFoundMovies(data)}
          movieTitle={movieTitle}
        />
      </div>
      <Table movieData={foundMovies} />
      {foundMovies.length === 0 && (
        <div>
          <h1 className="text-md font-mono">Input a movie and search!</h1>
          <p className="font-mono">(mobile responsive !)</p>
        </div>
      )}
    </div>
  );
}

export default App;
