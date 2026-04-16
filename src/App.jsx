import { useState } from 'react';
import './App.css';

import AttributeBox from './AttributeBox';
import EffectBox from './EffectBox';
import SpellClass from './SpellClass';
import SpellName from './SpellName';
import Texture from './Texture';
import SpellID from './SpellID';
import Results from './Results';

export default App;

function App() {

  const [displayJSON, setDisplayJSON] = useState(
    [
      {id:'id', value: ''},
      {id: 'name', value: ''},
      {id: 'class', value: ''},
      {id: 'attributes', value: []},
      {id: 'effects', value: []},
      {id: 'texture', value: ''}
    ]
  )
  function handleSetJSON(target, newValue){
    if ( newValue == undefined) {
      setDisplayJSON(items => items.filter((item) => item.id !== target));
    }
    else if (displayJSON.some(item => item.id === target)) {
      setDisplayJSON(items => items.map(item => 
      item.id === target ? { ...item, value: newValue } : item))
    }
    else {
      setDisplayJSON(items => [...new Set([...items, {id: target, value: newValue} ])])
    }
  }

  const formatJSON = (inputElement, indentLevel = 0) => {
    if ( inputElement.constructor.name == 'Array') {
      console.log(inputElement.map(item => item.constructor.name))
    }
    if (indentLevel == 1) {
      return inputElement.map(item => "\n" + "    ".repeat(indentLevel)+ '"' + item.id + '"' + ": " + formatJSON(item.value, indentLevel +1))
    }
    if (typeof inputElement == 'boolean') {
      return  inputElement;
    }
    else if (typeof inputElement == 'string') {
      return '"' + inputElement +'"';
    }
    else if (typeof inputElement == 'number') {
      return inputElement;
    }
    else if (inputElement.constructor.name == "Array") {
      return (
        "[" 
        + inputElement.map(item => "\n" + "    ".repeat(indentLevel)+ formatJSON(item, indentLevel +1)) 
        +"\n" +  "    ".repeat(indentLevel-1)+"]"
      )
    }
    else if (inputElement.constructor.name == "Object") {
      return "{\n" + "    ".repeat(indentLevel)+ '"' + inputElement.id + '"' + ": " + formatJSON(inputElement.value, indentLevel +1) +"\n" +  "    ".repeat(indentLevel-1)+"}"
    }
    else return typeof inputElement
    }

  const getDisplayJSON = () => {
    return (
      "{" + formatJSON(displayJSON.filter(item => item.id), 1) + "\n}"
    )
  }


  return (
    <>
      <h1>Json generator</h1>
      <div className="container" id="generator">
        <SpellID setSpellID={handleSetJSON}/>

        <SpellName setSpellName={handleSetJSON}/>

        <SpellClass displayJSON={displayJSON} setJSON={handleSetJSON}/>

        <AttributeBox setJSON={handleSetJSON}/>
        <EffectBox setJSON={handleSetJSON}/>
        <Texture setTexture={handleSetJSON}/>
      </div>
      <Results getDisplayJSON={getDisplayJSON}/>
    </>
  )
}
