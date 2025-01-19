import { useParams } from "react-router-dom";
import Card from "../components/Card";
import TypesList from "../components/TypesList";
import axios from "axios";
import { useState, useEffect } from "react";

const Item = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      console.log("Fetching", name + "...");
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );

        let result = {};
        result.name = response.data.name;
        result.id = response.data.id;
        result.image =
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          result.id +
          ".png";
        result.types = [];
        for (let type of response.data.types) {
          result.types.push(type.type.name);
        }
        console.log("Fetched");
        setPokemon(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(true);
      }
    }
    getData();
  }, [name]);

  if (error) {
    return <div className="error">Something went wrong</div>;
  }
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div>
      <div className="show-item">
        <Card pokemon={pokemon} />
        <TypesList types={pokemon.types} />
      </div>
    </div>
  );
};

export default Item;
