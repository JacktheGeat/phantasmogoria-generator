export function formatText(word) {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
    const toReturn = capitalizedWord.replace('_', " ")
    return toReturn
}

export function alert() {
    return <>
        <div className="error">
            <error>!</error>
        </div>
    </>
}