import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {AdaptiveLinkBlock, LinkBlock} from "../Auxiliary/LinkBlock";
import { AuthForm } from "./AuthForm";
import {JSON_SERVER_PATH} from "../../Config"

export function AuthUp() {
    const handleCreate = async (login, password) => {
        const values = {
            login,
            password,
        };

        await fetch(JSON_SERVER_PATH + "/users", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    return (
        <div className='auth-aside'>
            <div className="auth">
                <div className="auth-up-1">
                    <TextBlock text={"Sing Up"} className="auth-SItxt"/>
                    <AdaptiveLinkBlock elements="with google" to="/" className="auth-GGLbtn"/>
                    <TextBlock text='or use your email to sign up:' className='auth-UseEmtxt'/>
                    <AuthForm onSuccess={handleCreate} formTitle={"Sing Up"}/>
                </div>
            </div>
        </div>
    );
}