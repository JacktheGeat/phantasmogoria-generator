import '../App.css'
import {useState} from 'react';


export default baseAttributes;

function baseAttributes(displayJSON, setJSON) {
    const [size, setSize] = useState(0)

    function update(newClass) {
        if (newClass !== 'base') {reset()}
        else {init()};
    }

    function reset() {
        handleSetSize('null');
    }
    function init() {
        handleSetSize(size);
    }

    const handleSetSize = (newValue) =>{
        if ( newValue == 'null') {
            setJSON(items => items.filter((item) => item.id !== 'growth_rate'));
        }
        else if (displayJSON.some(item => item.id === 'growth_rate')) {
            setSize(parseInt(Number(newValue)));
            setJSON(items => items.map(item => 
                item.id === 'growth_rate' ? { ...item, value: parseInt(Number(newValue)) } : item))
        }
        else {
            setSize(parseInt(Number(newValue)));
            setJSON(items => [...items, {id: "growth_rate", value: parseInt(Number(newValue)) }])
        }
    }

    function display() {
        const spellClass = displayJSON.filter( item => (item.id == 'class')).map(item => item.value);
        if (spellClass.toString() !== 'base') {
            return <></>
        }
        else {
            return (
                <div className="node">
                <a className="nodeName">Size: </a>
                <input type="number" step='1' id="size" value={size} onChange={e => handleSetSize(e.target.value)}/>
                </div>
            );
        }
    }

    return {update, display}
}