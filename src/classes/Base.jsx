import '../App.css'
import {useState} from 'react';


export default baseAttributes;

function baseAttributes(displayJSON, setJSON) {
    const [growthRate, setGR] = useState(0)

    function update(newClass) {
        if (newClass !== 'base') {reset()}
        else {init()};
    }

    function reset() {
        handleSetGR('null');
    }
    function init() {
        handleSetGR(growthRate);
    }

    const handleSetGR = (newValue) =>{
        if ( newValue == 'null') {
            setJSON(items => items.filter((item) => item.id !== 'growth_rate'));
        }
        else if (displayJSON.some(item => item.id === 'growth_rate')) {
            setGR(Number(newValue));
            setJSON(items => items.map(item => 
                item.id === 'growth_rate' ? { ...item, value: Number(newValue) } : item))
        }
        else {
            setGR(Number(newValue));
            setJSON(items => [...items, {id: "growth_rate", value: Number(newValue) }])
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
                <a className="nodeName">Growth Rate: </a>
                <input type="number" step='0.1' id="growth_rate" value={growthRate} onChange={e => handleSetGR(e.target.value)}/>
                </div>
            );
        }
    }

    return {update, display}
}