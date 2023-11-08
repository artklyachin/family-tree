import {TextBlock} from "../Auxiliary/TextBlock";
import {Link} from "react-router-dom";

export function Post( {name, surname, family, to} ) {
    return (
        <div>
            <Link to={to} className="post">
                <TextBlock text={name} className="post-name"/>
                <TextBlock text={surname} className="post-name"/>
                <TextBlock text={family} className="post-family"/>
            </Link>
        </div>
    );
}
