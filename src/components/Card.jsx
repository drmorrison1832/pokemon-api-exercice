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

// const [data, setData] = useState();
//   const [isLoading, setIsLoading] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function getData() {
//       console.log("Fetching Pokemon details...");
//       try {
//         let response = await axios.get(pokemon.url);

//         pokemon.types = [];
//         for (let type of response.data.types) {
//           pokemon.types.push(type.type.name);
//         }

//         console.log("Fetched");

//         setData(response.data.results);
//         setIsLoading(false);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching data:", error.message);
//         setIsLoading(false);
//         setError(true);
//       }
//     }
//   }, []);

//   if (isLoading) {
//     return <div className="loader"></div>;
//   }
//   if (error) {
//     return <div className="error">Something went wrong</div>;
//   }
