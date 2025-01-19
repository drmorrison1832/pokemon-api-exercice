import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
useParams;

const Type = ({ data, setData }) => {
  const { type } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log("Pokémon type is", type);

  useEffect(() => {
    async function getData() {
      console.log("Fetching Pokemons of this type...");

      try {
        let response = await axios.get(
          `https://pokeapi.co/api/v2/type/${type}`
        );

        let pokemons = [];
        for (let pokemon of response.data.pokemon) {
          pokemons.push(pokemon.pokemon);
        }

        for (let pokemon of pokemons) {
          const response = await axios.get(pokemon.url);
          pokemon.id = response.data.id;
          pokemon.image =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            response.data.id +
            ".png";
          pokemon.types = [];

          for (let type of response.data.types) {
            pokemon.types.push(type.type.name);
          }
        }

        setData(pokemons);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(true);
      }
    }
    getData();
  }, [setData, type]);

  if (error) {
    return <div>Something went wrong.</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="galery">
      <h2>Pokemons</h2>
      <Cards data={data} />
    </div>
  );
};

export default Type;
