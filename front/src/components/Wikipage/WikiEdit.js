import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";
import { PublicationForm } from "./PublicationForm";
import { PublicationItem } from "./PublicationItem";
import { EditableItem } from "./EditableItem";
import { useState, useEffect } from "react";

export function WikiEdit() {
    const [publications, setPublications] = useState();
    const [nameData, setNameData] = useState();

    useEffect(() => {
        (async () => {

            const data = await fetch(`http://localhost:3000/comments/`);
            const posts = await data.json();
            setPublications(posts);

            const dataUser = await fetch(`http://localhost:3000/cards/1/`);
            const name = await dataUser.json();
            setNameData(name);
        })();
    }, []);

    const handleCreate = async (comment) => {
        const values = {
            comment
        };

        const response = await fetch("http://localhost:3000/comments", {
            method: "POST",
            body: JSON.stringify(values["comment"]),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const newPublication = await response.json();

        const updatedPublications = [...publications]
        updatedPublications.push(newPublication);
        setPublications(updatedPublications);
    };

    const handleEdit = async (post) => {
        const norm_post = Object.assign({}, {id : post.id}, post.comment);

        const response = await fetch(`http://localhost:3000/comments/${post.id}`, {
            method: "PUT",
            body: JSON.stringify(norm_post),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const updatedPublication = await response.json();

        const publicationIdx = publications.findIndex(
            (publication) => publication.id === norm_post.id
        );

        const updatedPublications = [...publications]
        updatedPublications[publicationIdx] = updatedPublication;
        setPublications(updatedPublications);
    };

    const handleDelete = async (post) => {
        const response = await fetch(`http://localhost:3000/comments/${post.id}`, {
            method: "DELETE",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json",
            },
        });
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
        const norm_post = nameData
        norm_post.name = post.comment.comment
        console.log(norm_post)

        const response = await fetch(`http://localhost:3000/cards/${post.id}`, {
            method: "PUT",
            body: JSON.stringify(norm_post),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const updated = await response.json();

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

