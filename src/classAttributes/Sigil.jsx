import '../App.css'
import {useState} from 'react';

export default spellAttributes;

function spellAttributes(setJSON) {
    const [curve, setCurve] = useState('fixed')
    const [cost, setCost] = useState(0)
    const [power, setPower] = useState(0)
    const [overcharge, setOvercharge] = useState(0)

    const [currentClass, setClass] = useState('');

    function update(newClass) {
        setClass(newClass)
        if (newClass !== 'sigil') {reset()}
        else {init()};
    }


    function reset() {
        setJSON('mana_curve', undefined);
        setJSON('base_power', undefined);
        setJSON('mana_cost', undefined);
        setJSON('overcharge', undefined);
    }

    function init() {
        handleSetCost(cost);
        handleSetPower(power);
        handleSetCurve(curve);
    }

    const handleSetCurve = (newValue) =>{
        setCurve(newValue)
        setJSON('mana_curve', newValue);

        if (newValue == 'fixed') {handleSetOC(0)}
        else {handleSetOC(overcharge)}
    }

    const handleSetPower = (newValue) =>{
        setPower(newValue)
        setJSON('base_power', newValue);
    }

    const handleSetCost = (newValue) =>{
        setCost(newValue)
        setJSON('mana_cost', newValue);
    }

    const handleSetOC = (newValue) =>{
        setOvercharge(newValue)
        setJSON('overcharge', newValue);
    }

    function inputOC() {
        if (curve == 'fixed') {
            return <input disabled type="number" inputMode="numeric" step='0.01' id="base_power" value={overcharge} onChange={e => handleSetOC(e.target.value)}/>;
        }
        return <input type="number" inputMode="numeric" step='0.01' id="base_power" value={overcharge} onChange={e => handleSetOC(e.target.value)}/>;
    }

    function display() {
        if (currentClass !== 'sigil') {
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
                        <input type="number" inputMode="numeric" step='1' id="base_power" value={power} onChange={e => handleSetPower(e.target.value)}/>
                    </div>
                    <div className="node">
                        <a className="nodeName">Mana Curve: </a>
                        <select  name="class" id="class" value={curve} onChange={e => handleSetCurve(e.target.value)}>
                            <option value="fixed">Fixed</option>
                            <option value="linear">Linear</option>
                            <option value="exponential">Exponential</option>
                        </select>
                    </div>
                    <div className='container' style={{paddingLeft: '20px'}}>
                        <div className="node">
                            <a className="nodeName">Overcharge: </a>
                            {inputOC()}
                        </div>
                    </div>
                </>
            );
        }
    }

    return {update, display}
}