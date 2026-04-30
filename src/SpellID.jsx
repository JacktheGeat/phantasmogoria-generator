import {React, useState } from 'react';

import './App.css'
import { alert as Alert } from './helper';

export default SpellID;

function SpellID({setJSON}) {

    const [id, setID] = useState('');

    function handleSetID(newID) {
        setID(newID);
        setJSON('id', newID);
    }
    
    return (
        <div className="node">
            
                <a className="nodeName">ID: </a>
            
            <input  className='valueInput' value={id} onChange={e => handleSetID(e.target.value)}/>
            {(id == '') && <Alert/>}
        </div>
    )
}