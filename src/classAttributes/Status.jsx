import '../App.css'
import {useState} from 'react';


export default statusAttributes;

function statusAttributes(displayJSON, setJSON) {
    const [stackType, setStackType] = useState('none');
    const [stackSeparate, setStackSeparate] = useState(false);

    function update(newClass) {
        if (newClass == 'status') {init()}
        else {reset()};
    }

    function reset() {
        handleSetType('');
        handleStackSeparate('null');
    }
    function init() {
        handleSetType(stackType);
        handleStackSeparate(stackSeparate);
    }

    const handleSetType = (newValue) =>{
        if ( newValue == '') {
            setJSON(items => items.filter((item) => item.id !== 'stackType'));
        }
        else if (displayJSON.some(item => item.id === 'stackType')) {
            setStackType(newValue)
            setJSON(items => items.map(item => 
                item.id === 'stackType' ? { ...item, value: newValue } : item ))
        }
        else {
            setStackType(newValue)
            setJSON(items => [...items, {id: "stackType", value: newValue }])
        }
    }

    function Separate() {
        if (stackType == 'both') {
            return (
                <>
                    <label htmlFor="stackSeparate">Stack Separately: </label>
                    <input type="checkbox" id="stackSeparate" name="stackSeparate" checked={stackSeparate} onChange={e => handleStackSeparate(e.target.checked)}/>;
                </>
                )
        }
        return (
            <>
                    <label htmlFor="stackSeparate">Stack Separately: </label>
                    <input disabled type="checkbox" id="stackSeparate" name="stackSeparate" checked={stackSeparate} onChange={e => handleStackSeparate(e.target.checked)}/>;
                </>
        )
    }

    const handleStackSeparate = (newValue) =>{
        console.log("new value=" + newValue + " type: " + (typeof newValue))
        if ( newValue == 'null') {
            setJSON(items => items.filter((item) => item.id !== 'stackSeparate'));
        }
        else if (displayJSON.some(item => item.id === 'stackSeparate')) {
            console.log("found")
            setStackSeparate(newValue)
            setJSON(items => items.map(item => 
                item.id === 'stackSeparate' ? { ...item, value: newValue } : item ))
        }
        else {
            console.log("not found")
            setStackSeparate(newValue)
            setJSON(items => [...items, {id: "stackSeparate", value: newValue }])
        }
    }

    function display() {
        const spellClass = displayJSON.filter( item => (item.id == 'class')).map(item => item.value);
        if (spellClass.toString() !== 'status') {
            return <></>
        }
        else {
            return (
                <>
                    <div className="node">
                        <a className="nodeName">Duration: </a>
                        <select  name="class" id="class" value={stackType} onChange={e => handleSetType(e.target.value)}>
                            <option value="none">None</option>
                            <option value="duration">Duration</option>
                            <option value="intensity">Intensity</option>
                            <option value="both">Both</option>
                        </select>
                    </div>
                    <div className='container' style={{paddingLeft: '20px'}}>
                        <div className="node">
                            <a>{stackSeparate}</a>
                            <Separate/>
                        </div>
                    </div>
                </>
            );
        }
    }

    return {update, display}
}