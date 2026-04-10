import {React, useState } from 'react';

import './App.css'

export default Rarity;

function Rarity({displayJSON, setRarity}) {
    const spellClass = displayJSON.filter( item => (item.id == 'class')).map(item => item.value);

    const rarity = displayJSON.filter( item => (item.id == 'rarity'))[0].value;
      
    if (spellClass.toString() !== 'status' && spellClass.toString() !== '') {
      return (
        <div className="node">
          <a className="nodeName">Rarity: </a>
          <select name='rarity' id="rarity" value={rarity} onChange={
            e => {setRarity( e.target.value )}}>
              <option></option>
              <option value="basic">Basic</option>
              <option value="common">Commmon</option>
              <option value="rare">Rare</option>
              <option value="legendary">Legendary</option>
              <option value="special">Special</option>
          </select>
        </div>
      )
    }
    else {

      return (<></>);
    }
}