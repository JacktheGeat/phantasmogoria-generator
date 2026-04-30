import {React, useState } from 'react';

import './App.css'

export default Texture;

function Texture({setTexture}) {
    
    return (
        <div className="node">
            <a className="nodeName">Texture: </a>
            <input  className='valueInput' onChange={e => setTexture('texture', e.target.value)}/>
        </div>
    )
}