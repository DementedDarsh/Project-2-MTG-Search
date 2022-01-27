import React, { useEffect, useState } from "react";
import { NavItem } from "react-bootstrap";
import { useParams, useLocation } from "react-router";

const RandomCard = (props) => {
  const [getStatus, setGetStatus] = useState("");
  const [card, setCard] = useState("");
  const params = useParams();
  const url = `https://api.magicthegathering.io/v1/cards?random=true&pageSize=1`;
  const makeApiCall = () => {
    console.log(url);
    setGetStatus("Pending");
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGetStatus("Completed");
        setCard(data.cards[0]);
      })
      .catch((error) => {
        setGetStatus("Error");
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    makeApiCall();
  }, [url]);
  const power = card.power;
  const toughness = card.toughness;

  const rulings = card.rulings?.map((item, index) => {
    return (
      <tr key={index} style={{border: "1px solid white"}}>
        <td colSpan="2" className="rulings">
          {item.date} - {item.text}
        </td>
      </tr>
    );
  });
  const pt =
    card.power != undefined
      ? `Power/Toughness: ${power}/${toughness}`
      : "";

const pending = getStatus === "Pending" ? "Card Loading" : ""

  return (
      <>
      <h2>{pending}</h2>
    <table style={{width: "80%", marginTop: "60px"}}>
      <thead>
        <tr>
          <td rowSpan="5">{card.hasOwnProperty('imageUrl') || getStatus === "Pending" ? <img src={card.imageUrl} /> : <h2>Image not Found</h2>}
            
          </td>
          <td>
            <h2>{card.name}</h2>{card.manaCost}
          </td>
        </tr>
        <tr>
          <td>{card.type}</td>
        </tr>
        <tr>
          <td>{card.text}</td>
        </tr>
        <tr>
          <td>{pt}</td>
        </tr>
        <tr>
          <td></td>
        </tr>
        {rulings}
      </thead>
    </table></>
  );
};

export default RandomCard;
