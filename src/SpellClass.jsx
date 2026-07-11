import {React, useState } from 'react';

import './App.css'
import { alert as Alert } from './helper';

import baseAttributes from './classAttributes/Base';
import sigilAttributes from './classAttributes/Sigil';
import augmentAttributes from './classAttributes/Augment';
import statusAttributes from './classAttributes/Status';
import useType from './classAttributes/UseType';
import sizeHandler from './classAttributes/Size';
import rarityHandler from './classAttributes/Rarity';

import AttributeBox from './AttributeBox';
import EffectBox from './EffectBox';

export default SpellClass;

function SpellClass({setJSON}) {
    const [spellClass, setClass] = useState('');
    const [attributesList, setAttributesList] = useState({})

    const base = baseAttributes(handleSetAttributes);
    const sigil = sigilAttributes(handleSetAttributes);
    const augment = augmentAttributes(handleSetAttributes);
    const status = statusAttributes(handleSetAttributes)
    const exhaustType = useType(handleSetAttributes);
    const size = sizeHandler(handleSetAttributes)
    const rarity = rarityHandler(handleSetAttributes);

    const attributesHandler = AttributeBox(handleSetAttributes)

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

    function handleSetAttributes(target, newValue) {
        if (!target) return;

        setAttributesList(prev => {
            let updated = { ...prev };

            if (target === 'attributes') {
                Object.entries(newValue).forEach(([k, v]) => {
                    updated[k] = (v === 'undefined') ? undefined : v;
                });
            } else {
                updated[target] = newValue;
            }

            // use the SAME updated object here
            setJSON('attributes', updated);

            return updated;
        });
    }

    return (
        <>
            <div className="node">
                <a className="nodeName">Class: </a>
                <select  className='valueInput' value={spellClass} onChange={e => handleClass(e.target.value)}>
                    <option value=''></option>
                    <option value="base">Base</option>
                    <option value="sigil">Sigil</option>
                    <option value="augment">Augment</option>
                    <option value="status">Status</option>
                    <option value="artifact">Artifact</option>
                </select>
                { (spellClass == '') && <Alert/>}
            </div>
            <div className='node-box'>
              {base.display}
              {sigil.display}
              {augment.display}
              {exhaustType.display}
              {status.display}
              {size.display}
              {rarity.display}
            </div>
            <EffectBox setJSON={setJSON} classType={spellClass}/>
            {attributesHandler.display}
        </>
    )
}