import { Link } from "react-router-dom";
import Cards from "../components/Cards";
import Card from "../components/Card";

const Catalog = ({ data }) => {
  return (
    <div className="galery">
      <h2>Pokemons</h2>
      <Cards data={data} />
    </div>
  );
};

export default Catalog;
