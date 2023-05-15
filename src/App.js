import axios from "axios";
import { useEffect, useState } from "react";
// import search from "./search";
import "./App.css";
import "./pokedeks.css";

function App() {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [weight, setWeight] = useState();
  const [number, setNumber] = useState(1);

  const URL = `https://pokeapi.co/api/v2/pokemon/${number}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setName(response.data.name);
        setWeight(response.data.weight);
      })
      .catch((err) => {
        window.alert(err);
      });
  }, [URL]);

  const search = () => {
    URL = `https://pokeapi.co/api/v2/pokemon/${number}`;
  };

  return (
    <div className="App">
      <h1> PokéDeks </h1>
      <input type={"number"} on onChange={(e) => setNumber(e.target.value)} />
      <button>Search</button>
      <h2> {name} </h2>
      <h3> Weight: {weight} </h3>
      <img
        src={
          data ? (
            data.sprites.other.dream_world.front_default
          ) : (
            <p> "Loading"</p>
          )
        }
      />
      <p> {name}'s ability are: </p>
      {data
        ? data.abilities.map((value, key) => {
            return <div key={key}>{value.ability.name}</div>;
          })
        : ""}
    </div>
  );
}

export default App;
