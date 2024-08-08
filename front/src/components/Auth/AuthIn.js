import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";
import { AuthForm } from "./AuthForm";
import {ApiService, IsAuthorized, Logout} from "../../services/ApiService";
import {Link} from "react-router-dom";
import React from "react";


export const handleLogin = async ({login, password}) => {
    const responce = await ApiService("token/", {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: login, password }),
    });

    if (responce && !responce.detail) {
        const { access, refresh } = responce
        window.localStorage.setItem('access', access)
        window.localStorage.setItem('refresh', refresh)
        window.location.href = "/"
    } else {
        return "Не верный логин или пароль"
    }
};
export function AuthIn() {
    return (
        <div className="auth">
            { IsAuthorized()
            ?
                <div className="auth-logout-gap">
                    <TextBlock text={"Выйдите прежде чем сменить учётную запись"}/>
                    <Link className='profile-logout' to='/auth_in' onClick={(e) => Logout()}>
                        Logout
                    </Link>
                </div>
            :
                <div className="auth-up-1">
                    <TextBlock text={"Sing In"} className="auth-SItxt"/>
                    <AdaptiveLinkBlock elements="with google" className="auth-GGLbtn"/>
                    <TextBlock text='or use your username to sign in:' className='auth-UseEmtxt'/>
                    <AuthForm onSuccess={handleLogin} formTitle={"Sing Up"}/>
                </div>
            }
        </div>
    );
}

