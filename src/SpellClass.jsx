import {React, useState } from 'react';

import './App.css'
import baseAttributes from './classAttributes/Base';
import sigilAttributes from './classAttributes/Sigil';
import augmentAttributes from './classAttributes/Augment';
import statusAttributes from './classAttributes/Status';
import useType from './classAttributes/UseType';
import sizeHandler from './classAttributes/Size';
import rarityHandler from './classAttributes/Rarity';

export default SpellClass;

function SpellClass({displayJSON, setJSON}) {
    const [spellClass, setClass] = useState();

    const base = baseAttributes(setJSON);
    const sigil = sigilAttributes(setJSON);
    const augment = augmentAttributes(setJSON);
    const status = statusAttributes(setJSON)
    const exhaustType = useType(setJSON);
    const size = sizeHandler(setJSON)
    const rarity = rarityHandler(setJSON);


    function handleClass(newClass) { 
      setJSON('class', newClass);
      setClass(newClass);
      rarity.update(newClass);
      size.update(newClass);
      exhaustType.update(newClass);
      base.update(newClass);
      sigil.update(newClass);
      augment.update(newClass);
      status.update(newClass);
    }

    

    return (
        <>
            <div className="node">
                <a className="nodeName">Class: </a>
                <select  name="class" id="class" value={spellClass} onChange={e => handleClass(e.target.value)}>
                    <option value=''></option>
                    <option value="base">Base</option>
                    <option value="sigil">Sigil</option>
                    <option value="augment">Augment</option>
                    <option value="status">Status</option>
                    <option value="artifact">Artifact</option>
                </select>
            </div>
            <div className='container' style={{paddingLeft: '20px'}}>
              {base.display()}
              {sigil.display()}
              {augment.display()}
              {exhaustType.display()}
              {status.display()}
              {size.display()}
              {rarity.display()}
            </div>

        </>
    )
}