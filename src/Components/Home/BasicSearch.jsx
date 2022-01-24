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
        placeholder="Enter a Card Name..."
        value={props.query}
        onChange={handleSearchInput}
      />
    </span>
  );
};

export default BasicSearch;
