import {React, useState } from 'react';

import './App.css'
import Effect from './Effect';

export default EffectBox;

function EffectBox({setJSON}) {

  const [selectedValue, setSelectedValue] = useState('');
  const EffectsList = ["exhaust", "expunge", "status", "block", "damage", "multi_damage", "heal", "draw", "mana_restore", "apply_modifier", "modify_player", "modify_component", "modify_component_type", "modify_component_tag"];
  const [effectBox, setEffectBox] = useState([])
  const [effectList, setEffectList] = useState([]);

  function handleSetEffects(key, newValue) {
    console.log(key, newValue)
    console.log(effectList.map(item =>
          item.key === key ? {key:key, ...newValue}: item
        ))
    if ( newValue == undefined) {
      setJSON('effects', effectList.filter((item) => (item.key !== key)))
      setEffectList(items => items.filter((item) => (item.key !== key) ));
    }
    
    else if (effectList.find((item) => item.key === key)) {
      setJSON( 'effects', 
        effectList.map(item =>
          item.key === key ? {key:key, ...newValue}: item
        )
      )
      setEffectList(prevItem => (
        prevItem.map(item =>
          item.key === key 
          ? {key:key, ...newValue}
          : item
        )
      ))
    }
    else {
      setJSON( 'effects', [...effectList, {key: key, ...newValue}])
      setEffectList(items => [...items, {key: key, ...newValue}]);
    }
    setSelectedValue('')
  }

  function formatElement(word) {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
        const toReturn = capitalizedWord.replace('_', " ")
        return toReturn
  }
  
  return (
    <>
    <div className="node">
      <a className="nodeName">Effects: </a>
      <select className="add" value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
        <option value=''></option>
        {EffectsList.map(item => (
          <option key={item} value={item}>{formatElement(item)}</option>
        ))}
      </select>
      <button className='add' onClick={() => {
        if (selectedValue !== '') {
          handleSetEffects(
            Date.now(), 
            {
              effect: selectedValue,
              multiplier: 0,
              source: 'constant',
              target: 'self',
              conditions: [],
              modifiers: []
            }
          )
        }
      }}>+</button>
    </div>
    <div className='node-box'>
      {
        effectList.map(item => (
            <Effect
            key={item.key} 
            myKey={item.key}
            myEffect={item.effect}
            setJSON={handleSetEffects}
            />
        ))
      }
    </div>
    </>
  )
}