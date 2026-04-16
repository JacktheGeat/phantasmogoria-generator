import {React, useState } from 'react';

import './App.css'
import Effect from './Effect';

export default EffectBox;

function EffectBox({setJSON}) {

  const [selectedValue, setSelectedValue] = useState('');
  const EffectsList = ["exhaust", "expunge", "status", "block", "damage", "multi_damage", "heal", "draw", "mana_restore", "apply_modifier", "modify_player", "modify_component", "modify_component_type", "modify_component_tag"];
  const [effectBox, setEffectBox] = useState([])
  const [attributeList, setAttributeList] = useState([]);

  function handleSetAttributes(target, newValue, key) {
    console.log("target: " + target)

    if (target == '') return;
    if ( newValue == undefined) {
      setJSON('effects', attributeList.filter((item) => item.key !== key));
      setAttributeList(items => items.filter((item) => item.key !== key));
    }
    else if (attributeList.some(item => item.key=== key) ) {
      setJSON('effects', attributeList.map(item => item.key === key ? { ...item, value: newValue } : item));
      setAttributeList(items => items.map(item => item.key === key  ? { ...item, value: newValue } : item))
    }
    else {
      setJSON('effects', [...attributeList, {key: key, effect: target, value: newValue}])
      setAttributeList(items => [...items, {key: key, effect: target, value: newValue} ]);
    }
    setSelectedValue('')
  }
  
  return (
    <>
    <div className="node">
      <a className="nodeName">Effects: </a>
      <select name="class" value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
        <option value=''></option>
        {EffectsList.map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <button className='add' onClick={() => (
        handleSetAttributes(selectedValue, 
          {
            effect: selectedValue,
            multiplier: 0,
            source: 'constant',
            target: 'self',
            conditions: [],
            modifiers: []
          }
    , Date.now())
        )}>+</button>
    </div>
    <div className='box'>
      {attributeList.map(item => (
          <Effect
          key={item.key} 
          myKey={item.key}
          myEffect={item.effect}
          setJSON={handleSetAttributes}
          />
        ))}
    </div>
    </>
  )
}