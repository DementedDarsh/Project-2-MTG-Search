import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";
import Home from "./Components/Home/Home";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import SearchResults from "./Components/Results/SearchResults";
import NotFound from "./Components/Home/NotFound";
import { Outlet } from "react-router";
import BasicSearch from "./Components/Home/BasicSearch";
import { useState, createContext } from "react";
import AdvancedSearch from "./Components/AdvancedSearch/AdvancedSearch";
import Card from "./Components/Results/Card";

function App() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [colors, setColors] = useState("");
  const colorList = ["White", "Blue", "Black", "Red", "Green"];
  const [manaValue, setManaValue] = useState("");
  const [checkedState, setCheckedState] = useState(
    new Array(colorList.length).fill(false)
  );
  // const colorsString =
  //   (checkedState[0] === true ? "white," : "") +
  //   (checkedState[1] === true ? "blue," : "") +
  //   (checkedState[2] === true ? "black," : "") +
  //   (checkedState[3] === true ? "red," : "") +
  //   (checkedState[4] === true ? "green," : "");

  const colorsString = colorList.map((item, index) => {return (checkedState[index] === true ? item+"," : "")}).join("")

  const queryString = `${query}&type=${type}&colors=${colorsString}&cmc=${manaValue}`;
  let queryUrl = `https://api.magicthegathering.io/v1/cards?name=${queryString}`;
    const clearStates = () => {
      setQuery("");
      setType("");
      setManaValue("");
    }

  return (
    <div>
      <nav>
        <Link to="/">
          <h1 onClick={clearStates} style={{ display: "inline-block", width: "300px" }}>Home</h1>
        </Link>
        <Link to="/advanced">
          <h1 style={{ display: "inline-block" }}>Advanced Search</h1>
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setCards={setCards}
              query={query}
              setQuery={setQuery}
              queryUrl={queryUrl}
              queryString={queryString}
            />
          }
        />

        <Route
          path="/advanced"
          element={
            <AdvancedSearch
              setCards={setCards}
              setColors={setColors}
              setQuery={setQuery}
              setType={setType}
              setManaValue={setManaValue}
              manaValue={manaValue}
              setCheckedState={setCheckedState}
              queryUrl={queryUrl}
              query={query}
              queryString={queryString}
              checkedState={checkedState}
              colorList={colorList}
              type={type}
            />
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
        <Route path="/searchresults/card/:id" element={<Card />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
