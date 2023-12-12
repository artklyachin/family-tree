import {TextBlock} from "../Auxiliary/TextBlock";
import {CircleImg} from "../Auxiliary/CircleImg";
import {CardItem} from "./CardItem";
import {useEffect, useState} from "react";
import { ApiService } from "../../services/ApiService"

import {PublicationItem} from "../Wikipage/PublicationItem";
// function renderList() {
//     const rootEl = document.querySelector(".main");
//
//     (async () => {
//         const data = await fetch("http://localhost:3000/your_posts");
//         const posts = await data.json();
//     })();
// }

export function Desktop() {
    // renderList();
    const [ownedCards, setOwnedCards] = useState();
    const [editedCards, setEditedCards] = useState();
    const [favorCards, setFavorCards] = useState();

    useEffect(() => {
        (async () => {

            // const user_info_json = await fetch(JSON_SERVER_PATH + `/users/1/`);
            // const user_info = await user_info_json.json();

            // const owned_cards = [];
            // user_info.owned_card_ids?.map(async (index) => {
            //     const data = await fetch(JSON_SERVER_PATH + `/cards/${index}`)
            //     owned_cards.push(await data.json())
            //     setOwnedCards(owned_cards);
            // });
            // setOwnedCards(owned_cards);
            const owned_cards = await ApiService(`cards_owner/?user=1`)
            setOwnedCards(owned_cards)
            console.log(owned_cards)

            // const edited_cards = [];
            // user_info.edited_card_ids?.map(async (index) => {
            //     const data = await fetch(JSON_SERVER_PATH + `/cards/${index}`)
            //     edited_cards.push(await data.json());
            //     setEditedCards(edited_cards);
            // });
            const edited_cards = await ApiService(`cards_edit/?user=1`)
            setEditedCards(edited_cards);

            // const favor_cards = [];
            // user_info.favor_card_ids?.map(async (index) => {
            //     const data = await fetch(JSON_SERVER_PATH + `/cards/${index}`)
            //     favor_cards.push(await data.json());
            //     setFavorCards(favor_cards);
            // });
            const sub_cards = await ApiService(`cards_sub/?user=1`)
            setFavorCards(sub_cards);

        })();
    }, []);

    return (
        <div className='desktop-aside'>
            <TextBlock text="Projects" className="section-page-name"/>
            <TextBlock text="your own page" className="section-section-name"/>
            <div className="post-grid">
                {ownedCards?.map((item) => (
                    <CardItem key={item.id} info={item} to="/wiki_page"/>
                ))}
            </div>
            <TextBlock text="pages with edit access" className="section-section-name"/>
            <div className="post-grid">
                {editedCards?.map((item) => (
                    <CardItem key={item.id} info={item} to="/wiki_page"/>
                ))}
            </div>
            <TextBlock text="favorite ⭐" className="section-section-name"/>
            <div className="post-grid">
                {favorCards?.map((item) => (
                    <CardItem key={item.id} info={item} to="/wiki_page"/>
                ))}
            </div>
        </div>
    );
}
