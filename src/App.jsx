import "./App.css";

// Modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Item from "./pages/Item";
import Catalog from "./pages/Catalog";
import Types from "./pages/Types";
import Type from "./pages/Type";

// Components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <section className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Catalog />} />
          <Route path="/pokemons/:name" element={<Item />} />
          <Route path="/types/" element={<Types />} />
          <Route path="/types/:type" element={<Type />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
