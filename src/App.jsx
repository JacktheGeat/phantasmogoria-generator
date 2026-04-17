import { useState, useCallback} from 'react';
import './App.css';

import AttributeBox from './AttributeBox';
import EffectBox from './EffectBox';
import SpellClass from './SpellClass';
import SpellName from './SpellName';
import Texture from './Texture';
import SpellID from './SpellID';
import Results from './Results';

export default App;

const useHandleJSON = () => {
  const [displayJSON, setDisplayJSON] = useState(
    {
      id: '',
      name: '',
      class: '',
      attributes: [
      ],
        effects: [
      ],
        texture: '',
    }
  )

  const formatJSON = (key, value, indentLevel = 0) => {
    if (value == undefined){
      return ''
    }
    else if (typeof value == 'object') {
      if (Array.isArray(value)) {
        return ("\n" + "  ".repeat(indentLevel) 
        + key + ": [" 
        + value.map(
          (item) => "  ".repeat(indentLevel+1) + formatJSON("", item, indentLevel+1)
        ) 
        + "\n"+"  ".repeat(indentLevel) +"]")
      }
      else {
        if (key == "") {
          return (
            "\n" + "  ".repeat(indentLevel) 
            +"{" 
            + Object.entries(value).map(
              ([subKey, subValue]) => subKey !== 'key' ? formatJSON(subKey, subValue, indentLevel+1) : ''
            ).filter((item) => (item !== '')).join(",") 
            +"\n"+ "  ".repeat(indentLevel) +"}"
          )
        } 
        
      }
    }
    else return ("\n" + "  ".repeat(indentLevel) + (key == '' ? '' :key + ": " ) + value)
  }

  function handleSetJSON(target, newValue){
    setDisplayJSON( (prev) => ({...prev, [target]: newValue }));
  }

  const getDisplayJSON = () => {
    const result = (
      "{" + Object.entries(displayJSON).map(([key, value]) => formatJSON(key,value, 1)).filter(item => item !== '').join(",") + "\n}"
    )
    // console.log(result);
    return result;
  }
  return {formatJSON, handleSetJSON, getDisplayJSON}
}

function App() {
  const jsonObject = useHandleJSON();

  return (
    <>
      <h1>Json generator</h1>
      <div className="container" id="generator">
        <SpellID setSpellID={jsonObject.handleSetJSON}/>

        <SpellName setSpellName={jsonObject.handleSetJSON}/>

        <SpellClass setJSON={jsonObject.handleSetJSON}/>

        <AttributeBox setJSON={jsonObject.handleSetJSON}/>
        <EffectBox setJSON={jsonObject.handleSetJSON}/>
        <Texture setTexture={jsonObject.handleSetJSON}/>
      </div>
      <Results displayJSON={jsonObject.getDisplayJSON()}/>
    </>
  )
}
