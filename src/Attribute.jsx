import {React, useState } from 'react';

import './App.css'


const Attribute = ({ id, setJSON }) => {
    const myID= id;
    const [value, setValue] = useState(0)

    function update(newValue) {
        setValue(parseFloat(Number(newValue)))
        setJSON(myID, parseFloat(Number(newValue)))
    }

    return (
        <>
            <div className='attributeBox'>
                <button className='remove' onClick={() => {setJSON(myID, undefined)}}>-</button>
                <a>{myID}:</a>
                <input type="number" value={value} step='0.1' onChange={e => update(e.target.value)}/>
            </div>
        </>
    )
};

export default Attribute