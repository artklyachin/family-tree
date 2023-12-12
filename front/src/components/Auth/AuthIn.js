import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";
import { AuthForm } from "./AuthForm";
import {ApiService} from "../../services/ApiService";


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
        body: JSON.stringify({username : login, password : password} ),
        headers: {
            "Content-Type": "application/json",
        },
    });

    window.localStorage.setItem('access', access)
    window.localStorage.setItem('refresh', refresh)
    window.location.href = "/"
};
export function AuthIn() {
    return (
        <div className='auth-aside'>
            <div className="auth">
                <div className="auth-up-1">
                    <TextBlock text={"Sing In"} className="auth-SItxt"/>
                    <AdaptiveLinkBlock elements="with google" to="/" className="auth-GGLbtn"/>
                    <TextBlock text='or use your email to sign up:' className='auth-UseEmtxt'/>
                    <form action="" method="get" className="form-example">
                        <input placeholder="Email" className="auth-Login auth-Field" id="auto_in_1" type="email"/>
                    </form>
                    <form action="" method="get" className="form-example">
                        <input placeholder="Password" className="auth-Passw auth-Field" id="auto_in_2" type="text"/>
                    </form>
                    <LinkBlock elements='Sign up' to='/' className='auth-SingInBtn'/>
                </div>
            </div>
        </div>
    );
}

