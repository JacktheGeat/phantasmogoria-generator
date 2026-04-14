import '../App.css'
import {useState} from 'react';

export default spellAttributes;

function spellAttributes(displayJSON, setJSON) {
    const [curve, setCurve] = useState('fixed')
    const [cost, setCost] = useState(0)
    const [power, setPower] = useState(0)
    const [overcharge, setOvercharge] = useState(0)

    function reset() {
        handleSetCurve('');
        handleSetCost('null');
        handleSetPower('null');
        handleSetOC('null')
    }

    function init() {
        handleSetCost(cost);
        handleSetPower(power);
        handleSetCurve(curve);
    }

    const handleSetCurve = (newValue) =>{
        if ( newValue == '') {
            setJSON(items => items.filter((item) => item.id !== 'mana_curve'));
        }
        else if (displayJSON.some(item => item.id === 'mana_curve')) {
            setCurve(newValue)
            setJSON(items => items.map(item => 
                item.id === 'mana_curve' ? { ...item, value: newValue } : item ))
        }
        else {
            setCurve(newValue)
            setJSON(items => [...items, {id: "mana_curve", value: newValue }])
        }
        if (newValue == 'fixed') {
            handleSetOC(0)
        } else {handleSetOC(overcharge)}
    }

    const handleSetPower = (newValue) =>{
        console.log(power);
        const powerExists = displayJSON.some(item => item.id === 'base_power')
        if ( newValue == 'null') {
        setJSON(items => items.filter((item) => item.id !== 'base_power'));
        }
        else if (typeof parseInt(Number(newValue)) == 'string') {
            
        }
        else if (powerExists) {
            setPower(parseInt(Number(newValue)))
            setJSON(items => items.map(item => 
                item.id === 'base_power' ? { ...item, value: parseInt(Number(newValue)) } : item))
        }
        else {
            setPower(parseInt(Number(newValue)))
            setJSON(items => [...items, {id: "base_power", value: parseInt(Number(newValue)) }])
        }
    }

    const handleSetCost = (newValue) =>{
        const costExists = displayJSON.some(item => item.id === 'mana_cost')
        if ( newValue == 'null') {
            setJSON(items => items.filter((item) => item.id !== 'mana_cost'));
        }
        else if (typeof parseInt(Number(newValue)) == 'string') {
            
        }
        else if (costExists) {
            setCost(parseInt(Number(newValue)));
            setJSON(items => items.map(item => 
                item.id === 'mana_cost' ? { ...item, value: parseInt(Number(newValue)) } : item))
        }
        else {
            setCost(parseInt(Number(newValue)));
            setJSON(items => [...items, {id: "mana_cost", value: parseInt(Number(newValue)) }])
        }
    }

    const handleSetOC = (newValue) =>{
        if ( newValue == 'null') {
            setJSON(items => items.filter((item) => item.id !== 'overcharge'));
        }
        else if (typeof Number(newValue) == 'string') {
            
        }
        else if (displayJSON.some(item => item.id === 'overcharge')) {
            setOvercharge(Number(newValue));
            setJSON(items => items.map(item => 
                item.id === 'overcharge' ? { ...item, value: Number(newValue) } : item))
        }
        else {
            console.log("set overcharge")
            setOvercharge(Number(newValue));
            setJSON(items => [...new Set([...items, {id: "overcharge", value: Number(newValue)} ])])
        }
    }

    function inputOC() {
        if (curve == 'fixed') {
            return <input disabled type="number" inputmode="numeric" step='0.01' id="base_power" value={overcharge} onChange={e => handleSetOC(e.target.value)}/>;
        }
        return <input type="number" inputmode="numeric" step='0.01' id="base_power" value={overcharge} onChange={e => handleSetOC(e.target.value)}/>;
    }

    function display() {
        const spellClass = displayJSON.filter( item => (item.id == 'class')).map(item => item.value);
        if (spellClass.toString() !== 'sigil') {
            return <></>
        }

        else {
            return (
                <>
                    <div className="node">
                        <a className="nodeName">Mana Cost: </a>
                        <input type="number" step='1' id="mana_cost" value={cost} onChange={e => handleSetCost(e.target.value)}/>
                    </div>
                    <div className="node">
                        <a className="nodeName">Base Power: </a>
                        <input type="number" inputmode="numeric" step='1' id="base_power" value={power} onChange={e => handleSetPower(e.target.value)}/>
                    </div>
                    <div className="node">
                        <a className="nodeName">Mana Curve: </a>
                        <select  name="class" id="class" value={curve} onChange={e => handleSetCurve(e.target.value)}>
                            <option value="fixed">Fixed</option>
                            <option value="linear">Linear</option>
                            <option value="exponential">Exponential</option>
                        </select>
                    </div>
                    <div className="node">
                        <a className="nodeName">Overcharge: </a>
                        {inputOC()}
                    </div>
                </>
            );
        }
    }

    return {reset, init, display}
}