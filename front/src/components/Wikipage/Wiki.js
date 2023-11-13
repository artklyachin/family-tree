import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";
import { PublicationForm } from "./PublicationForm";
import { PublicationItem } from "./PublicationItem";
import { useState, useEffect } from "react";

export function Wiki() {
    const [publicationsTexts, setPublicationsTexts] = useState();
    const [nameData, setNameData] = useState();

    useEffect(() => {
        (async () => {

            const dataComments = await fetch(`http://localhost:3000/comments/`);
            const comments = await dataComments.json();
            setPublicationsTexts(comments);

            const dataUser = await fetch(`http://localhost:3000/cards/1/`);
            const name = await dataUser.json();
            setNameData(name);
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

