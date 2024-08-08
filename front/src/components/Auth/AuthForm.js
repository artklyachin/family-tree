import { useState } from "react";
import {LinkBlock} from "../Auxiliary/LinkBlock";

export function AuthForm(props) {
    const { onSuccess, formTitle, defaultLogin, defaultPassword, IsSingUp } = props;
    const [login, setLogin] = useState(defaultLogin);
    const [password, setPassword] = useState(defaultPassword);
    const [first_name, setFirstName] = useState(defaultLogin);
    const [last_name, setLastName] = useState(defaultPassword);

    const [errorLogin, setErrorLogin] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorSurname, setErrorSurname] = useState("");

    const finalCheck = async () => {
        let wrong = false;
        if (!login || login.length > 20 || login.length === 0) {
            setErrorLogin("Логин не может быть больше 20 символов или пустым");
            return;
        } else {
            setErrorLogin(null)
        }
        if (!password || password.length > 20 || password.length === 0) {
            setErrorPassword("Пароль не может быть больше 20 символов или пустым");
            return;
        } else {
            setErrorPassword(null)
        }
        if (IsSingUp && (!first_name || first_name.length > 20 || first_name.length === 0)) {
            setErrorName("Имя не может быть больше 20 символов или пустым");
            return;
        } else {
            setErrorName(null)
        }
        if (IsSingUp && (!last_name || last_name.length > 20 || last_name.length === 0)) {
            setErrorSurname("Имя не может быть больше 20 символов или пустым");
            return;
        } else {
            setErrorSurname(null)
        }
        if (1) {
            console.log(login, password, !login)
            const responce = await onSuccess({login, password, first_name, last_name})
            setErrorLogin(responce)
        }
    }

    const handleChangeLogin = (event) => {
        if (event.target.value.length > 20) {
            setErrorLogin("Логин не может быть больше 20 символов или пустым");
        } else {
            setErrorLogin("");
            setLogin(event.target.value);
        }
    };

    const handleChangePassword = (event) => {
        if (event.target.value.length > 20) {
            setErrorPassword("Пароль не может быть больше 20 символов или пустым");
        } else {
            setErrorPassword("");
            setPassword(event.target.value);
        }
    };

    const handleChangeName = (event) => {
        if (event.target.value.length > 20) {
            setErrorName("Имя не может быть больше 20 символов или пустым");
        } else {
            setErrorName("");
            setFirstName(event.target.value);
        }
    };

    const handleChangeSurname = (event) => {
        if (event.target.value.length > 20) {
            setErrorSurname("Фамилия не может быть больше 20 символов или пустым");
        } else {
            setErrorSurname("");
            setLastName(event.target.value);
        }
    };

    return (
        <form className="auth-form">
            { errorLogin ?
                <span className="error">{errorLogin}</span>
            : null }
            <input placeholder="Username" className="auth-Login auth-Field" name="login" value={login} onChange={handleChangeLogin}/>
            { errorPassword ?
                <span className="error">{errorPassword}</span>
            : null }
            <input placeholder="Password" className="auth-Passw auth-Field" name="password" value={password} onChange={handleChangePassword}/>
            { IsSingUp ?
                <>
                    { errorName ?
                        <span className="error">{errorName}</span>
                        : null }
                    <input placeholder="First name" className="auth-Field" name="login" value={first_name} onChange={handleChangeName}/>
                    { errorSurname ?
                        <span className="error">{errorSurname}</span>
                        : null }
                    <input placeholder="Last name" className="auth-Field" name="password" value={last_name} onChange={handleChangeSurname}/>
                </>
            : null }
            <div>
                <button
                    className='auth-SingInBtn'
                    type="submit"
                    id="create-button"
                    onClick={(event) => {
                        event.preventDefault();
                        finalCheck();
                    }}
                >
                    {formTitle}
                </button>
            </div>
        </form>
    );
}

// <form action="" method="get" className="form-example">
//     <input placeholder="Email" className="auth-Login auth-Field" id="auto_in_1" type="email"/>
// </form>
// <form action="" method="get" className="form-example">
//     <input placeholder="Password" className="auth-Passw auth-Field" id="auto_in_2" type="text"/>
// </form>
// <LinkBlock elements='Sign up' to='/' className='auth-SingInBtn'/>
