import {React, useState } from 'react';

import './App.css'


const Attribute = ({ id, myKey, setJSON }) => {
    const myID = id;
    const key= myKey
    const [value, setValue] = useState(0)

    function update(newValue) {
        setValue(parseFloat(Number(newValue)))
        setJSON(myID, parseFloat(Number(newValue)), key)
    }

    return (
        <>
            <div className='attributeBox'>
                <button className='remove' onClick={() => {setJSON(id, undefined, key)}}>-</button>
                <a>{myID}:</a>
                <input type="number" value={value} step='0.1' onChange={e => update(e.target.value)}/>
            </div>
        </>
    )
};

export default Attribute