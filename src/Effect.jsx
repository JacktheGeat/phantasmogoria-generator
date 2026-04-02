import {React, useState } from 'react';

import './App.css'

const Effect = ({ id, effectClass, onRemove }) => {
  return (
    <div style={{ border: '1px dotted blue', padding: '10px', margin: '10px' }}>
      <h3>{effectClass}</h3>
      <button className='remove' onClick={() => onRemove(id)}>-</button>
    </div>
  );
};

export default Effects;

function Effects() {
  const [effectItems, setEffectItems] = useState([]);
  const [effectInput, setEffectInput] = useState('');

  const addEffect= () => {
    const newEffect = { id: Date.now(), effectClass: `${effectInput}` };
    setEffectItems([...effectItems, newEffect]);
  };
  const removeEffect = (id) => {
    setEffectItems(effectItems.filter(item => item.id !== id));
  };
  
  return (
    <>
    <div className="row">
      <a >Effects: </a>
      <input type='text' value={effectInput} onChange={e => setEffectInput(e.target.value)}/>
      <button className='add' onClick={addEffect}>+</button>
    </div>
    <div>
      {effectItems.map(item => (
          <Effect 
            key={item.id} 
            id={item.id} 
            effectClass={item.effectClass} 
            onRemove={removeEffect} 
          />
        ))}
    </div>
    </>
  )
}