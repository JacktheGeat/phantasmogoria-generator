import { useState, useRef } from 'react';
import './App.css';
import Attribute from './Attribute';
import Effect from './Effect';
export default App;

function App() {

  const [attributeItems, setAttributeItems] = useState([]);
  const [attributeInput, setAttributeInput] = useState('');

  const [effectItems, setEffectItems] = useState([]);
  const [effectInput, setEffectInput] = useState('');


  const addAttribute = () => {
    const newAttribute = { id: Date.now(), attributeClass: `${attributeInput}` };
    setAttributeItems([...attributeItems, newAttribute]);
  };
  const removeAttribute = (id) => {
    setAttributeItems(attributeItems.filter(item => item.id !== id));
  };

  const addEffect= () => {
    const newEffect = { id: Date.now(), effectClass: `${effectInput}` };
    setEffectItems([...effectItems, newEffect]);
  };
  const removeEffect = (id) => {
    setEffectItems(effectItems.filter(item => item.id !== id));
  };

  return (
    <>
      <div>
      </div>
      <h1>Json generator</h1>
      <div class="container" id="generator">
        <div class="row">
          <a >ID: </a>
          <input  name="id" id="id"/>
        </div>
        <div class="row">
          <a >Class: </a>
          <select  name="class" id="class">
            <option value="base">Base</option>
            <option value="sigil">Sigil</option>
            <option value="augment">Augment</option>
            <option value="status">Status</option>
            <option value="artifact">Artifact</option>
          </select>
        </div>
        <div class="row">
          <a >Name: </a>
          <input  name="name" id="name"/>
        </div>
        <div class="row">
          <a >Rarity: </a>
          <select  name="rarity" id="rarity">
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="legendary">Legendary</option>
            <option value="mythical">Mythical</option>
          </select>
        </div>
        <div class="row">
          <a >Icon: </a>
          <input  name="texture" id="texture"/>
        </div>
        <div class="row">
          <a >Attributes: </a>
          <input type='text' value={attributeInput} onChange={e => setAttributeInput(e.target.value)}/>
          <button class='add' onClick={addAttribute}>+</button>
        </div>
        <div>
          {attributeItems.map(item => (
              <Attribute 
                key={item.id} 
                id={item.id} 
                attributeClass={item.attributeClass} 
                onRemove={removeAttribute} 
              />
            ))}
        </div>
        <div class="row">
          <a >Effects: </a>
          <input type='text' value={effectInput} onChange={e => setEffectInput(e.target.value)}/>
          <button class='add' onClick={addEffect}>+</button>
        </div>
        <div>
          {effectItems.map(item => (
              <Effect 
                key={item.id} 
                id={item.id} 
                effectClass={item.effectClass} 
                onRemove={removeEffect} 
              />
            ))}
        </div>
      </div>
    </>
  )
}
