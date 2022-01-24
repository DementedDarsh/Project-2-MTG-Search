import React, { useState } from "react";
import { useSearchParams, Outlet } from "react-router-dom";
import BasicSearch from "./BasicSearch";
import SubmitButton from "./SubmitButton";

const Home = (props) => {
  return (
    <table style={{color: "white", margin: "auto", marginTop: "200px"}}>
      
      <thead><h2>(Lousy) Magic: The Gathering card search</h2></thead>
      <tr><td><BasicSearch
        query={props.query}
        setQuery={props.setQuery}
        cards={props.cards}
        setCards={props.setCards}
        queryUrl={props.queryUrl}
      /></td>{" "}<td>
      <SubmitButton queryString={props.queryString} /></td></tr>
    <tr><i>Example search terms: Bear, Aurelia, Zombie</i></tr>
    </table>
  );
};

export default Home;
