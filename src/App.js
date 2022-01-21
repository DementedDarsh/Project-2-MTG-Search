import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import Home from "./Components/Home/Home";
import { Link, Routes, Route } from "react-router-dom";
import SearchResults from "./Components/Results/SearchResults";
import NotFound from "./Components/Home/NotFound";
import { Outlet } from "react-router";
import BasicSearch from "./Components/Home/BasicSearch";
import { useState } from "react";

function App() {
const [cards, setCards] = useState([])

  return (
    <div>
      <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/searchresults">
          <h1>Search Results</h1>
        </Link>
      </nav>
      <Routes>
        <Route path="/*" element={<Home setCards={setCards}/>} />
        <Route path="/searchresults" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
