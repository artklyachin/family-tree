import {LinkBlock} from "../Auxiliary/LinkBlock";
import {EditableItem} from "./EditableItem";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {TextBlock} from "../Auxiliary/TextBlock";
import {PublicationForm} from "./PublicationForm";
import {ApiService} from "../../services/ApiService";
import {UserAccessItem} from "./UserAccessItem";

export function Access() {
    const { page } = useParams();
    const [cardData, setCardData] = useState({editors : []});

    useEffect(() => {
        (async () => {
            const data = await ApiService(`cards/${page}/`)
            setCardData(data);
        })();
    }, []);

    const handleCreate = async (post) => {

        const listname = post.listname
        let new_id = parseInt(post.comment)
        let new_editors = cardData[listname]
        new_editors.push(new_id)

        let new_post = {
            name : cardData.name,
            surname : cardData.surname,
            owner : cardData.owner,
        };
        new_post[listname] = new_editors

        const responce = await ApiService(`cards/${page}/`, {
            method: "PUT",
            body: JSON.stringify(new_post),
            headers: {
                "Content-Type": "application/json",
            },
        });

        setCardData(responce)
    };

    const handleDelete = async (post) => {
        const listname = post.listname

        let deleted_id = parseInt(post.id)
        const new_editors = cardData[listname].filter(element => element !== deleted_id);

        let new_post = {
            name : cardData.name,
            surname : cardData.surname,
            owner : cardData.owner,
        };
        new_post[listname] = new_editors

        const responce = await ApiService(`cards/${page}/`, {
            method: "PUT",
            body: JSON.stringify(new_post),
            headers: {
                "Content-Type": "application/json",
            },
        });

        setCardData(responce)
    };

    return (
        <div className={'wiki-main'}>
            <div className={'wiki-edit-wrap'}>
                <LinkBlock elements={'Вернуться'} to={`/wiki_page/${page}`} className={'wiki-edit'} />
            </div>
            <TextBlock text={"Owner"} className="access-label"/>

            { cardData.owner ?
                <div className={"access-owner"}>
                    <UserAccessItem
                        id={cardData.owner}
                        IsOwner={true}
                    />
                </div>
            : null }

            <TextBlock text={"Editors"} className="access-label"/>
            <div  className='wiki-create-form'>
                <PublicationForm
                    onSuccess={handleCreate}
                    formTitle="Добавить editor (по id)"
                    listname="editors"
                />
            </div>
            <div className="">
                {cardData.editors?.map((id) => (
                    <UserAccessItem
                        key={id}
                        id={id}
                        onDelete={handleDelete}
                        listname="editors"
                    />
                ))}
            </div>

            <TextBlock text={"Viewers"} className="access-label"/>
            <div  className='wiki-create-form'>
                <PublicationForm
                    onSuccess={handleCreate}
                    formTitle="Добавить viewer (по id)"
                    listname="viewers"
                />
            </div>
            <div className="">
                {cardData.viewers?.map((id) => (
                    <UserAccessItem
                        key={id}
                        id={id}
                        onDelete={handleDelete}
                        listname="viewers"
                    />
                ))}
            </div>

        </div>
    );
}