import '../App.css'
import {useState} from 'react';


export default useType;

function useType(displayJSON, setJSON) {
    const [useType, setUseType] = useState('standard');
    const [limit, setLimit] = useState(0);

    function update(newClass) {
        if (newClass == 'base' || newClass == 'sigil') {init()}
        else {reset()};
    }

    function reset() {
        handleSetUseType('');
        handleLimit('null');
    }
    function init() {
        handleSetUseType(useType);
    }

    const handleSetUseType = (newValue) =>{
        if ( newValue == '') {
            setJSON(items => items.filter((item) => item.id !== 'use_type'));
        }
        else if (displayJSON.some(item => item.id === 'use_type')) {
            setUseType(newValue)
            setJSON(items => items.map(item => 
                item.id === 'use_type' ? { ...item, value: newValue } : item ))
        }
        else {
            setUseType(newValue)
            setJSON(items => [...items, {id: "use_type", value: newValue }])
        }

        if (newValue == 'standard') {handleLimit(0)}
        else {handleLimit(limit)}
    }

    function inputLimit() {
        if (useType == 'standard') {
            return <input disabled type="number" inputmode="numeric" step='0' id="base_power" value={0} onChange={e => handleLimit(e.target.value)}/>;
        }
        return <input type="number" inputmode="numeric" step='1' id="base_power" value={limit} onChange={e => handleLimit(e.target.value)}/>;
    }

    const handleLimit = (newValue) =>{
        console.log("modified")
        if ( newValue == 'null') {
            setJSON(items => items.filter((item) => item.id !== 'use_limit'));
        }
        else if (displayJSON.some(item => item.id === 'use_limit')) {
            setLimit(parseInt(Number(newValue)));
            setJSON(items => items.map(item => 
                item.id === 'use_limit' ? { ...item, value: parseInt(Number(newValue)) } : item))
        }
        else {
            setLimit(parseInt(Number(newValue)));
            setJSON(items => [...new Set([...items, {id: "use_limit", value: parseInt(Number(newValue))} ])])
        }
    }

    function display() {
        const spellClass = displayJSON.filter( item => (item.id == 'class')).map(item => item.value);
        if (spellClass.toString() !== 'base' && spellClass.toString() !== 'sigil') {
            return <></>
        }
        else {
            return (
                <>
                    <div className="node">
                        <a className="nodeName">Use Type: </a>
                        <select  name="class" id="class" value={useType} onChange={e => handleSetUseType(e.target.value)}>
                            <option value="standard">Standard</option>
                            <option value="exhaust">Exhaust</option>
                            <option value="expunge">Expunge</option>
                        </select>
                    </div>
                    <div className='container' style={{paddingLeft: '20px'}}>
                        <div className="node">
                            <a className="nodeName">Limit: </a>
                            {inputLimit()}
                        </div>
                    </div>
                </>
            );
        }
    }

    return {update, display}
}