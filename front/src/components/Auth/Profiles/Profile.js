import {TextBlock} from "../../Auxiliary/TextBlock";
import {CircleImg} from "../../Auxiliary/CircleImg"
import React, {useEffect, useState} from "react";
import {ApiService} from "../../../services/ApiService";

export function Profile() {

    const [data, setData] = useState({
        id: 0,
        username: "test",
        avatar: "",
    });
    const [img_url, setImgUrl] = useState({})

    useEffect(() => {
        (async () => {
            console.log("gg")
            const new_data = await ApiService(`users/2/`)
            setData(new_data);
            console.log(new_data)
            setImgUrl(new_data.avatar)

            // const dataComments = await fetch(JSON_SERVER_PATH + `/comments/`);
            // const comments = await dataComments.json();
            // setPublicationsTexts(comments);
            //
            // const dataUser = await fetch(JSON_SERVER_PATH + `/cards/1/`);
            // const name = await dataUser.json();
            // setNameData(name);
        })();
    }, []);

    const handleImageChange = async (e) => {
        console.log(data)

        let newData = { ...data };
        newData["avatar"] = e.target.files[0];
        setData(newData);
    };

    const doSubmit = async (e) => {
        e.preventDefault();

        let form_data = new FormData();
        if (data.avatar)
            form_data.append("avatar", data.avatar, data.avatar.name);
        form_data.append("username", data.username);

        console.log(data.avatar)
        const responce = await ApiService("users/2/", {
            method: "put",
            body: form_data,
        });

        setImgUrl(responce.avatar)
    };

    return (
        <div className='profile-aside'>
            <div className='profile-field'>
                <div className='profile-header'>
                    <TextBlock text="Profile details" className="profile-header-component prfl-stl"/>
                </div>
                <div className='profile-details'>
                    <TextBlock text="First and Last Name" className="prfl-stl"/>
                    <TextBlock text="" className="profile-details-field prfl-stl"/>
                </div>
                <div className="profile-foto">
                    <TextBlock text="Your photo" className="prfl-stl"/>
                    <div className={"profile-foto-foto"}>
                        <CircleImg imgUrl={img_url}/>
                    </div>
                    {/*<TextBlock text="" className="profile-foto-foto"/>*/}
                    <input type="file"
                           name="image_url"
                           accept="image/jpeg,image/png,image/gif"
                           onChange={(e) => {handleImageChange(e)}}/>
                    <button variant="primary"
                            type="submit"
                            onClick={(e) => doSubmit(e)}/>
                </div>
            </div>
        </div>
    );
}
