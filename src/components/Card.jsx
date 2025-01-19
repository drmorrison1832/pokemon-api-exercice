import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <Link to={"/pokemons/" + pokemon.name}>
      <div key={pokemon.id} className="card">
        <div className="pokemon-name">{pokemon.name}</div>

        <div className="pokemon-image">
          <img src={pokemon.image} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
