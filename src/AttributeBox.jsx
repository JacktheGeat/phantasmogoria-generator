import {React, useState } from 'react';

import './App.css'
import Attribute from './Attribute';

export default AttributeBox;

function AttributeBox({setJSON}) {

  const [selectedValue, setSelectedValue] = useState('');
  const availableAttributes = [ 'power_multiplier', 'cost_multiplier', 'overcharge_multiplier'];
  const [attributeList, setAttributeList] = useState([]);

  function handleSetAttributes(target, newValue, key) {
    if (target == '') return;
    if ( newValue == undefined) {
      setJSON('attributes', attributeList.filter((item) => item.key !== key));
      setAttributeList(items => items.filter((item) => item.key !== key));
    }
    else if (attributeList.some(item => item.id === target && item.key=== key) ) {
      setJSON('attributes', attributeList.map(item => item.id === target && item.key === key ? { ...item, value: newValue } : item));
      setAttributeList(items => items.map(item => item.id === target && item.key === key  ? { ...item, value: newValue } : item))
    }
    else {
      setJSON('attributes', [...attributeList, {key: key, id: target, value: newValue}])
      setAttributeList(items => [...items, {key: key, id: target, value: newValue} ]);
    }
    setSelectedValue('')
  }
  
  return (
    <>
    <div className="node">
      <a className="nodeName">Attributes: </a>
      <select name="class" value={selectedValue} onChange={e => {setSelectedValue(e.target.value)}}>
        <option value=''></option>
        {availableAttributes.filter(item => !attributeList.map(attribute => attribute.id).includes(item)).map(item => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <button className='add' onClick={() => handleSetAttributes(selectedValue, 0, Date.now())}>+</button>
    </div>
    <div className='box'>
      {attributeList.map(item => (
          <Attribute
          key={item.key} 
          myKey={item.key}
          id={item.id}
          setJSON={handleSetAttributes}
          />
        ))}
    </div>
    </>
  )
}