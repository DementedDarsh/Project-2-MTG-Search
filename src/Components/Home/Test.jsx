import React from "react";
import { useEffect } from "react";

const Test = () => {
  const AoA = [
    ["a", "a", "a"],
    ["a", "a", "a", "a"],
    ["a", "a"],
    ["a", "a", "a"],
    ["a", "a", "a"],
    ["a", "a"],
    ["a", "a", "a"],
  ];

const list = AoA.map((item, index)=>{return(<div key={index}><h1>{item.map((item) => {<span>Hi</span>})}</h1></div>)})

  useEffect(() => {

  }, []);
  
  return <div>{list}</div>;
};

export default Test;
