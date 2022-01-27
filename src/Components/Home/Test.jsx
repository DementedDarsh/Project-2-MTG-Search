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
const inline = (element) => element.map((item) => {return(<span>Hi</span>)})
const list = AoA.map((item, index)=>{return(<div key={index}><h1>{inline(item)}</h1></div>)})

  useEffect(() => {

  }, []);
  
  return <div>{list}</div>;
};

export default Test;
