import {React, useState } from 'react';

import './App.css'

export default SpellID;

function SpellID({setSpellID}) {
    
    return (
        <div className="node">
            <a className="nodeName">ID: </a>
            <input  name="ID" id="ID" onChange={e => setSpellID('id', e.target.value)}/>
        </div>
    )
}