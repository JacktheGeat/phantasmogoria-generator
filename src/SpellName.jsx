import {React, useState } from 'react';

import './App.css'

export default SpellName;

function SpellName({setDisplayJSON}) {

    const setSpellName = (newName) =>{
    setDisplayJSON((items) => items.map(item => 
              item.id === 'name' ? { ...item, value: newName } : item
    ))}
    
    return (
        <div className="node">
            <a className="nodeName">Name: </a>
            <input  name="name" id="name" onChange={e => setSpellName(e.target.value)}/>
        </div>
    )
}