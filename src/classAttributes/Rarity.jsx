import '../App.css'
import {useState, useMemo} from 'react';


export default useRarityHandler;

function useRarityHandler(setJSON) {
    const [rarity, setRarity] = useState('common')
    const [currentClass, setClass] = useState('');

    function update(newClass) {
        setClass(newClass)
        if (newClass !== 'status' && newClass != '') {init()}
        else {reset()};
    }

    function reset() {
        setJSON('rarity', undefined);
    }
    function init() {
        handleSetRarity(rarity);
    }

    const handleSetRarity = (newValue) =>{
        setRarity(newValue)
        setJSON('rarity', newValue)
    }

    function display() {
        if (currentClass == '' || currentClass == 'status') {
            return <></>
        }
        else {
            return (
                <div className="node">
                    <a className="nodeName">Rarity: </a>
                    <select className='valueInput' value={rarity} onChange={
                    e => {handleSetRarity( e.target.value )}}>
                        <option value="basic">Basic</option>
                        <option value="common">Commmon</option>
                        <option value="rare">Rare</option>
                        <option value="legendary">Legendary</option>
                        <option value="special">Special</option>
                    </select>
                </div>
            );
        }
    }

    const displayMemo = useMemo(() => display(), [currentClass, rarity]);

    return {update, display: displayMemo}
}