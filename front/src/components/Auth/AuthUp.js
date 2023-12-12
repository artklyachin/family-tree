import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {AdaptiveLinkBlock, LinkBlock} from "../Auxiliary/LinkBlock";
import { AuthForm } from "./AuthForm";
import {JSON_SERVER_PATH} from "../../Config"
import {ApiService} from "../../services/ApiService";

export function AuthUp() {
    const handleLogin = async (login, password) => {
        const values = {}

        // await fetch(JSON_SERVER_PATH + "/users", {
        //     method: "POST",
        //     body: JSON.stringify(values),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });

        const { access, refresh } = await ApiService("token/", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username: login, password }),
        });

        if (access) {
            window.localStorage.setItem('access', access)
            window.localStorage.setItem('refresh', refresh)
            window.location.href = "/"
        }
    };

    const handleCreate = async (login, password) => {
        const formData = new FormData();
        formData.append("username", login);
        formData.append("password", password);

        await ApiService("users_reg/", {
            method: "post",
            body: formData,
        });

        await handleLogin(login, password);


        // const { access, refresh } = await ApiService("users_reg/", {
        //     method: "Post",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ username: login, password }),
        // });
        //
        // if (access) {
        //     window.localStorage.setItem('access', access)
        //     window.localStorage.setItem('refresh', refresh)
        //     window.location.href = "/"
        // }
    };

    const onLogout = () => {
        window.localStorage.removeItem("access")
        window.localStorage.removeItem("refresh")
        window.location.reload()
    };

    return (
        <div className='auth-aside'>
            <div className="auth">
                <div className="auth-up-1">
                    {window.localStorage.getItem('access')
                        ? <button className="auth-SItxt" onClick={onLogout}>Выйти</button>
                        : <TextBlock text={"Sing Up"} className="auth-SItxt"/>}
                    <AdaptiveLinkBlock elements="with google" to="/" className="auth-GGLbtn"/>
                    <TextBlock text='or use your email to sign up:' className='auth-UseEmtxt'/>
                    <AuthForm onSuccess={handleLogin} formTitle={"Sing Up"}/>
                </div>
            </div>
        </div>
    );
}