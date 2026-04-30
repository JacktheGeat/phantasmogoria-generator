import {React, useState } from 'react';

import './App.css'
import { alert as Alert } from './helper';

export default SpellName;

function SpellName({setJSON}) {
    
    const [name, setName] = useState('');
    
    function handleSetName(newID) {
        setName(newID);
        setJSON('name', newID);
    }
    
    return (
        <div className="node">
            <a title="Click to submit your info" className="nodeName">Name: </a>
            <input className='valueInput' value={name} onChange={e => handleSetName(e.target.value)}/>
            {(name == '') && <Alert/>}
        </div>
    )
}