import '../App.css'
import {useState} from 'react';


export default augmentAttributes;

function augmentAttributes(displayJSON, setJSON) {
    const [amount, setAmount] = useState(0)

    function reset() {
        handleSetAmount('null');
    }
    function init() {
        handleSetAmount(amount);
    }

    const handleSetAmount = (newValue) =>{
        if ( newValue == 'null') {
            setJSON(items => items.filter((item) => item.id !== 'amount'));
        }
        else if (typeof parseInt(Number(newValue)) == 'string') {
            
        }
        else if (displayJSON.some(item => item.id === 'amount')) {
            setAmount(parseInt(Number(newValue)));
            setJSON(items => items.map(item => 
                item.id === 'amount' ? { ...item, value: parseInt(Number(newValue)) } : item))
        }
        else {
            setAmount(parseInt((Number(newValue))));
            setJSON(items => [...items, {id: "amount", value: parseInt(Number(newValue)) }])
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
                <a className="nodeName">Amount: </a>
                <input type="number" step='1' id="growth_rate" value={growthRate} onChange={e => handleSetGR(e.target.value)}/>
                </div>
            );
        }
    }

    return {reset,init, display}
}