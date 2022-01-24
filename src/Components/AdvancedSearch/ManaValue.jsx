import React from 'react';

const ManaValue = (props) => {
    const handleNumberInput = (event) => {
        props.setManaValue(event.target.value);
      };
  return <input style={{width: "50px"}} type="number" value={props.manaValue} onChange={handleNumberInput}/>
}
export default ManaValue;
