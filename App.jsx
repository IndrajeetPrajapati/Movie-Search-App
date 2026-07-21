import { useState } from "react";
import "./App.css";


import bahubali from "./images/bahubali.jpg";
import krish from "./images/Krish.jpg";
import pushpa from "./images/Pushpa.jpg";
import jawan from "./images/jawam.jpg";
import pathan from "./images/pathan.jpg";
import toxic from "./images/toxic.jpg";
import hunter from "./images/hunter.jpg";
import kgf from "./images/kgf.jpg";
import Dhamaal from "./images/dhamal.jpg";
import Bhut from "./images/Bhut.jpg";
import Singham from "./images/Singham.jpg";
import sahu from "./images/sahu.jpg";


function App() {
  const [search, setSearch] = useState("");

  const movies = [
  { name: "Bahubali 2", type: "Movie", image: bahubali },
  { name: "Krish 2", type: "Movie", image: krish },
  { name: "Pushpa 2", type: "Movie", image: pushpa },
  { name: "Jawan", type: "Movie", image: jawan },
  { name: "Pathan", type: "Movie", image: pathan },
  { name: "Toxic", type: "Movie", image: toxic },
  { name: "Hunter", type: "Web Series", image: hunter },
  { name: "KGF 2", type: "Movie", image: kgf },
  { name: "Dhamaal 4", type: "Movie", image: Dhamaal },
  { name: "Bhoot Bangla 2", type: "Movie", image: Bhut },
  { name: "Singham", type: "Movie", image: Singham },
  { name: "Saaho", type: "Movie", image: sahu },

];

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav>
        <h1>Movie Search App</h1>

        <input
          type="text"
          placeholder="Search Movie..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>

      <main className="card">
        {filteredMovies.map((movie, index) => (
          <div key={index}>
            <img src={movie.image} alt={movie.name} />
            <p>{movie.type}</p>
            <h3>{movie.name}</h3>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;