import { Link } from "react-router-dom";
import Card from "../components/Card";

const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map((pokemon) => {
        return <Card pokemon={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
};

export default Cards;
