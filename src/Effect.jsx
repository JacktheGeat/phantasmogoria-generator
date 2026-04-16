import {React, useState } from 'react';

import './App.css'


const Effect = ({ myEffect, myKey, setJSON }) => {
    const [value, setValue] = useState({})
    const [multiplier, setMultiplier] = useState(0)
    const [source, setSource] = useState('constant')
    const [target, setTarget] = useState('self')

    const effect = myEffect
    const key = myKey

    const sample = {
        effect: myEffect,
        multiplier: multiplier,
        source: source,
        target: target,
        conditions: [],
        modifiers: []
    }

    function update(target, newValue) {
        if (target == 'multiplier') {
            setValue( (prev) => ({...prev, [target]: newValue }));
            setValue(parseFloat(Number(newValue)))
            setJSON(effect, parseFloat(Number(newValue)), key)
        }
    }

    return (
        <>
            <div className='effectBox'>
                <button className='remove' onClick={() => {setJSON(effect, undefined, key)}}>-</button>
                <a>{effect}:</a>
                <input type="number" value={multiplier} step='0.1' onChange={(e) => {update('multiplier', e.target.value)}}/>
            </div>
        </>
    )
};

export default Effect