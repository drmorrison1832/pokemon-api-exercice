import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
useParams;

const Type = () => {
  const { type } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      console.log("Fetching Pokemons of type", type + "...");

      try {
        let response = await axios.get(
          `https://pokeapi.co/api/v2/type/${type}`
        );

        let pokemons = [];
        for (let pokemon of response.data.pokemon) {
          pokemons.push(pokemon.pokemon);
        }

        for (let pokemon of pokemons) {
          pokemon.id = pokemon.url.split("/")[6];
          pokemon.image =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            pokemon.id +
            ".png";
        }

        console.log("Fetched");

        setData(pokemons);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setIsLoading(false);
        setError(true);
      }
    }
    getData();
  }, [setData, type]);

  if (isLoading) {
    return <div className="loader"></div>;
  }
  if (error) {
    return <div className="error">Something went wrong</div>;
  }
  return (
    <div className="galery">
      <Cards data={data} />
    </div>
  );
};

export default Type;
