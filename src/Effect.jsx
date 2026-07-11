import {React, useState } from 'react';

import './App.css'
import { formatText } from './helper';
import { alert as Alert } from './helper';

const Effect = ({ myEffect, myKey, setJSON }) => {
    const floatEffects = []

    const [value, setValue] = useState({
            effect: myEffect,
            multiplier: 0,
            multiplierType: 'constant',
            source: '',
            target: '',
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
            <div className='nodeBox'>
                <div className='flex_column'>
                    <div className='node-header'>
                        <button className='remove' onClick={() => {setJSON(key, undefined)}}>-</button>
                        <h3>{formatText(effect)}</h3>
                    </div>
                    <div className='node'>
                        <a className='nodeName'>Multiplier: </a>
                        <input value={value.multiplier} className='valueInput' onChange={(e) => {update('multiplier', e.target.value)}}/>
                    </div>
                    <div className='node'>
                        <a className='nodeName'>Multiplier Type:</a>
                        <select  className='valueInput' value={value.multiplierType} onChange={e => {update('multiplierType', e.target.value)}}>
                            <option value=''></option>
                            <option value='constant'>Self</option>
                            <option value="exponential">Ritual</option>
                        </select>
                        {(value.multiplierType == '') && <Alert/>}
                    </div>
                    <div className='node'>
                        <a className='nodeName'>Source:</a>
                        <select  className='valueInput' value={value.source} onChange={e => {update('source', e.target.value)}}>
                            <option value=''></option>
                            <option value='spell_power'>Spell Power</option>
                            <option value="player_shield">Player Shield</option>
                            <option value="player_health">Player Health</option>
                            <option value="enemy_health">Enemy Health</option>
                        </select>
                        {(value.source == '') && <Alert/>}
                    </div>
                    <div className='node'>
                        <a className='nodeName'>Target:</a>
                        <select  className='valueInput' value={value.target} onChange={e => {update('target', e.target.value)}}>
                            <option value=''></option>
                            <option value='self'>Self</option>
                            <option value="ritual">Ritual</option>
                            <option value="player">Player</option>
                            <option value="enemy">Enemy</option>
                            <option value="hand">Hand</option>
                        </select>
                        {(value.target == '') && <Alert/>}
                    </div>
                    <div className='node'>
                        <a className='nodeName'>Conditions:</a>
                    </div>
                    <div className='node'>
                        <a className='nodeName'>Effect Var:</a>
                        <input value={value.effect_var} className='valueInput' onChange={(e) => {update('effect_var', e.target.value)}}/>
                    </div>
                    <div className='node'>
                        <a className='nodeName'>Tags:</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Effect