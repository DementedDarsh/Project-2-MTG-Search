import React, { useState } from "react";
import BasicSearch from "./BasicSearch";

const AdvancedSearch = (props) => {

  const handleOnChange = (position) => {
    const updatedCheckedState = props.checkedState.map((item, index) =>
      index === position ? !item : item
    );
    props.setCheckedState(updatedCheckedState)
    // props.setColors(checkedState.map((item, index) => index === position ? colorList[index]: !colorList[index]));
  };

  return (
    <div className="App">
      <div><BasicSearch query={props.query} setQuery={props.setQuery} cards={props.cards} setCards={props.setCards} queryUrl={props.queryUrl}/></div>
      <span>
      <h3>Colors</h3>
      <ul className="color-list">
        {props.colorList.map(({ color }, index) => {
          return (
            <li key={index}>
              <div className="color-list-item">
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={color}
                  value={color}
                  checked={props.checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
                <label htmlFor={`custom-checkbox-${index}`}>{props.colorList[index]}</label>
              </div>
            </li>
          );
        })}
      </ul></span>
    </div>
  );
};

export default AdvancedSearch;
