import {React, useState } from 'react';

import './App.css'

const Attribute = ({ id, attributeClass, onRemove }) => {
  return (
    <div style={{ border: '1px dotted blue', padding: '10px', margin: '10px' }}>
      <h3>{attributeClass}</h3>
      <button className='remove' onClick={() => onRemove(id)}>-</button>
    </div>
  );
};

export default Attributes;

function Attributes() {
  const [attributeItems, setAttributeItems] = useState([]);
  const [attributeInput, setAttributeInput] = useState('');

  const addAttribute= () => {
    const newAttribute = { id: Date.now(), attributeClass: `${attributeInput}` };
    setAttributeItems([...attributeItems, newAttribute]);
  };
  const removeAttribute = (id) => {
    setAttributeItems(attributeItems.filter(item => item.id !== id));
  };
  
  return (
    <>
    <div className="row">
      <a >Attributes: </a>
      <input type='text' value={attributeInput} onChange={e => setAttributeInput(e.target.value)}/>
      <button className='add' onClick={addAttribute}>+</button>
    </div>
    <div>
      {attributeItems.map(item => (
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