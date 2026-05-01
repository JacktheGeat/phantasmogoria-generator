import '../App.css'
import {useState, useMemo} from 'react';


export default sizeHandler;

function sizeHandler(setJSON) {
    const [size, setSize] = useState(0)
    const [currentClass, setClass] = useState('');

    function update(newClass) {
        setClass(newClass)
        if (newClass == 'base' || newClass == 'augment' || newClass == 'sigil') {init()}
        else {reset()};
    }

    function reset() {
        setJSON('size', undefined);
    }
    function init() {
        handleSetSize(size);
    }

    const handleSetSize = (newValue) =>{
        setSize(parseInt(Number(newValue)))
        setJSON('size', parseInt(Number(newValue)))
    }

    function display() {
        if (currentClass !== 'base' && currentClass !== 'augment' && currentClass !== 'sigil') {
            return <></>
        }
        else {
            return (
                <div className="node">
                <a className="nodeName">Size: </a>
                <input className='valueInput' type="number" step='1' id="size" value={size} onChange={e => handleSetSize(e.target.value)}/>
                </div>
            );
        }
    }

    const displayMemo = useMemo(() => display(), [currentClass, size]);

    return {update, display: displayMemo}
}