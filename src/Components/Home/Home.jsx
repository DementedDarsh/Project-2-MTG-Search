import React, { useState } from "react";
import { useSearchParams, Outlet } from "react-router-dom";
import BasicSearch from "./BasicSearch";
import SubmitButton from "./SubmitButton";

const Home = (props) => {
  return (
    <div>
      <BasicSearch
        query={props.query}
        setQuery={props.setQuery}
        cards={props.cards}
        setCards={props.setCards}
        queryUrl={props.queryUrl}
      />{" "}
      <SubmitButton queryString={props.queryString} />
    </div>
  );
};

export default Home;
