import { useState } from 'react';
import './App.css';
import Attributes from './Attribute';
import Effects from './Effect';
export default App;

function App() {

  const [attributeItems, setAttributeItems] = useState([]);
  const [attributeInput, setAttributeInput] = useState('');

  const addAttribute = () => {
    const newAttribute = { id: Date.now(), attributeClass: `${attributeInput}` };
    setAttributeItems([...attributeItems, newAttribute]);
  };
  const removeAttribute = (id) => {
    setAttributeItems(attributeItems.filter(item => item.id !== id));
  };

  return (
    <>
      <div>
      </div>
      <h1>Json generator</h1>
      <div className="container" id="generator">
        <div className="row">
          <a >ID: </a>
          <input  name="id" id="id"/>
        </div>
        <div className="row">
          <a >Class: </a>
          <select  name="class" id="class">
            <option value="base">Base</option>
            <option value="sigil">Sigil</option>
            <option value="augment">Augment</option>
            <option value="status">Status</option>
            <option value="artifact">Artifact</option>
          </select>
        </div>
        <div className="row">
          <a >Name: </a>
          <input  name="name" id="name"/>
        </div>
        <div className="row">
          <a >Rarity: </a>
          <select  name="rarity" id="rarity">
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="legendary">Legendary</option>
            <option value="mythical">Mythical</option>
          </select>
        </div>
        <div className="row">
          <a >Icon: </a>
          <input  name="texture" id="texture"/>
        </div>
        <Attributes/>
        <Effects/>
      </div>
    </>
  )
}
