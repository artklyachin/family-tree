import {TextBlock} from "../Auxiliary/TextBlock";
import {CircleImg} from "../Auxiliary/CircleImg"
import React, {useEffect, useState} from "react";
import {ApiService, IsAuthorized, Logout} from "../../services/ApiService";
import {Link, useParams} from "react-router-dom";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

export function Profile(props = {IsGuest : false}) {
    let IsGuest = props.IsGuest
    const { page } = useParams();

    const [user, setUser] = useState({
        id: 0,
        username: "test",
        avatar: "",
    });
    const [img_url, setImgUrl] = useState({})

    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                if (IsGuest) {
                    const user_data = await ApiService(`users/${page}/`);
                    setUser(user_data);
                    setImgUrl(user_data.avatar)
                } else {
                    const user_data = await ApiService(`current_user/`);
                    setUser(user_data);
                    setImgUrl(user_data.avatar)
                }
            }
        })();
    }, []);

    return (
        <div className='profile-aside'>
            <div className='profile-field'>
                <div className='profile-header'>
                    <TextBlock text="Profile details" className="profile-header-component prfl-stl"/>
                </div>
                <div className='profile-details'>
                    <TextBlock text="First and Last Name" className="prfl-stl"/>
                    <TextBlock text={`${user.first_name} ${user.last_name}`} className="profile-details-field prfl-stl"/>
                    <TextBlock text={`username: ${user.username}, id: ${user.id}`} className="prfl-stl"/>
                </div>
                <div className="profile-foto">
                    <TextBlock text="Your photo" className="prfl-stl"/>
                    <div className={"profile-foto-foto"}>
                        <CircleImg imgUrl={img_url}/>
                    </div>
                </div>
            </div>
            { IsGuest ? null :
                <div className="marguntop-logout">
                    <Link className='profile-edit' to='/profile/edit'>
                        Edit
                    </Link>
                    <Link className='profile-logout' to='/auth_in' onClick={(e) => Logout()}>
                        Logout
                    </Link>
                </div>
            }
        </div>
    );
}

export function ProfileUser() {
    return Profile({IsGuest : true})
}