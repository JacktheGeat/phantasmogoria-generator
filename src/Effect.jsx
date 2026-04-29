import {React, useState } from 'react';

import './App.css'
import { formatText } from './helper';


const Effect = ({ myEffect, myKey, setJSON }) => {
    const floatEffects = []

    const [value, setValue] = useState({
            effect: myEffect,
            multiplier: 0,
            source: 'constant',
            target: 'self',
            conditions: [],
            modifiers: [],
            effect_var: undefined
        })

    const effect = myEffect
    const key = myKey

    function update(target, newValue) {
        if (target == 'multiplier') {
            if (newValue === '' || /^-?\d*$/.test(newValue)) {
                setValue( (prev) => ({...prev, [target]: (newValue) }));
                setJSON(key, {...value, [target]:Number(newValue) })
            } 
        }
        else {
            setValue( (prev) => ({...prev, [target]:newValue }));
            setJSON(key, {...value, [target]:newValue })
        }
    }

    return (
        <>
            <div className='effectBox'>
            <div className='flex_column'>
                <div className='node-header'>
                    <button className='remove' onClick={() => {setJSON(key, undefined)}}>-</button>
                    <h3>{formatText(effect)}</h3>
                </div>
                <div className='node'>
                    <p className='label'>Multiplier: </p>
                    <input value={value.multiplier} onChange={(e) => {update('multiplier', e.target.value)}}/>
                </div>
                <div className='node'>
                    <p>Target:</p>
                    <select  name="class" id="class" value={value.target} onChange={e => {update('target', e.target.value)}}>
                        <option value='self'>Self</option>
                        <option value="ritual">Ritual</option>
                        <option value="player">Player</option>
                        <option value="enemy">Enemy</option>
                    </select>
                </div>
            </div>
            </div>
        </>
    )
};

export default Effect