import React, { useState } from "react";
import BasicSearch from "../Home/BasicSearch";
import Colors from "./Colors";
import Types from "./Types";

const AdvancedSearch = (props) => {


  return (
    <div className="App">
      <div><BasicSearch query={props.query} setQuery={props.setQuery} cards={props.cards} setCards={props.setCards} queryUrl={props.queryUrl}/>
      <Colors colorList={props.colorList}  setCards={props.setCards} queryUrl={props.queryUrl} query={props.query} setQuery={props.setQuery} checkedState = {props.checkedState} setCheckedState={props.setCheckedState} setColors={props.setColors}/></div>
      <Types />
    </div>
  );
};

export default AdvancedSearch;
