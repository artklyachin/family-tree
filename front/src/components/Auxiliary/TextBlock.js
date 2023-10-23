
export function TextBlock( {text, className} ) {
    if (className == "null") {
        return (
            <div dangerouslySetInnerHTML={{__html: text}}/>
        )
    } else {
        return (
            <div dangerouslySetInnerHTML={{__html: text}} className={className}/>
        );
    }
}