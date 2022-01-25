import React, { useState } from "react";
import { useSearchParams, Outlet } from "react-router-dom";
import BasicSearch from "./BasicSearch";
import SubmitButton from "./SubmitButton";

const Home = (props) => {
  return (
    <table style={{ color: "white", margin: "auto", marginTop: "200px" }}>
      <tbody>
        <tr>
          <td colSpan={2}><h2>(Kind of Okay) Magic: The Gathering card search</h2></td>
        </tr>
        <tr>
          <td>
            <BasicSearch
              query={props.query}
              setQuery={props.setQuery}
              cards={props.cards}
              setCards={props.setCards}
              queryUrl={props.queryUrl}
            />
          </td>
          <td>
            <SubmitButton queryString={props.queryString} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Home;
