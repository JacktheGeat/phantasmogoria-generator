import {React, useState } from 'react';

import './App.css'

export default SpellClass;

function SpellClass({setSpellClass}) {
    
    return (
        <div className="node">
            <a className="nodeName">Class: </a>
            <select  name="class" id="class" onChange={e => setSpellClass(e.target.value)}>
                <option></option>
                <option value="base">Base</option>
                <option value="sigil">Sigil</option>
                <option value="augment">Augment</option>
                <option value="status">Status</option>
                <option value="artifact">Artifact</option>
            </select>
        </div>
    )
}