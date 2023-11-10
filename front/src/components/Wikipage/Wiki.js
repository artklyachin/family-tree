import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";
import { PublicationForm } from "./PublicationForm";
import { PublicationItem } from "./PublicationItem";
import { useState, useEffect } from "react";

export function Wiki() {
    const [publications, setPublications] = useState();

    useEffect(() => {
        (async () => {

            const data = await fetch(`http://localhost:3000/comments/`);
            const posts = await data.json();

            setPublications(posts);
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

    return (
        <>
            <PublicationForm
                onSuccess={handleCreate}
                formTitle="Добавить комментарий"
            />

            <div className="list">
                {publications?.map((item) => (
                    <PublicationItem
                        key={item.id}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        comment={item.comment}
                        id={item.id}
                    />
                ))}
            </div>
        </>
    );
}

