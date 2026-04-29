import {React, useState } from 'react';

import './App.css'


const Attribute = ({ id, setJSON }) => {
    const myID= id;
    const [value, setValue] = useState(0)

    function update(newValue) {
        setValue(parseFloat(Number(newValue)))
        setJSON(myID, parseFloat(Number(newValue)))
    }

    function formatElement(word) {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
        const toReturn = capitalizedWord.replace('_', " ")
        return toReturn
    }

    return (
        <>
            <div className='attributeBox'>
                <div className='flex_column'>
                    <div className='node-header'>
                        <button className='remove' onClick={() => {setJSON(myID, undefined)}}>-</button>
                        <h3>{formatElement(myID)}:</h3>
                        <input type="number" value={value} step='0.1' onChange={e => update(e.target.value)}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Attribute