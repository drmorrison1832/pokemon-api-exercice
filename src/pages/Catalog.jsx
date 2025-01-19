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

        for (let result of response.data.results) {
          const response = await axios.get(result.url);
          result.id = response.data.id;
          result.image =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            result.id +
            ".png";

          result.types = [];
          for (let type of response.data.types) {
            result.types.push(type.type.name);
          }
        }
        console.log("Fetched");
        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setIsLoading(false);
        setError(true);
      }
    }
    getData();
  }, []);

  if (error) {
    return <div className="error">Something went wrong</div>;
  }

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return <Cards data={data} />;
};

export default Catalog;
