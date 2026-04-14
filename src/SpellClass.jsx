import {React, useState } from 'react';

import './App.css'
import baseAttributes from './classAttributes/Base';
import sigilAttributes from './classAttributes/Sigil';
import augmentAttributes from './classAttributes/Augment';
import useType from './classAttributes/UseType'

export default SpellClass;

function SpellClass({displayJSON, setJSON}) {
    const base = baseAttributes(displayJSON, setJSON);
    const sigil = sigilAttributes(displayJSON,setJSON);
    const augment = augmentAttributes(displayJSON,setJSON);
    const exhaustType = useType(displayJSON,setJSON);

    const [spellClass, setClass] = useState();

    function handleClass(newClass) {
      console.log(newClass);
      setJSON((items) => items.map(item => 
        item.id === 'class' ? { ...item, value: newClass } : item ));
      setClass(newClass);
      base.update(newClass);
      sigil.update(newClass);
      augment.update(newClass);
      exhaustType.update(newClass);
    }

    const setRarity = (newRarity) =>{
      const rarityExists = displayJSON.some(item => item.id === 'rarity')
      if ( newRarity == '') {
        setJSON(items => items.filter((item) => item.id !== 'rarity'));
      }
      else if (rarityExists) {
        setJSON(items => items.map(item => 
          item.id === 'rarity' ? { ...item, value: newRarity } : item
        ))
      }
      else {
        setJSON(items => [...items, {id: "rarity", value: newRarity }])
      }
    }
    const rarity = () => {
      const spellClass = displayJSON.filter( item => (item.id == 'class')).map(item => item.value);
      const rarityExists = displayJSON.some(item => item.id === 'rarity')
      let currentRarity;
      if (rarityExists) { currentRarity = displayJSON.filter( item => (item.id == 'rarity'))[0].value;}
      else currentRarity = '';

      if (spellClass.toString() == 'status' || spellClass.toString() == '') {
        return <></>
      }
      else {
        return (
          <div className="node">
            <a className="nodeName">Rarity: </a>
            <select name='rarity' id="rarity" value={currentRarity} onChange={
              e => {setRarity( e.target.value )}}>
                <option value=''></option>
                <option value="basic">Basic</option>
                <option value="common">Commmon</option>
                <option value="rare">Rare</option>
                <option value="legendary">Legendary</option>
                <option value="special">Special</option>
            </select>
          </div>
        );
      }
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
              {rarity()}
            </div>

        </>
    )
}