import '../App.css'
import {useState} from 'react';


export default useType;

function useType(setJSON) {
    const [useType, setUseType] = useState('standard');
    const [limit, setLimit] = useState(0);
    const [currentClass, setClass] = useState('');

    function update(newClass) {
        setClass(newClass)
        if (newClass == 'base' || newClass == 'sigil') {init()}
        else {reset()};
    }

    function reset() {
        setJSON('use_type', undefined);
        setJSON('use_limit', undefined);
    }
    function init() {
        handleSetUseType(useType);
    }

    const handleSetUseType = (newValue) =>{
        setUseType(newValue)
        setJSON('use_type', newValue)

        if (newValue == 'standard') {handleLimit(0)}
        else {handleLimit(limit)}
    }

    const handleLimit = (newValue) =>{
        setLimit(newValue)
        setJSON('use_limit', newValue)
    }


    const inputLimit = () => {
        if (useType == 'standard') {
            return <input disabled type="number" inputMode="numeric" step='0' id="base_power" value={0} onChange={e => handleLimit(e.target.value)}/>;
        }
        return <input type="number" inputMode="numeric" step='1' id="base_power" value={limit} onChange={e => handleLimit(e.target.value)}/>;
    }

 function display() {
        if (currentClass !== 'base' && currentClass !== 'sigil') {
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