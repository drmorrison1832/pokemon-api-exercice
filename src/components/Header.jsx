import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="Logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokémon"
          />
        </Link>
      </div>
      <nav>
        <span>
          <Link to="/pokemons">Pokemons</Link>
        </span>
        <span>
          <Link to="/types">Types</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
