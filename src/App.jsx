import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Json generator</h1>
      <div class="container" className="generator">
        <div class="row">
          <a class="leftjson">ID: </a>
          <input class="rightjson" name="id" id="id"/>
        </div>
        <div class="row">
          <a class="leftjson">Class: </a>
          <select class="rightjson" name="class" id="class">
            <option value="base">Base</option>
            <option value="sigil">Sigil</option>
            <option value="augment">Augment</option>
            <option value="status">Status</option>
            <option value="artifact">Artifact</option>
          </select>
        </div>
        <div class="row">
          <a class="leftjson">Name: </a>
          <input class="rightjson" name="name" id="name"/>
        </div>
        <div class="row">
          <a class="leftjson">Rarity: </a>
          <select class="rightjson" name="rarity" id="rarity">
            <option value="common">Common</option>
            <option value="uncommon">Uncommon</option>
            <option value="rare">Rare</option>
            <option value="legendary">Legendary</option>
            <option value="mythical">Mythical</option>
          </select>
        </div>
        <div class="row">
          <a class="leftjson">Icon: </a>
          <input class="rightjson" name="texture" id="texture"/>
        </div>
      </div>
    </>
  )
}

export default App
