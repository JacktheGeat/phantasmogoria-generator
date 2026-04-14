import '../App.css'

export default baseAttributes;

function baseAttributes(displayJSON, setJSON) {

    function reset() {
        setGrowthRate('');
    }

    const setGrowthRate = (newGR) =>{
        const growthRateExists = displayJSON.some(item => item.id === 'growth_rate')
        if ( newGR == '') {
        setJSON(items => items.filter((item) => item.id !== 'growth_rate'));
        }
        else if (growthRateExists) {
        setJSON(items => items.map(item => 
            item.id === 'growth_rate' ? { ...item, value: Number(newGR) } : item
        ))
        }
        else {
        setJSON([...displayJSON, {id: "growth_rate", value: Number(newGR) }])
        }
    }

    function display() {
        const spellClass = displayJSON.filter( item => (item.id == 'class')).map(item => item.value);
        const growthRateExists = displayJSON.some(item => item.id === 'growth_rate')
        let currentGrowthRate = 0;
        if (growthRateExists) { currentGrowthRate = displayJSON.filter( item => (item.id == 'growth_rate'))[0].value;}
        else currentGrowthRate = 0;

        if (spellClass.toString() !== 'base') {
            return <></>
        }
        else {
            return (
                <div className="node">
                <a className="nodeName">Growth Rate: </a>
                <input type="number" step='0.1' id="growth_rate" value={currentGrowthRate} onChange={e => setGrowthRate(e.target.value)}/>
                </div>
            );
        }
    }

    return {reset, display}
}