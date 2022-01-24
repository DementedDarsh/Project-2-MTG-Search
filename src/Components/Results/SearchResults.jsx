import React, { useState, useEffect } from "react";
import {} from "react-router";
import { NavLink, Outlet, useSearchParams, useParams, Link } from "react-router-dom";
import Card from "./Card";

const SearchResults = (props) => {
  const { search } = useParams;
  const [getStatus, setGetStatus] = useState("");
  const filterNoImage = (item) => {
    return item.hasOwnProperty("imageUrl");
  };
  useEffect(() => {
console.log(search)
    const makeApiCall = () => {
      console.log(props.queryUrl)
      setGetStatus("Pending");
      fetch(props.queryUrl )
        .then((response) => response.json())
        .then((data) => {
          setGetStatus("Completed");
          props.setCards([
            ...new Map(
              data.cards
                .filter(filterNoImage)
                .map((item) => [item["name"], item])
            ).values(),
          ]);
        })
        .catch((error) => {
          setGetStatus("Error");
          console.error("Error:", error);
        });
    };
    makeApiCall();
  }, []);

  const results = props.cards.map((item) => {
    return (
      <tbody style={{border: "2px solid black"}} key={item?.multiverseid}>
      <td style={{textAlign: "center", border: "1px solid black"}}><Link to={"/searchresults/card/" + item?.name}><img src={item?.imageUrl} style={{width: "200px", objectFit: "contain"}}/></Link></td>
      <td style={{textAlign: "center", border: "1px solid black"}}>{item?.name}</td>
      <td style={{textAlign: "center", border: "1px solid black"}}>{item?.colors.join(", ")}</td>
      <td style={{textAlign: "center", border: "1px solid black"}}>{item?.cmc}</td>
    </tbody>
      
      // <div className="card" key={item?.multiverseid}>
      //   <img src={item?.imageUrl} />
      //   {item?.name}
      // </div>
    );
  });

  return <div><table style={{width: "100%"}}>
  <thead style={{border: "2px solid black"}}>
    <th style={{border: "2px solid black", textAlign: "center", width: "200px"}}>Card Image</th>
    <th style={{border: "2px solid black", textAlign: "center"}}>Card Name</th>
    <th style={{border: "2px solid black", textAlign: "center"}}>Color(s)</th>
    <th style={{border: "2px solid black", textAlign: "center"}}>Mana Value</th>
  </thead>{results}</table></div>;
  
};

export default SearchResults;
