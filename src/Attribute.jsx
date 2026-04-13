import {React, useState } from 'react';

import './App.css'

const Attribute = ({ id, attributeClass, onRemove }) => {
  const intAttributes = ['base_power', 'mana_cost', 'mana_overcharge','exhaust_limit', 'expunge_limit', 'base_amount']
  const floatAttributes = ['power_multiplier', 'cost_multiplier', 'overcharge_multiplier']
  if (attributeClass == '') {return <></>}
  let input;
  if (intAttributes.includes(attributeClass)) {
    input = <input type="number" step="1"/>
  }
  else if (floatAttributes.includes(attributeClass)) {
    input = <input type="number" step='0.1'/>
  }
  else if (attributeClass == "mana_curve") {
    input = (
    <select>
      <option></option>
    </select>
    )
  }
  else if (attributeClass == "consumability") {
    input = (
    <select>
      <option value="nonconsumable">nonconsumable</option>
      <option value="refreshing">refreshing</option>
      <option value="consumable">consumable</option>
    </select>
    )
  }
  else { input = <></>}
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
  const availableAttributes = ['base_power', 'mana_cost', 'mana_overcharge', 'mana_curve', 'exhaust_limit', 'expunge_limit', 'power_multiplier', 'cost_multiplier', 'overcharge_multiplier', 'base_amount', 'consumability' ];
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