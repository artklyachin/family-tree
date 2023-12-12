import {TextBlock} from "../Auxiliary/TextBlock";
import {Link} from "react-router-dom";
import {CircleImg} from "../Auxiliary/CircleImg";

export function CardItem( { info, to = "" }  ) {

    return (
        <div>
            {/*<Link to={info.link} className="post">*/}
            <Link to = {to} className="post">
                <div className="post_left">
                    <TextBlock text={info.name} className="post-name"/>
                    <TextBlock text={info.surname} className="post-name"/>
                    <TextBlock text={info.family} className="post-family"/>
                </div>
                <CircleImg imgUrl={require("../../images/Malfoy.png")}/>
            </Link>
        </div>
    );
}
