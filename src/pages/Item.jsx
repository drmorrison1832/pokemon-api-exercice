import { useParams } from "react-router-dom";
import Card from "../components/Card";
import TypesList from "../components/TypesList";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Item = ({ data }) => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
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
    return <div>Something went wrong.</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Pokemon</h2>
      <div className="show-item">
        <Card pokemon={pokemon} />
        <TypesList types={pokemon.types} />
      </div>
    </div>
  );
};

export default Item;
