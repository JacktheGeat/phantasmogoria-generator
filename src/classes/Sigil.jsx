import '../App.css'

export default spellAttributes;

function spellAttributes(displayJSON, setJSON) {

    function reset() {
        setCurve('');
        setCost('');
        setPower('');
    }

    const setCurve = (newValue) =>{
        const CurveExists = displayJSON.some(item => item.id === 'mana_curve')
        if ( newValue == '') {
        setJSON(items => items.filter((item) => item.id !== 'mana_curve'));
        }
        else if (CurveExists) {
        setJSON(items => items.map(item => 
            item.id === 'mana_curve' ? { ...item, value: Number(newValue) } : item
        ))
        }
        else {
        setJSON([...displayJSON, {id: "mana_curve", value: Number(newValue) }])
        }
    }

    const setPower = (newValue) =>{
        const powerExists = displayJSON.some(item => item.id === 'base_power')
        if ( newValue == '') {
        setJSON(items => items.filter((item) => item.id !== 'base_power'));
        }
        else if (powerExists) {
        setJSON(items => items.map(item => 
            item.id === 'base_power' ? { ...item, value: Number(newValue) } : item
        ))
        }
        else {
        setJSON([...displayJSON, {id: "base_power", value: Number(newValue) }])
        }
    }

    const setCost = (newValue) =>{
        const costExists = displayJSON.some(item => item.id === 'mana_cost')
        if ( newValue == '') {
        setJSON(items => items.filter((item) => item.id !== 'mana_cost'));
        }
        else if (costExists) {
        setJSON(items => items.map(item => 
            item.id === 'mana_cost' ? { ...item, value: Number(newValue) } : item
        ))
        }
        else {
        setJSON([...displayJSON, {id: "mana_cost", value: Number(newValue) }])
        }
    }

    function display() {
        const spellClass = displayJSON.filter( item => (item.id == 'class')).map(item => item.value);
        if (spellClass.toString() !== 'sigil') {
            return <></>
        }

        else {
            const costExists = displayJSON.some(item => item.id === 'mana_cost')
            let currentCost = 0;
            if (costExists) { currentCost = displayJSON.filter( item => (item.id == 'mana_cost'))[0].value;}
            else currentCost = 0;

            const powerExists = displayJSON.some(item => item.id === 'base_power')
            let currentPower = 0;
            if (powerExists) { currentPower = displayJSON.filter( item => (item.id == 'base_power'))[0].value;}
            else currentPower = 0;

        
            return (
                <>
                <div className="node">
                <a className="nodeName">Mana Cost: </a>
                <input type="number" step='0.1' id="mana_cost" value={currentCost} onChange={e => setCost(e.target.value)}/>
                </div>
                <div className="node">
                <a className="nodeName">Base Power: </a>
                <input type="number" step='1' id="base_power" value={currentPower} onChange={e => setPower(e.target.value)}/>
                </div>
                <div className="node">
                <a className="nodeName">Mana Curve: </a>
                </div>
                </>
            );
        }
    }

    return {reset, display}
}