import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {AdaptiveLinkBlock, LinkBlock} from "../Auxiliary/LinkBlock";
import { AuthForm } from "./AuthForm";
import {JSON_SERVER_PATH} from "../../Config"
import {ApiService, IsAuthorized, Logout} from "../../services/ApiService";
import {handleLogin} from "./AuthIn"
import {Link} from "react-router-dom";
import React from "react";

export function AuthUp() {

    const handleCreate = async ({login, password, first_name, last_name}) => {
        const formData = new FormData();
        formData.append("username", login);
        formData.append("password", password);
        formData.append("first_name", first_name);
        formData.append("last_name", last_name);

        const responce = await ApiService("users_reg/", {
            method: "post",
            body: formData,
        });

        if (!responce || responce.username !== login) {
            return responce.username
        }

        await handleLogin({login, password});
    };

    return (
        <div className='auth-aside'>
            <div className="auth">
                { IsAuthorized()
                ?
                    <div>
                        <TextBlock text={"Выйдете прежде чем зарегистрироваться"}/>
                        <Link className='profile-logout' to='/auth_in' onClick={(e) => Logout()}>
                            Logout
                        </Link>
                    </div>
                :
                    <div className="auth-up-1">
                        <TextBlock text={"Sing Up"} className="auth-SItxt"/>
                        <AdaptiveLinkBlock elements="with google" className="auth-GGLbtn"/>
                        <TextBlock text='or choose your username to sign up:' className='auth-UseEmtxt'/>
                        <AuthForm onSuccess={handleCreate} formTitle={"Sing Up"} IsSingUp={true}/>
                    </div>
                }
            </div>
        </div>
    );
}