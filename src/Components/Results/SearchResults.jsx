import React, { useState, useEffect } from "react";
import {} from "react-router";
import {
  NavLink,
  Outlet,
  useSearchParams,
  useParams,
  Link,
} from "react-router-dom";
import Card from "./Card";

const SearchResults = (props) => {
  const params = useParams();
  const [getStatus, setGetStatus] = useState("");
  const filterNoImage = (item) => {
    return item.hasOwnProperty("imageUrl");
  };
const url = `https://api.magicthegathering.io/v1/cards?name=${params.search}`
  const makeApiCall = () => {
    console.log(url);
    setGetStatus("Pending");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGetStatus("Completed");
        props.setCards(
          [
          ...new Map(
            data.cards
              .filter(filterNoImage)
              .map((item) => [item["name"], item])
          ).values(),
        ]
        );
      })
      .catch((error) => {
        setGetStatus("Error");
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    makeApiCall();
  }, [url]);

  const results = props.cards.map((item) => {
    return (
      <tr className="item" style={{ border: "2px solid black" }} key={item?.multiverseid}>
        <td style={{ textAlign: "center", border: "1px solid black" }}>
        <Link to={"/searchresults/card/" + item.id}>
            <img
              src={item?.imageUrl}
              style={{ width: "200px", objectFit: "contain" }}
            />
          </Link>
        </td>
        <td style={{ textAlign: "center", border: "1px solid black" }}>
          {item?.name}
        </td>
        <td style={{ textAlign: "center", border: "1px solid black" }}>
          {item?.colors?.join(", ")}
        </td>
        <td style={{ textAlign: "center", border: "1px solid black" }}>
          {item?.cmc}
        </td>
      </tr>

      // <div className="card" key={item?.multiverseid}>
      //   <img src={item?.imageUrl} />
      //   {item?.name}
      // </div>
    );
  });
  const pending = getStatus === "Pending" ? "Cards Loading" : ""
  const noMatch = props.cards?.length === 0 && getStatus === "Completed" ? "No matches found" : ""
  return (
    <div>
      <h2>{pending}<br />{noMatch}</h2>
      <table style={{ width: "100%" }}>
        <thead style={{ border: "2px solid black" }}><tr>
          <th
            style={{
              border: "2px solid black",
              textAlign: "center",
              width: "200px",
            }}
          >
            Card Image
          </th>
          <th style={{ border: "2px solid black", textAlign: "center" }}>
            Card Name
          </th>
          <th style={{ border: "2px solid black", textAlign: "center" }}>
            Color(s)
          </th>
          <th style={{ border: "2px solid black", textAlign: "center" }}>
            Mana Value
          </th></tr>
        </thead>
        <tbody>
        {results}</tbody>
      </table>
    </div>
  );
};

export default SearchResults;
