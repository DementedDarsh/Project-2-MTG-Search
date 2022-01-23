import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import Home from "./Components/Home/Home";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import SearchResults from "./Components/Results/SearchResults";
import NotFound from "./Components/Home/NotFound";
import { Outlet } from "react-router";
import BasicSearch from "./Components/Home/BasicSearch";
import { useState } from "react";
import AdvancedSearch from "./Components/Home/AdvancedSearch";

function App() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("")
  const [colors, setColors] = useState("blue")
  const colorList = ["White", "Blue", "Black", "Red", "Green"];
  const [manaValue, setManaValue] = useState("")
  const [checkedState, setCheckedState] = useState(
    new Array(colorList.length).fill(false)
  );
  const colorsString = (checkedState[0] === true ? "white," : "")+(checkedState[1] === true ? "blue," : "")+(checkedState[2] === true ? "black," : "")+(checkedState[3] === true ? "red," : "")+(checkedState[4] === true ? "green," : "")

  const queryUrl = `https://api.magicthegathering.io/v1/cards?name=${query}&type=${type}&colors=${colorsString}&cmc=${manaValue}`;

  return (
    <div>
      <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/searchresults">
          <h1>Search Results</h1>
        </Link>
        <Link to="/advanced">
          <h1>Advanced Search</h1>
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home setCards={setCards} query={query} setQuery={setQuery} queryUrl={queryUrl}/>
          }
        />
                <Route
          path="/advanced"
          element={
            <AdvancedSearch setCards={setCards} queryUrl={queryUrl} query={query} setQuery={setQuery} checkedState = {checkedState} setCheckedState={setCheckedState} setColors={setColors} colorList={colorList}/>
          }
        />
        <Route
          path="/searchresults/:search"
          element={
            <SearchResults
              cards={cards}
              setCards={setCards}
              queryUrl={queryUrl}
              setQuery={setQuery}
            />
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;
