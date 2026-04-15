import '../App.css'
import {useState} from 'react';


export default rarityHandler;

function rarityHandler(setJSON) {
    const [rarity, setRarity] = useState('')
    const [currentClass, setClass] = useState('');

    function update(newClass) {
        setClass(newClass)
        if (newClass !== 'status') {init()}
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
                    <select name='rarity' id="rarity" value={rarity} onChange={
                    e => {handleSetRarity( e.target.value )}}>
                        <option value=''></option>
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

    return {update, display}
}