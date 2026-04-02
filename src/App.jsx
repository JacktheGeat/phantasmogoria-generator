import { useState } from 'react'
import './App.css'
import Attribute from './Attribute'; // <-- Import the separate file
export default App

function App() {

  const [items, setItems] = useState([]);

  const addCard = () => {
    const newCard = { id: Date.now(), text: `Attribute ${items.length + 1}` };
    setItems([...items, newCard]);
  };

  const removeCard = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      <div>
      </div>
      <h1>Json generator</h1>
      <div class="container" className="generator">
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
          <button class='add' onClick={addCard}>+</button>
        </div>
        <div>
          {items.map(item => (
              <Attribute 
                key={item.id} 
                id={item.id} 
                title={item.text} 
                onRemove={removeCard} 
              />
            ))}
        </div>
      </div>
    </>
  )
}
