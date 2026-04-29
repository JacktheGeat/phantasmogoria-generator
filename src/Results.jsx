import {useRef, useEffect} from 'react';
import './App.css'

export default Results;

function Results({displayJSON}) {
    const textAreaRef = useRef(null);

    useEffect(() => {
        if (textAreaRef.current) {
            if (textAreaRef.current) {
                const el = textAreaRef.current;
                const scrollY = window.scrollY;
                el.style.height = 'auto';
                el.style.height = `${el.scrollHeight}px`;
                window.scrollTo({ top: scrollY });
            }
        }
    }, [displayJSON]);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
    };
    
    return (
        <>

            <div className='resultsBox'>
                <button onClick={copyToClipboard}>Copy</button> 
                <textarea 
                className='resultsText' 
                autoCorrect="{off}" autoCapitalize="{none}" spellCheck="{false}" readOnly="{true}" 
                ref={textAreaRef}
                style={{overflow: 'shown', resize: 'none'}}
                value={displayJSON}>
                </textarea>
            </div>
        </>
    )
}