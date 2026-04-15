import { useState } from 'react';
import './App.css';

import Attributes from './Attribute';
import Effects from './Effect';
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

  const formatJSON = (inputElement, indentLevel = 0) => {
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
      return "[" + inputElement.map(item => "\n" + "    ".repeat(indentLevel)+ '"' + item.id + '"' + ": " + formatJSON(item.value, indentLevel +1)) +"\n" +  "    ".repeat(indentLevel-1)+"]"
    }
    else if (inputElement.constructor.name == "Object") {
      return "{" + inputElement.map(item => "\n" + "    ".repeat(indentLevel)+ '"' + item.id + '"' + ": " + formatJSON(item.value, indentLevel +1)) +"\n" +  "    ".repeat(indentLevel-1)+"}"
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
        <SpellID setDisplayJSON={setDisplayJSON}/>

        <SpellName setDisplayJSON={setDisplayJSON}/>

        <SpellClass displayJSON={displayJSON} setJSON={setDisplayJSON}/>

        <Attributes/>
        <Effects/>
        <Texture setDisplayJSON={setDisplayJSON}/>
      </div>
      <Results getDisplayJSON={getDisplayJSON}/>
    </>
  )
}
