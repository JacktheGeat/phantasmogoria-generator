import {useRef, useEffect} from 'react';
import './App.css'

export default Results;

function Results({getDisplayJSON}) {
    const textareaRef = useRef(null);

    useEffect(() => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
    });
    
    return (
        <div className='resultsBox'>
            <textarea 
            className='resultsText' 
            autoCorrect="{off}" autoCapitalize="{none}" spellCheck="{false}" readOnly="{true}" 
            ref={textareaRef}
            style={{overflow: 'shown', resize: 'none'}}
            value={getDisplayJSON()}>
            </textarea>
      </div>
    )
}