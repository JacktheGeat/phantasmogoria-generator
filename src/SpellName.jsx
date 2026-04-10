import {React, useState } from 'react';

import './App.css'

export default SpellName;

function SpellName({setSpellName}) {
    
    return (
        <div className="node">
            <a className="nodeName">Name: </a>
            <input  name="name" id="name" onChange={e => setSpellName(e.target.value)}/>
        </div>
    )
}