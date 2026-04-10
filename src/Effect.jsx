import {React, useState } from 'react';

import './App.css'

const Effect = ({ id, effectClass, onRemove }) => {
  if (effectClass == '') {return <></>}
  let input = <></>
  return (
    <>
      <div className='effectBox'>
        <button className='remove' onClick={() => onRemove(id)}>-</button>
        <a>{effectClass}:</a>
        {input}
      </div>
    </>
  );
};

export default Effects;

function Effects({effectJSON}) {
  const [selectedValue, setSelectedValue] = useState();
  const availableEffects = ["exhaust", "expunge", "status", "block", "damage", "multi_damage", "heal", "draw", "mana_restore", "apply_modifier", "modify_player", "modify_component", "modify_component_type", "modify_component_tag"];
  const [effectBox, setEffectBox] = useState([]);
  const [effectInput, setEffectInput] = useState('');

  const addEffect= () => {
    if (effectInput !== undefined) {
      const newEffect = { id: Date.now(), effectClass: `${effectInput}` };
      setEffectBox([...effectBox, newEffect]);
    }
  };
  const removeEffect = (id) => {
    setEffectBox(effectBox.filter(item => item.id !== id));
  };
  
  return (
    <>
    <div className="node">
      <a className="nodeName">Effects: </a>
      <select name="class" value={selectedValue} onChange={e => {setEffectInput(e.target.value); setSelectedValue(e.target.value)}}>
        <option></option>
        {availableEffects.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <button className='add' onClick={addEffect}>+</button>
    </div>
    <div className='box'>
      {effectBox.map(item => (
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