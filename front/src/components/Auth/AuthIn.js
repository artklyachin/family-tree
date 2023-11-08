import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "../Main/main-texts";
import {LinkBlock, AdaptiveLinkBlock} from "../Auxiliary/LinkBlock";

export function AuthIn() {
    return (
        <div className='auth-aside'>
            <div className="auth">
                <div className="auth-in-1">
                    <TextBlock text={"Sing in"} className="auth-SItxt"/>
                    <AdaptiveLinkBlock elements="Google" to="/" className="auth-GGLbtn"/>
                    <TextBlock text='or use your email to sign in:' className='auth-UseEmtxt'/>
                    <form className="form-example">
                        <input name="em" placeholder="Email" className="auth-Login auth-Field" id="auto_in_1" type="email"/>
                        <button type="submit">отправить форму</button>
                    </form>
                    <form action="" method="get" className="form-example">
                        <input placeholder="Password" className="auth-Passw auth-Field" id="auto_in_2" type="text"/>
                    </form>
                    <LinkBlock elements='I forgot my password' to='/forgot' className='auth-Forget'/>
                    <LinkBlock elements='Sign in' to='/' className='auth-SingInBtn'/>
                    <form id="post-form">
                        Имя:
                        <input type="submit" value="Отправить" />
                        <input type="text" name="name" />
                        <p id="para1">Some text here</p>
                    </form>
                </div>
            </div>
        </div>
    );
}
/*
                    <form action="" method="get" className="form-example"
                    onSubmit="SubmitFrom();" id="post-form">
 */