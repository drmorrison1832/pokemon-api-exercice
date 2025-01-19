const Card = ({ pokemon }) => {
  return (
    <div key={pokemon.id} className="card">
      <div className="pokemon-name">{pokemon.name}</div>
      <div className="pokemon-image">
        <img src={pokemon.image} alt="" />
      </div>
    </div>
  );
};

export default Card;
