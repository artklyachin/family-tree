import {LinkBlock} from "../Auxiliary/LinkBlock";
import {EditableItem} from "./EditableItem";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {TextBlock} from "../Auxiliary/TextBlock";
import {PublicationForm} from "./PublicationForm";
import {ApiService, IsAuthorized} from "../../services/ApiService";
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

    const [user, setUser] = useState({ first_name : "user" });
    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                const user = await ApiService(`current_user/`);
                setUser(user);
            }
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

    const checkExists = (async ({comment, listname}) => {
        let id = parseInt(comment)
        if (comment === "") return "пустое"
        if (isNaN(comment)) return "ожидается число - id"
        const responce = await ApiService(`users/${id}`);
        if (responce.detail) return "id не существует"
        return ""
    });

    const checkPermission = (() =>{
        if (!user.id || !cardData) {
            return false
        }
        return (cardData.editors.includes(user.id) || user.id === cardData.owner)
    });

    return (
        <>
        {checkPermission() ?
            <div className={'wiki-main'}>
                <div className={'wiki-edit-wrap'}>
                    <LinkBlock elements={'Вернуться'} to={`/wiki_page/${page}`} className={'wiki-edit'}/>
                </div>
                <TextBlock text={"Owner"} className="access-label"/>

                {cardData.owner ?
                    <div className={"access-owner"}>
                        <UserAccessItem
                            id={cardData.owner}
                            IsOwner={true}
                        />
                    </div>
                    : null}

                <TextBlock text={"Editors"} className="access-label"/>
                <div className='wiki-create-form'>
                    <PublicationForm
                        onSuccess={handleCreate}
                        formTitle="Add editor (по id)"
                        listname="editors"
                        checkError={checkExists}
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
                <div className='wiki-create-form'>
                    <PublicationForm
                        onSuccess={handleCreate}
                        formTitle="Add viewer (по id)"
                        listname="viewers"
                        checkError={checkExists}
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
        :
            <div className='wiki-family'>
                {"У вас нет доступа"}
            </div>
        }
        </>
    );
}