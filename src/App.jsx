import "./App.css";

// Modules
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
  return (
    <Router>
      <main>
        <p>Main</p>
      </main>
    </Router>
  );
}

export default App;
