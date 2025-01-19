import "./App.css";

// Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// Pages
import Home from "./pages/Home";
import Item from "./pages/Item";
import Catalog from "./pages/Catalog";
import Types from "./pages/Types";
import Type from "./pages/Type";

// Components
import Header from "./components/Header";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
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

        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(true);
      }
    }
    getData();
  }, []);

  if (error) {
    return <div>Something went wrong.</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Catalog data={data} />} />
          <Route path="/pokemons/:name" element={<Item data={data} />} />
          <Route path="/types/" element={<Types />} />
          <Route
            path="/types/:type"
            element={<Type data={data} setData={setData} />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
