import {useRef, useEffect} from 'react';
import './App.css'

export default Results;

function Results({displayJSON}) {
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            if (textareaRef.current) {
                const el = textareaRef.current;
                const scrollY = window.scrollY;
                el.style.height = 'auto';
                el.style.height = `${el.scrollHeight}px`;
                window.scrollTo({ top: scrollY });
            }
        }
    }, [displayJSON]);
    
    return (
        <div className='resultsBox'>
            <textarea 
            className='resultsText' 
            autoCorrect="{off}" autoCapitalize="{none}" spellCheck="{false}" readOnly="{true}" 
            ref={textareaRef}
            style={{overflow: 'shown', resize: 'none'}}
            value={displayJSON}>
            </textarea>
        </div>
    )
}