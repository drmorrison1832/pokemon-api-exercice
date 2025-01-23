import Cards from "../components/Cards";

import axios from "axios";
import { useState, useEffect } from "react";

const Catalog = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      console.log("Fetching some Pokemons...");

      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");

        let pokemons = response.data.results;
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
  }, []);

  if (isLoading) {
    return <div className="loader"></div>;
  }
  if (error) {
    return <div className="error">Something went wrong</div>;
  }
  return <Cards data={data} />;
};

export default Catalog;
