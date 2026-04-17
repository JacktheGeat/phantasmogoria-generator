import {React, useState } from 'react';

import './App.css'
import Attribute from './Attribute';

export default AttributeBox;

function AttributeBox({setJSON}) {

  const [selectedValue, setSelectedValue] = useState('');
  const availableAttributes = [ 'power_multiplier', 'cost_multiplier', 'overcharge_multiplier'];
  const [attributeList, setAttributeList] = useState({});

  function handleSetAttributes(target, newValue) {
    if (target == '') return
    if ( newValue == undefined) {
      const {[target]:_, ...everythingElse} = attributeList
      setJSON('attributes',  (everythingElse));
      setAttributeList(everythingElse);
    }
    else {
      console.log(({...attributeList, [target] : newValue}))
      setJSON('attributes', ({...attributeList, [target] : newValue}));
      setAttributeList(items => ({...items, [target] : newValue}) )
    }
    setSelectedValue('')
  }
  
  return (
    <>
    <div className="node">
      <a className="nodeName">Attributes: </a>
      <select name="class" value={selectedValue} onChange={e => {setSelectedValue(e.target.value)}}>
        <option></option>
        {availableAttributes.filter(item => !(item in attributeList)).map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <button className='add' onClick={() => handleSetAttributes(selectedValue, 0.0)}>+</button>
    </div>
    <div className='box'>
      {Object.entries(attributeList).map(([key,value]) => 
          <Attribute
          key={key} 
          id={key}
          value = {value}
          setJSON={handleSetAttributes}
          />
        )}
    </div>
    </>
  )
}