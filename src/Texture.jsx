import {React, useState } from 'react';

import './App.css'

export default Texture;

function Texture({setTexture}) {
    
    return (
        <div className="node">
            <a className="nodeName">Texture: </a>
            <input  name="name" id="name" onChange={e => setTexture(e.target.value)}/>
        </div>
    )
}