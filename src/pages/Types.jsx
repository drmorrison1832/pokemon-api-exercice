import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Types = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      console.log("Fetching types...");

      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("getData interrupted:", error.message);
        setIsLoading(false);
        setIsLoading(false);
        setError(true);
      }
    }
    getData();
  }, []);
  console.log("Fetched");

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Something went wrong</div>;
  }
  return (
    <div className="types">
      {data.map((type, index) => {
        return (
          <div key={index} className="type-item">
            <Link to={`/types/${type.name}`}>{type.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Types;
