import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Types = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      console.log("Fetching basic data...");

      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        console.log("Data fetched");

        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("getData interrupted:", error.message);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="galery">
      <h2>Types</h2>

      <div className="types">
        {data.map((type, index) => {
          return (
            <div key={index} className="type">
              <Link to={`/types/${type.name}`}>{type.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Types;
