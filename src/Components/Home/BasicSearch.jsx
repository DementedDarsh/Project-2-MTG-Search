import React, { useState } from "react";
import { useSearchParams, Outlet, Route, Routes } from "react-router-dom";
import SearchResults from "../Results/SearchResults";
import AdvancedSearch from "./AdvancedSearch";

const BasicSearch = () => {
  const [getStatus, setGetStatus] = useState("");
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState([])
  const queryUrl = `https://api.magicthegathering.io/v1/cards?name=${query}`;
  const handleSearchInput = (event) => {
    setQuery(event.target.value);
  };
  const filterNoImage = (item) => {
    return item.hasOwnProperty("imageUrl");
  };

  const onSubmit = () => {
    setGetStatus("Pending");
    fetch(queryUrl)
      .then((response) => response.json())
      .then((data) => {
        setGetStatus("Completed");
        setCards([
          ...new Map(
            data.cards.filter(filterNoImage).map((item) => [item["name"], item])
          ).values(),
        ]);
      })
      .catch((error) => {
        setGetStatus("Error");
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Card Name..."
        value={query}
        onChange={handleSearchInput}
      />

      <button onClick={() => onSubmit()}>Submit</button>
<SearchResults cards={cards}/>
    </div>
  );
};

export default BasicSearch;
