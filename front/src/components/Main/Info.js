import { InfoText } from "./info-texts";

export function Info() {

    return (
        <div className='main-aside'>
            <div className="part-under-header"/>
            <div className="info-part-1">
                <p className="info-part-1-txt1"> { InfoText().props.children } </p>
            </div>
        </div>
    );
}

