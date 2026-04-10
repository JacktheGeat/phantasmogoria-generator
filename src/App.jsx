import { useState } from 'react';
import './App.css';

import Attributes from './Attribute';
import Effects from './Effect';
import SpellClass from './SpellClass';
import SpellName from './SpellName';
import Texture from './Texture';
import Rarity from './Rarity';

export default App;

function App() {

  const  setSpellClass = (newClass) => {
    setDisplayJSON(displayJSON.map(item => 
      item.id === 'class' ? { ...item, value: newClass } : item ))
  }

  const setRarity = (newRarity) =>{
    setDisplayJSON(displayJSON.map(item => 
              item.id === 'rarity' ? { ...item, value: newRarity } : item
    ))}

  const [spellName, setSpellName] = useState('');

  const [displayJSON, setDisplayJSON] = useState(
    [
      {id: 'name', value: ''},
      {id: 'class', value: 'test'},
      {id: 'rarity', value: 'null'},
      {id: 'attributes', value: []},
      {id: 'effects', value: []}
    ]
  )


  return (
    <>
      <h1>Json generator</h1>
      <div className="container" id="generator">
        <div className="node">
          <a className="nodeName">ID: </a>
          <input  name="id" id="id"/>
        </div>

        <SpellName setSpellName={setSpellName}/>

        <SpellClass setSpellClass={setSpellClass}/>
        <Rarity displayJSON={displayJSON} setRarity={setRarity}/>

        <Attributes/>
        <Effects/>
        <Texture/>
      </div>
      <div className='resultsBox'>
        <textarea wrap="{off}" autoCorrect="{off}" autoCapitalize="{none}" spellCheck="{false}" readOnly="{true}" value={displayJSON.map(item => "\n" + item.id + ': ' + item.value)}>
        </textarea>
      </div>
    </>
  )
}
