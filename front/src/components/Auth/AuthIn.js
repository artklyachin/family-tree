import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";
import { AuthForm } from "./AuthForm";
import {ApiService, IsAuthorized, Logout} from "../../services/ApiService";


const handleLogin = async (login, password) => {
    const {access, refresh} = await ApiService("token/", {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: login, password }),
    });


    // console.log(response)
    if (access) {
        window.localStorage.setItem('access', access)
        window.localStorage.setItem('refresh', refresh)
        // window.localStorage.setItem('user_id', refresh)
        window.location.href = "/"
    }
};
export function AuthIn() {
    return (
        <div className='auth-aside'>
            <div className="auth">
                { IsAuthorized()
                ?
                    <div>
                        <TextBlock text={"Выйдите прежде чем сменить учётную запись"}/>
                        <button className="auth-SItxt" onClick={Logout}>Logout</button>
                    </div>
                :
                    <div className="auth-up-1">
                        <TextBlock text={"Sing In"} className="auth-SItxt"/>
                        <AdaptiveLinkBlock elements="with google" to="/" className="auth-GGLbtn"/>
                        <TextBlock text='or use your email to sign up:' className='auth-UseEmtxt'/>
                        <AuthForm onSuccess={handleLogin} formTitle={"Sing Up"}/>
                    </div>
                }
            </div>
        </div>
    );
}

