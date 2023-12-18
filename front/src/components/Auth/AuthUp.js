import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {AdaptiveLinkBlock, LinkBlock} from "../Auxiliary/LinkBlock";
import { AuthForm } from "./AuthForm";
import {JSON_SERVER_PATH} from "../../Config"
import {ApiService, IsAuthorized, Logout} from "../../services/ApiService";

export function AuthUp() {
    const handleLogin = async (login, password) => {
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
    };

    return (
        <div className='auth-aside'>
            <div className="auth">
                { IsAuthorized()
                ?
                    <div>
                        <TextBlock text={"Выйдете прежде чем зарегистрироваться"}/>
                        <button className="auth-SItxt" onClick={Logout}>Logout</button>
                    </div>
                :
                    <div className="auth-up-1">
                        <TextBlock text={"Sing Up"} className="auth-SItxt"/>
                        <AdaptiveLinkBlock elements="with google" to="/" className="auth-GGLbtn"/>
                        <TextBlock text='or use your email to sign up:' className='auth-UseEmtxt'/>
                        <AuthForm onSuccess={handleCreate} formTitle={"Sing Up"}/>
                    </div>
                }
            </div>
        </div>
    );
}