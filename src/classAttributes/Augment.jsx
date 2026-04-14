import '../App.css'
import {useState} from 'react';


export default augmentAttributes;

function augmentAttributes(displayJSON, setJSON) {
    const [amount, setAmount] = useState(0)
    const [consumability, setConsume] = useState('refreshing')

    function update(newClass) {
        if (newClass == 'augment') {init()}
        else {reset()};
    }

    function reset() {
        console.log('reset')
        handleSetAmount('null');
        handleSetConsume('');
    }
    function init() {
        console.log('init')
        handleSetAmount(amount);
        handleSetConsume(consumability);
    }

    const handleSetAmount = (newValue) =>{
        console.log(newValue)
        if ( newValue == 'null') {
            console.log('null')
            setJSON(items => items.filter((item) => item.id !== 'amount'));
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

    const handleSetConsume = (newValue) =>{
        if ( newValue == '') {
            setJSON(items => items.filter((item) => item.id !== 'consumability'));
        }
        else if (displayJSON.some(item => item.id === 'consumability')) {
            setConsume(newValue)
            setJSON(items => items.map(item => 
                item.id === 'consumability' ? { ...item, value: newValue } : item ))
        }
        else {
            setConsume(newValue)
            setJSON(items => [...items, {id: "consumability", value: newValue }])
        }
    }

    function display() {
        const spellClass = displayJSON.filter( item => (item.id == 'class')).map(item => item.value);
        if (spellClass.toString() !== 'augment') {
            return <></>
        }
        else {
            return (
                <>
                    <div className="node">
                        <a className="nodeName">Amount: </a>
                        <input type="number" step='1' id="amount" value={amount} onChange={e => handleSetAmount(e.target.value)}/>
                    </div>
                    <div className="node">
                        <a className="nodeName">Consumability: </a>
                        <select id="consumability" value={consumability} onChange={e => handleSetConsume(e.target.value)}>
                            <option value="Refreshing">Refreshing</option>
                            <option value="consumable">Consumable</option>
                            <option value="nonconsumable">Nonconsumable</option>
                        </select>
                    </div>
                </>
            );
        }
    }

    return {update, display}
}