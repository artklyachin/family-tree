import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";
import { PublicationForm } from "./PublicationForm";
import { PublicationItem } from "./PublicationItem";
import { useState, useEffect } from "react";
import { ApiService } from "../../services/ApiService"

export function Wiki() {
    const [publicationsTexts, setPublicationsTexts] = useState();
    const [nameData, setNameData] = useState();

    useEffect(() => {
        (async () => {
            const data = await ApiService(`cards_with_comments/1/`)
            setPublicationsTexts(data['comment_set']);
            setNameData(data);

            // const dataComments = await fetch(JSON_SERVER_PATH + `/comments/`);
            // const comments = await dataComments.json();
            // setPublicationsTexts(comments);
            //
            // const dataUser = await fetch(JSON_SERVER_PATH + `/cards/1/`);
            // const name = await dataUser.json();
            // setNameData(name);
        })();
    }, []);

    return (
        <div className={'wiki-main'}>
            <div className={'wiki-edit-wrap'}>
                <LinkBlock elements={'Редактировать'} to={'/wiki_page/edit'} className={'wiki-edit'} />
            </div>
            <div className='wiki-name'>
                {nameData?.name} {nameData?.surname}
            </div>
            <div className="wiki-list">
                {publicationsTexts?.map((item) => (
                    <div className={"wiki-pubtext"}>
                        {item.comment}
                    </div>
                ))}
            </div>
        </div>
    );
}

