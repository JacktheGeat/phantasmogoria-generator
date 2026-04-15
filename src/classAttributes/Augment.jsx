import '../App.css'
import {useState} from 'react';


export default augmentAttributes;

function augmentAttributes(setJSON) {
    const [amount, setAmount] = useState(0)
    const [consumability, setConsume] = useState('refreshing')
    const [currentClass, setClass] = useState('');

    function update(newClass) {
        setClass(newClass)
        if (newClass !== 'augment') {reset()}
        else {init()};
    }

    function reset() {
        setJSON('amount', undefined);
        setJSON('consumability', undefined);
    }
    
    function init() {
        handleSetAmount(amount);
        handleSetConsume(consumability);
    }

    const handleSetAmount = (newValue) =>{
        setAmount(parseInt(Number(newValue)));
        setJSON('amount', parseInt(Number(newValue)))
    }

    const handleSetConsume = (newValue) =>{
        setConsume(newValue)
        setJSON('consumability' , newValue)
    }

    function display() {
        if (currentClass !== 'augment') {
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