import React from 'react';
import { Form } from 'react-bootstrap';

const ManaValue = (props) => {
    const handleNumberInput = (event) => {
        props.setManaValue(event.target.value);
      };
  return <Form.Control style={{width: "60px"}} type="number" value={props.manaValue} onChange={handleNumberInput}/>
}
export default ManaValue;
