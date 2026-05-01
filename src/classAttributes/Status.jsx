import '../App.css'
import {useState, useMemo} from 'react';


export default statusAttributes;

function statusAttributes(setJSON) {
    const [stackType, setStackType] = useState('none');
    const [isSeparate, setSeparate] = useState(false);
    const [currentClass, setClass] = useState('');

    function update(newClass) {
        setClass(newClass);
        if (newClass == 'status') {init();}
        else {reset();}
    }

    function reset() {
        setJSON('stackType', undefined);
        setJSON('stackSeparate', undefined);
    }
    function init() {
        handleSetType(stackType);
    }

    const handleSetType = (newValue) =>{
        setStackType(newValue);
        setJSON('stackType', newValue)

        if (newValue !== 'both') {handleSetSeparate(false)}
        else {handleSetSeparate(isSeparate)}
    }

    function SeparateButton() {
        if (stackType == 'both') {
            return (
                <>
                    <label htmlFor="stackSeparate">Stack Separately: </label>
                    <input type="checkbox" id="stackSeparate" name="stackSeparate" checked={isSeparate} onChange={e => handleSetSeparate(e.target.checked)}/>
                </>
                )
        }
        return (
            <>
                    <label htmlFor="stackSeparate">Stack Separately: </label>
                    <input disabled type="checkbox" id="stackSeparate" name="stackSeparate" checked={isSeparate} onChange={e => handleSetSeparate(e.target.checked)}/>
                </>
        )
    }

    const handleSetSeparate = (newValue) =>{
        setSeparate(newValue);
        setJSON('stackSeparate', newValue)
    }

    function display() {
        if (currentClass !== 'status') {
            return <></>
        }
        else {
            return (
                <>
                    <div className="node">
                        <a className="nodeName">Duration: </a>
                        <select  className='valueInput' value={stackType} onChange={e => handleSetType(e.target.value)}>
                            <option value="none">None</option>
                            <option value="duration">Duration</option>
                            <option value="intensity">Intensity</option>
                            <option value="both">Both</option>
                        </select>
                    </div>
                    <div className='node-box'>
                        <div className="node">
                            <a>{isSeparate}</a>
                            <SeparateButton/>
                        </div>
                    </div>
                </>
            );
        }
    }

    const displayMemo = useMemo(() => display(), [currentClass, stackType, isSeparate]);

    return {update, display: displayMemo}
}