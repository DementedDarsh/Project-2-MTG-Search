import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const Types = (props) => {
  const typeList = [
    "Artifact",
    "Creature",
    "Land",
    "Planeswalker",
    "Sorcery",
    "Instant",
    "Tribal",
  ];

  const handleSelect = (e) => {
    props.setType(e);
    console.log(props.queryUrl);
  };

  return (
    <span style={{marginTop: "-800px"}}>
      <DropdownButton
        alignright="true"
        title={props.type != "" ? props.type : "Select a type"}
        id="dropdown-menu-align-right"
        onSelect={handleSelect}
      >
        {typeList.map((item) => {
          return <Dropdown.Item key={item} eventKey={item}>{item}</Dropdown.Item>;
        })}
      </DropdownButton>
      Search for {props.type} cards.
    </span>
  );
};

export default Types;
