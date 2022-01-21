import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const SearchResults = (props) => {

const test = () => console.log(props.cards)

  // const results = props.cards.map((item) => {
  //   return (
  //     <div className="card" key={item?.multiverseid}>
  //       <img src={item?.imageUrl} />
  //       {item?.name}
  //     </div>
  //   );
  // });

  return <div><button onClick={test}></button></div>;
};

export default SearchResults;
