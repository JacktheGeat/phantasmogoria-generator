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
    }, [1]);
    
    return (
        <div className='resultsBox'>
            <textarea 
            className='resultsText' 
            autoCorrect="{off}" autoCapitalize="{none}" spellCheck="{false}" readOnly="{true}" 
            ref={textareaRef}
            style={{overflow: 'hidden', resize: 'none'}}
            value={getDisplayJSON()}>
            </textarea>
      </div>
    )
}