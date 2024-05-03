import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useState } from "react";
import { Table } from "./components/Table";
import { Content } from "./components/Content";

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
      <Content foundMovies={foundMovies} />
    </div>
  );
}

export default App;
