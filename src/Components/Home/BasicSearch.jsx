import React, { useState } from "react";
import { useSearchParams, Outlet, Route, Routes, Link } from "react-router-dom";
import SubmitButton from "./SubmitButton";

const BasicSearch = (props) => {
  const handleSearchInput = (event) => {
    props.setQuery(event.target.value);
    console.log(props.queryUrl)
  };
  const filterNoImage = (item) => {
    return item.hasOwnProperty("imageUrl");
  };

  return (
    <span>
      <input
        type="text"
        placeholder="Enter a search term... e.g. Bear, Aurelia, Mountain"
        value={props.query}
        onChange={handleSearchInput}
        style={{width: "400px"}}
      />
    </span>
  );
};

export default BasicSearch;
