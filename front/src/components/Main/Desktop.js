import {TextBlock} from "../Auxiliary/TextBlock";
import {CircleImg} from "../Auxiliary/CircleImg";
import {CardItem} from "./CardItem";
import {useEffect, useState} from "react";
import {ApiService, IsAuthorized} from "../../services/ApiService"

export function Desktop() {

    const [user, setUser] = useState({ first_name : "user" });
    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                const user = await ApiService(`current_user/`);
                setUser(user);
            }
        })();
    }, []);

    // renderList();
    const [ownedCards, setOwnedCards] = useState();
    const [editedCards, setEditedCards] = useState();
    const [favorCards, setFavorCards] = useState();

    useEffect(() => {
        (async () => {
            if (user.id !== undefined) {
                const owned_cards = await ApiService(`cards_owner/?user=${user.id}`)
                setOwnedCards(owned_cards)

                const edited_cards = await ApiService(`cards_edit/?user=${user.id}`)
                setEditedCards(edited_cards);

                const sub_cards = await ApiService(`cards_sub/?user=${user.id}`)
                setFavorCards(sub_cards);
            }
        })();
    }, [user]);

    return (
        <div className='desktop-aside'>
            <TextBlock text="Projects" className="section-page-name"/>
            <TextBlock text="your own page" className="section-section-name"/>
            <div className="post-grid">
                {ownedCards?.map((item) => (
                    <CardItem key={item.id} info={item} to={`/wiki_page/${item.id}/`}/>
                ))}
            </div>
            <TextBlock text="pages with edit access" className="section-section-name"/>
            <div className="post-grid">
                {editedCards?.map((item) => (
                    <CardItem key={item.id} info={item} to={`/wiki_page/${item.id}/`}/>
                ))}
            </div>
            <TextBlock text="favorite ⭐" className="section-section-name"/>
            <div className="post-grid">
                {favorCards?.map((item) => (
                    <CardItem key={item.id} info={item} to={`/wiki_page/${item.id}/`}/>
                ))}
            </div>
        </div>
    );
}
