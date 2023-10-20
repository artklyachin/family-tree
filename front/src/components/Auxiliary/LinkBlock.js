import {Link} from "react-router-dom";

export function LinkBlock({ elements, to, className }) {
    return (
        <div>
            <Link to={ to } className={ className }>
                { elements }
            </Link>
        </div>
    );
}

export function AdaptiveLinkBlock({ elements, to, className }) {
    return (
        <Link to={ to } className={ className }>
            { elements }
        </Link>
    );
}