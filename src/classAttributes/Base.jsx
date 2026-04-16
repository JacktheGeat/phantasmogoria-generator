import '../App.css'
import {useState, useMemo} from 'react';


export default baseAttributes;

function baseAttributes(setJSON) {
    const [growthRate, setGR] = useState(0);
    const [currentClass, setClass] = useState('');

    function update(newClass) {
        setClass(newClass)
        if (newClass !== 'base') {reset()}
        else {init()};
    }

    function reset() {
        setJSON('growth_rate', undefined);
    }
    function init() {
        handleSetGR(growthRate)
    }

    const handleSetGR = (newValue) =>{
        setGR(Number(newValue))
        setJSON('growth_rate', Number(newValue))
    }

    function display() {
        if (currentClass !== 'base') {
            return <></>
        }
        else {
            return (
                <div className="node">
                <a className="nodeName">Growth Rate: </a>
                <input type="number" step='0.1' id="growth_rate" value={growthRate} onChange={e => handleSetGR(e.target.value)}/>
                </div>
            );
        }
    }
    const displayMemo = useMemo(() => display(), [currentClass, growthRate]);


    return {update, display: displayMemo}
}