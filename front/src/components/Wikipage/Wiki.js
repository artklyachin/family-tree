import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";
import { PublicationForm } from "./PublicationForm";
import { PublicationItem } from "./PublicationItem";
import React, { useState, useEffect } from "react";
import {ApiService, IsAuthorized} from "../../services/ApiService"
import {CircleImg} from "../Auxiliary/CircleImg";
import { useParams } from 'react-router-dom';

export function Wiki() {
    const [publicationsTexts, setPublicationsTexts] = useState();
    const [cardData, setCardData] = useState();
    const { page } = useParams();

    useEffect(() => {
        (async () => {
            const data = await ApiService(`cards_with_comments/${page}`)
            setPublicationsTexts(data['comment_set']);
            setCardData(data);
        })();
    }, []);

    const [user, setUser] = useState({ first_name : "user" });
    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                const user = await ApiService(`current_user/`);
                setUser(user);
            }
        })();
    }, []);

    const [img_url, setImgUrl] = useState({})

    useEffect(() => {
        (async () => {
            const new_data = await ApiService(`cards/${page}`)
            setImgUrl(new_data.image)
        })();
    }, []);

    const checkPermission = (() =>{
        if (!user.id || !cardData) {
            return false
        }
        return (cardData.viewers.includes(user.id) || cardData.editors.includes(user.id) || user.id === cardData.owner)
    });

    const checkEditPermission = (() =>{
        if (!user.id || !cardData) {
            return false
        }
        return (cardData.editors.includes(user.id) || user.id === cardData.owner)
    });

    return (
        <>
        { checkPermission() ?
        <div className={'wiki-main'}>
            { checkEditPermission() ?
                <div className={'wiki-edit-wrap'}>
                    <LinkBlock elements={'Редактировать'} to={`/wiki_page/edit/${page}`} className={'wiki-edit'} />
                </div>
            :
                <div className={'wiki-edit-wrap-none'}>
                    <div></div>
                </div>
            }
            <div className='wiki-name'>
                {cardData?.name} {cardData?.surname}
            </div>
            <div className='wiki-family'>
                {cardData?.family}
            </div>
            <div className='wiki-foto'>
                <CircleImg imgUrl={img_url}/>
            </div>
            <div className="wiki-list">
                {publicationsTexts?.map((item) => (
                    <div className={"wiki-pubtext"} key={item.id}>
                        {item.comment}
                    </div>
                ))}
            </div>
        </div>
        :
        <div className='wiki-family'>
            {"У вас нет доступа"}
        </div>}
        </>
    );
}

