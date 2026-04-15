import {React, useState } from 'react';

import './App.css'

export default SpellID;

function SpellID({setDisplayJSON}) {

    const setSpellID = (newID) =>{
    setDisplayJSON((items) => items.map(item => 
              item.id === 'id' ? { ...item, value: newID } : item
    ))}
    
    return (
        <div className="node">
            <a className="nodeName">ID: </a>
            <input  name="ID" id="ID" onChange={e => setSpellID(e.target.value)}/>
        </div>
    )
}