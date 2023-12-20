import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";
import { PublicationForm } from "./PublicationForm";
import { PublicationItem } from "./PublicationItem";
import React, { useState, useEffect } from "react";
import { ApiService } from "../../services/ApiService"
import {CircleImg} from "../Auxiliary/CircleImg";
import { useParams } from 'react-router-dom';

export function Wiki() {
    const [publicationsTexts, setPublicationsTexts] = useState();
    const [nameData, setNameData] = useState();
    const { page } = useParams();

    useEffect(() => {
        (async () => {
            const data = await ApiService(`cards_with_comments/${page}`)
            setPublicationsTexts(data['comment_set']);
            setNameData(data);
        })();
    }, []);

    const [img_url, setImgUrl] = useState({})

    useEffect(() => {
        (async () => {
            const new_data = await ApiService(`cards/${page}`)
            setImgUrl(new_data.image)
        })();
    }, []);

    return (
        <div className={'wiki-main'}>
            <div className={'wiki-edit-wrap'}>
                <LinkBlock elements={'Редактировать'} to={`/wiki_page/edit/${page}`} className={'wiki-edit'} />
            </div>
            <div className='wiki-name'>
                {nameData?.name} {nameData?.surname}
            </div>
            <div className='wiki-foto'>
                <CircleImg imgUrl={img_url}/>
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

