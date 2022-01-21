import React, { useState, useEffect } from "react";

const Test = () => {
  const [data, setData] = useState([]);
  const [results, setResults] = useState([]);

  const onSubmitQuery = () => {
    fetch("https://api.magicthegathering.io/v1/cards?name=Llanowar")
      .then((response) => response.json())
      .then((data) => setData(data.cards));
  };
  const filterNoImage = (item) => {
    return item.hasOwnProperty("imageUrl");
  };  
  

    const arrayUniquebyKey = [
      ...new Map(data.filter(filterNoImage).map((item) => [item["name"], item])).values(),
    ];

const handleClick = () => setResults(arrayUniquebyKey.map((item) => {
      return (
        <div className="card" key={item?.multiverseid}>
          <img src={item?.imageUrl} />
          {item?.name}
        </div>
      );   
  }));

const onClick = () => {
    onSubmitQuery();
}

  return (
    <div>
      <button onClick={onClick}>Test</button>
      <button>Test Log</button>
      <button>Test Log 2</button>
      {results}
    </div>
  );
};

export default Test;
