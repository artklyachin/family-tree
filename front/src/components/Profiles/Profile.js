import {TextBlock} from "../Auxiliary/TextBlock";
import {CircleImg} from "../Auxiliary/CircleImg"
import React, {useEffect, useState} from "react";
import {ApiService, IsAuthorized, Logout} from "../../services/ApiService";
import {Link} from "react-router-dom";

export function Profile() {

    const [user, setUser] = useState({
        id: 0,
        username: "test",
        avatar: "",
    });
    const [img_url, setImgUrl] = useState({})

    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                const user = await ApiService(`current_user/`);
                setUser(user);
                setImgUrl(user.avatar)
            }
        })();
    }, []);

    const handleImageChange = async (e) => {
        let newData = { ...user };
        newData["avatar"] = e.target.files[0];
        setUser(newData);

        e.preventDefault();
        let avatar = e.target.files[0];
        let form_data = new FormData();
        if (avatar)
            console.log(avatar, avatar.name)
        form_data.append("avatar", avatar, avatar.name);
        form_data.append("username", user.username);

        console.log(user.id)

        const responce = await ApiService(`users/${user.id}/`, {
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
                    <input type="file"
                           name="image_url"
                           accept="image/jpeg,image/png,image/gif"
                           onChange={(e) => {handleImageChange(e)}}/>
                </div>
            </div>
            <div className="marguntop-logout">
                <Link className='profile-logout' to='/auth_in' onClick={(e) => Logout()}>
                    Logout
                </Link>
            </div>
        </div>
    );
}
