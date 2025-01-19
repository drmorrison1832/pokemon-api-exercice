import { Link } from "react-router-dom";
import Card from "../components/Card";

const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((pokemon) => {
        return (
          <Link to={"/pokemons/" + pokemon.name} key={pokemon.id}>
            <Card pokemon={pokemon} />
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
