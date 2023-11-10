import {TextBlock} from "../Auxiliary/TextBlock";
import {Link} from "react-router-dom";

export function CardItem( props  ) {
    const { info } = props;

    return (
        <div>
            <Link to={info.link} className="post">
                <TextBlock text={info.name} className="post-name"/>
                <TextBlock text={info.surname} className="post-name"/>
                <TextBlock text={info.family} className="post-family"/>
            </Link>
        </div>
    );
}
