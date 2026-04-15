import {React, useState } from 'react';

import './App.css'

const Attribute = ({ id, attributeClass, onRemove }) => {
  if (attributeClass == '') {return <></>}
  const input = <input type="number" step='0.1'/>
  return (
    <>
      <div className='attributeBox'>
        <button className='remove' onClick={() => onRemove(id)}>-</button>
        <a>{attributeClass}:</a>
        {input}
      </div>
    </>
  );
};

export default Attributes;

function Attributes({displayJSON, setDisplayJSON}) {
  const [selectedValue, setSelectedValue] = useState();
  const availableAttributes = [ 'power_multiplier', 'cost_multiplier', 'overcharge_multiplier'];
  const [attributeBox, setAttributeBox] = useState([]);
  const [attributeInput, setAttributeInput] = useState('');

  const addAttribute= () => {
    if (attributeInput !== undefined) {
      const newAttribute = { id: Date.now(), attributeClass: `${attributeInput}` };
      setSelectedValue()
      setAttributeInput()
      setAttributeBox([...attributeBox, newAttribute]);
    }
  };
  const removeAttribute = (id) => {
    setAttributeBox(attributeBox.filter(item => item.id !== id));
  };
  
  return (
    <>
    <div className="node">
      <a className="nodeName">Attributes: </a>
      <select name="class" value={selectedValue} onChange={e => {setAttributeInput(e.target.value); setSelectedValue(e.target.value)}}>
        <option></option>
        {availableAttributes.filter(item => !attributeBox.map(attribute => attribute.attributeClass).includes(item)).map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <button className='add' onClick={addAttribute}>+</button>
    </div>
    <div className='box'>
      {attributeBox.map(item => (
          <Attribute 
            key={item.id} 
            id={item.id} 
            attributeClass={item.attributeClass} 
            onRemove={removeAttribute} 
          />
        ))}
    </div>
    </>
  )
}