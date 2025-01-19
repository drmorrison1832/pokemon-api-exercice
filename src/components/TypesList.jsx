import { Link } from "react-router-dom";

const TypesList = ({ types }) => {
  return (
    <div className="types-list">
      {types.map((type, index) => {
        return (
          <div className="type-item" key={index}>
            <Link to={`/types/${type}`}>{type}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default TypesList;
