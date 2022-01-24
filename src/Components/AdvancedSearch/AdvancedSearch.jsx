import React, { useState } from "react";
import BasicSearch from "../Home/BasicSearch";
import SubmitButton from "../Home/SubmitButton";
import Colors from "./Colors";
import ManaValue from "./ManaValue";
import Types from "./Types";

const AdvancedSearch = (props) => {
  return (
    <span className="App">
      <div>
        Card name: 
        <BasicSearch
          query={props.query}
          setQuery={props.setQuery}
          cards={props.cards}
          setCards={props.setCards}
          queryUrl={props.queryUrl}
          queryString={props.queryString}
        /> Mana Value
        <ManaValue manaValue={props.manaValue} setManaValue={props.setManaValue}/>
         <SubmitButton queryString={props.queryString} />
      </div>
      <span className="colors" style={{display: "inline-block"}}>
      <Colors
        colorList={props.colorList}
        setCards={props.setCards}
        queryUrl={props.queryUrl}
        query={props.query}
        setQuery={props.setQuery}
        checkedState={props.checkedState}
        setCheckedState={props.setCheckedState}
        setColors={props.setColors}
      /></span><span style={{display: "inline-block", paddingTop: "-100px"}}>
      <Types setType={props.setType} type={props.type} queryUrl={props.queryUrl} />
      </span>
    </span>
  );
};

export default AdvancedSearch;
