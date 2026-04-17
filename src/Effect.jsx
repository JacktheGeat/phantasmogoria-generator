import {React, useState } from 'react';

import './App.css'


const Effect = ({ myEffect, myKey, setJSON }) => {

    const [value, setValue] = useState({
            effect: myEffect,
            multiplier: 0,
            source: 'constant',
            target: 'self',
            conditions: [],
            modifiers: []
        })

    const effect = myEffect
    const key = myKey

    const effObj = () => {
        return {
        effect: myEffect,
        multiplier: multiplier,
        source: source,
        target: target,
        conditions: [],
        modifiers: []
        }
    }

    function update(target, newValue) {
        setValue( (prev) => ({...prev, [target]:newValue }));
        setJSON(key, {...value, [target]:newValue })
    }

    return (
        <>
            <div className='effectBox'>
                <button className='remove' onClick={() => {setJSON(key, undefined)}}>-</button>
                <a>{effect}:</a>
                <input type="number" value={value.multiplier} step='0.1' onChange={(e) => {update('multiplier', e.target.value)}}/>
            </div>
        </>
    )
};

export default Effect