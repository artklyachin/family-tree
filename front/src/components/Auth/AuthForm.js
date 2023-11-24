import { useState } from "react";
import {LinkBlock} from "../Auxiliary/LinkBlock";

export function AuthForm(props) {
    const { onSuccess, formTitle, defaultLogin, defaultPassword } = props;
    const [login, setLogin] = useState(defaultLogin);
    const [password, setPassword] = useState(defaultPassword);
    const [errorLogin, setErrorLogin] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const handleChangeLogin = (event) => {
        if (event.target.value.length > 8) {
            setErrorLogin("Логин не может быть больше 8 символов");
        } else {
            setErrorLogin("");
            setLogin(event.target.value);
        }
    };

    const handleChangePassword = (event) => {
        if (event.target.value.length > 8) {
            setErrorPassword("Пароль не может быть больше 8 символов");
        } else {
            setErrorPassword("");
            setPassword(event.target.value);
        }
    };

    return (
        <div className='auth-aside'>
            <div className="auth">
                <div className="auth-up-1">
                    <form>
                        <span className="error">{errorLogin}</span>
                        <div>
                            <input placeholder="Email" className="auth-Login auth-Field" name="login" value={login} onChange={handleChangeLogin}/>
                        </div>
                        <span className="error">{errorPassword}</span>
                        <div>
                            <input placeholder="Password" className="auth-Passw auth-Field" name="password" value={password} onChange={handleChangePassword}/>
                        </div>
                        <div>
                            <button
                                className='auth-SingInBtn'
                                type="submit"
                                id="create-button"
                                onClick={(event) => {
                                    event.preventDefault();
                                    onSuccess(login, password);
                                }}
                            >
                                {formTitle}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

// <form action="" method="get" className="form-example">
//     <input placeholder="Email" className="auth-Login auth-Field" id="auto_in_1" type="email"/>
// </form>
// <form action="" method="get" className="form-example">
//     <input placeholder="Password" className="auth-Passw auth-Field" id="auto_in_2" type="text"/>
// </form>
// <LinkBlock elements='Sign up' to='/' className='auth-SingInBtn'/>
