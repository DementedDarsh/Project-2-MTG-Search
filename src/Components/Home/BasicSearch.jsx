import React, { useState } from "react";
import { useSearchParams, Outlet, Route, Routes, Link } from "react-router-dom";

const BasicSearch = (props) => {
  const [getStatus, setGetStatus] = useState("");
  const [query, setQuery] = useState("");
  const queryUrl = `https://api.magicthegathering.io/v1/cards?name=${query}`;
  const handleSearchInput = (event) => {
    props.setQuery(event.target.value);
  };
  const filterNoImage = (item) => {
    return item.hasOwnProperty("imageUrl");
  };

  // const onSubmit = () => {
  //   setGetStatus("Pending");
  //   fetch(queryUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setGetStatus("Completed");
  //       props.setCards([
  //         ...new Map(
  //           data.cards.filter(filterNoImage).map((item) => [item["name"], item])
  //         ).values(),
  //       ]);
  //     })
  //     .catch((error) => {
  //       setGetStatus("Error");
  //       console.error("Error:", error);
  //     });
  // };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Card Name..."
        value={props.query}
        onChange={handleSearchInput}
      />
        <Link to={"/searchresults/" + props.query}>
        
      <button>Submit</button></Link>
    </div>
  );
};

export default BasicSearch;
