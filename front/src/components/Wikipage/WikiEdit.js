import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";
import { PublicationForm } from "./PublicationForm";
import { PublicationItem } from "./PublicationItem";
import { EditableItem } from "./EditableItem";
import { useState, useEffect } from "react";
import { JSON_SERVER_PATH } from "../../Config"
import {ApiService} from "../../services/ApiService";

export function  WikiEdit() {
    const [publications, setPublications] = useState();
    const [nameData, setNameData] = useState();

    useEffect(() => {
        (async () => {

            const data = await ApiService(`cards_with_comments/1/`)
            setPublications(data['comment_set']);
            setNameData(data);

            // const data = await fetch(JSON_SERVER_PATH + `/comments/`);
            // const posts = await data.json();
            // setPublications(posts);
            //
            // const dataUser = await fetch(JSON_SERVER_PATH + `/cards/1/`);
            // const name = await dataUser.json();
            // setNameData(name);
        })();
    }, []);

    const handleCreate = async (comment) => {
        const values = {
            comment
        };

        const response = 0;
        // const response = await ApiService("/comment", {
        //     method: "POST",
        //     body: JSON.stringify(values["comment"]),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        // const response = await fetch(JSON_SERVER_PATH + "/comments", {
        //     method: "POST",
        //     body: JSON.stringify(values["comment"]),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });

        const newPublication = await response.json();

        const updatedPublications = [...publications]
        updatedPublications.push(newPublication);
        setPublications(updatedPublications);
    };

    const handleEdit = async (post) => {
        const norm_post = Object.assign({}, {id : post.id}, post.comment);

        const response = 0;
        // const response = await fetch(JSON_SERVER_PATH + `/comments/${post.id}`, {
        //     method: "PUT",
        //     body: JSON.stringify(norm_post),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        const updatedPublication = await response.json();

        const publicationIdx = publications.findIndex(
            (publication) => publication.id === norm_post.id
        );

        const updatedPublications = [...publications]
        updatedPublications[publicationIdx] = updatedPublication;
        setPublications(updatedPublications);
    };

    const handleDelete = async (post) => {

        const response = 0;
        // const response = await fetch(JSON_SERVER_PATH + `/comments/${post.id}`, {
        //     method: "DELETE",
        //     body: JSON.stringify(post),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        const updatedPublication = await response.json();

        const publicationIdx = publications.findIndex(
            (publication) => publication.id === post.id
        );

        const updatedPublications = [...publications]

        updatedPublications.splice(publicationIdx, 1)
        setPublications(updatedPublications);
    };

    const handleEditName = async (post) => {
        console.log(nameData)
        const {comment_set, image, ...norm_post} = nameData
        norm_post.name = post.comment.comment

        const response = await ApiService("cards/1/", {
            method: "PUT",
            body: JSON.stringify(norm_post),
            headers: {
                "Content-Type": "application/json",
            },
        });
        // Не вернул comment_set и image обратно
        const updated = response;

        setNameData(updated);
    };

    return (
        <div className={'wiki-main'}>
            <div className={'wiki-edit-wrap'}>
                <LinkBlock elements={'Вернуться'} to={'/wiki_page'} className={'wiki-edit'} />
            </div>
            <div className="wiki-edit-name-wraper">
                <EditableItem onEdit={handleEditName} id={1} content={
                    <div className='wiki-name'>
                        {nameData?.name} {nameData?.surname}
                    </div>
                }/>
            </div>
            <div  className='wiki-create-form'>
                <PublicationForm
                    onSuccess={handleCreate}
                    formTitle="Добавить запись"
                />
            </div>
            <div className="wikiedit-list">
                {publications?.map((item) => (
                    <PublicationItem
                        key={item.id}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        comment={<div className={"wiki-pubtext"}>{item.comment}</div>}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    );
}

