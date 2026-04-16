import AttributeBox from './AttributeBox';
import EffectBox from './EffectBox';
import SpellClass from './SpellClass';
import SpellName from './SpellName';
import Texture from './Texture';
import SpellID from './SpellID';
import Results from './Results';
import './App.css';

export default function Layout({handleSetJSON}) {
return (<>
    <div className="container" id="generator">
        <SpellID setSpellID={handleSetJSON}/>

        <SpellName setSpellName={handleSetJSON}/>

        <SpellClass setJSON={handleSetJSON}/>

        <AttributeBox setJSON={handleSetJSON}/>
        <EffectBox setJSON={handleSetJSON}/>
        <Texture setTexture={handleSetJSON}/>
    </div>
</>)
}