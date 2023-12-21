import {Link} from "react-router-dom";
import {useEffect} from "react";

export function LinkBlock({ elements, to, className}) {
    return (
        // <div>
        //     <Link to={ to } className={className}>
        //         { elements }
        //     </Link>
        // </div>
        <Link to={ to } className={'text-decoration-none'} >
            <div className={ className }>
                { elements }
            </div>
        </Link>
    );
}

export function AdaptiveLinkBlock({ elements, to, className }) {
    return (
        <Link to={ to } className={className} >
                { elements }
        </Link>
    );
}