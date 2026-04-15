import {React, useState } from 'react';

import './App.css'

export default Texture;

function Texture({setDisplayJSON}) {
    
    const setTexture = (newName) =>{
    setDisplayJSON((items) => items.map(item => 
              item.id === 'texture' ? { ...item, value: newName } : item
    ))}
    
    return (
        <div className="node">
            <a className="nodeName">Texture: </a>
            <input  name="name" id="name" onChange={e => setTexture(e.target.value)}/>
        </div>
    )
}