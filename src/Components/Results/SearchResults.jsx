import React, { useState, useEffect } from "react";
import {} from "react-router";
import { NavLink, Outlet, useSearchParams, useParams } from "react-router-dom";

const SearchResults = (props) => {
  const { search } = useParams;
  const [getStatus, setGetStatus] = useState("");
  const filterNoImage = (item) => {
    return item.hasOwnProperty("imageUrl");
  };
  useEffect(() => {

    const makeApiCall = () => {
      console.log(props.queryUrl)
      setGetStatus("Pending");
      fetch(props.queryUrl)
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
      <div className="card" key={item?.multiverseid}>
        <img src={item?.imageUrl} />
        {item?.name}
      </div>
    );
  });

  return <div>{results}</div>;
};

export default SearchResults;
