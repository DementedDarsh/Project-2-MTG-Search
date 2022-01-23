import React, { useState } from "react";
import { useSearchParams, Outlet, Route, Routes, Link } from "react-router-dom";

const BasicSearch = (props) => {
  const [getStatus, setGetStatus] = useState("");
  const [query, setQuery] = useState("");
  const handleSearchInput = (event) => {
    props.setQuery(event.target.value);
    console.log(props.queryUrl)
  };
  const filterNoImage = (item) => {
    return item.hasOwnProperty("imageUrl");
  };

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
