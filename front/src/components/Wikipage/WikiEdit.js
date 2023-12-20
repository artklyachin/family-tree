import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";
import { PublicationForm } from "./PublicationForm";
import { PublicationItem } from "./PublicationItem";
import { EditableItem } from "./EditableItem";
import React, { useState, useEffect } from "react";
import {ApiService} from "../../services/ApiService";
import {CircleImg} from "../Auxiliary/CircleImg";
import { useParams } from 'react-router-dom';

export function  WikiEdit() {
    const [publications, setPublications] = useState();
    const [nameData, setNameData] = useState();
    const { page } = useParams();

    const [data, setData] = useState({
        id: 0,
        username: "test",
        avatar: "",
    });
    const [img_url, setImgUrl] = useState({})

    useEffect(() => {
        (async () => {

            const data = await ApiService(`cards_with_comments/${page}`)
            setPublications(data['comment_set']);
            setNameData(data);
        })();
    }, []);

    const handleCreate = async (comment) => {

        const new_post = {
            "comment" : comment.comment,
            "card" : page,
            "user" : 1,
        };

        const response = await ApiService("comments/", {
            method: "POST",
            body: JSON.stringify(new_post),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const updatedPublications = [...publications]
        updatedPublications.push(response);
        setPublications(updatedPublications);
    };

    const handleEdit = async (comment) => {

        const new_post = {
            "comment" : comment.comment.comment,
            "card" : page,
            "user" : 1,
        };

        const response = await ApiService(`comments/${comment.id}/`, {
            method: "PUT",
            body: JSON.stringify(new_post),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const publicationIdx = publications.findIndex(
            (publication) => publication.id === comment.id
        );

        const updatedPublications = [...publications]
        updatedPublications[publicationIdx] = response;
        setPublications(updatedPublications);
    };

    const handleDelete = async (comment) => {

        // const response = 0;
        // const updatedPublication = await response.json();
        //
        // const publicationIdx = publications.findIndex(
        //     (publication) => publication.id === post.id
        // );
        //
        // const updatedPublications = [...publications]
        //
        // updatedPublications.splice(publicationIdx, 1)
        // setPublications(updatedPublications);


        const new_post = {
            "card" : page,
            "user" : 1,
        };

        const response = await ApiService(`comments/${comment.id}/`, {
            method: "DELETE",
            body: JSON.stringify(new_post),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const publicationIdx = publications.findIndex(
            (publication) => publication.id === comment.id
        );

        const updatedPublications = [...publications]
        updatedPublications.splice(publicationIdx, 1)
        setPublications(updatedPublications);
    };

    const handleEditName = async (post) => {
        const {comment_set, image, ...norm_post} = nameData
        if (post.comment.comment.split(' ').length === 2) {
            [norm_post.name, norm_post.surname] = post.comment.comment.split(' ')
        } else {
            return {}
        }

        const response = await ApiService(`cards/${page}/`, {
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

    useEffect(() => {
        (async () => {
            const new_data = await ApiService(`cards/${page}`)
            setData(new_data);
            setImgUrl(new_data.image)

        })();
    }, []);

    const handleImageChange = async (e) => {
        let newData = { ...data };
        newData["image"] = e.target.files[0];
        setData(newData);
    };

    const doSubmitImage = async (e) => {
        e.preventDefault();

        let form_data = new FormData();
        if (data.image)
            form_data.append("image", data.image, data.image.name);
        form_data.append("id", data.id);
        form_data.append("name", data.name);
        form_data.append("surname", data.surname);
        form_data.append("owner", data.owner);

        const responce = await ApiService(`cards/${page}/`, {
            method: "put",
            body: form_data,
        });

        setImgUrl(responce.image)
    };

    return (
        <div className={'wiki-main'}>
            <div className={'wiki-edit-wrap'}>
                <LinkBlock elements={'Вернуться'} to={`/wiki_page/${page}/`} className={'wiki-edit'} />
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

            <div className='wiki-foto'>
                <CircleImg imgUrl={img_url}/>
            </div>
            {/*<TextBlock text="" className="profile-foto-foto"/>*/}
            <input type="file"
                   name="image_url"
                   accept="image/jpeg,image/png,image/gif"
                   onChange={(e) => {handleImageChange(e)}}/>
            <button variant="primary"
                    type="submit"
                    onClick={(e) => doSubmitImage(e)}>Сохранить</button>

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

