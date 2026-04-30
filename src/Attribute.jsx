import {React, useState } from 'react';

import './App.css'


const Attribute = ({ id, setJSON }) => {
    const myID= id;
    const [value, setValue] = useState(0)

    function update(newValue) {
        if (newValue === '' || /^-?\d*\.?\d*$/.test(newValue)) {
            console.log(newValue)
            setValue(newValue);
            setJSON(myID, parseFloat(Number(newValue)));
        } 
        
    }

    function formatElement(word) {
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
        const toReturn = capitalizedWord.replace('_', " ")
        return toReturn
    }

    return (
        <>
            <div className='attributeBox'>
                <div className='node'>
                        <button className='remove' onClick={() => {setJSON(myID, undefined)}}>-</button>
                        <a>{formatElement(myID)}:</a>
                        <input className='valueInput' value={value} onChange={e => update(e.target.value)}/>
                </div>
            </div>
        </>
    )
};

export default Attribute