import {TextBlock} from "../Auxiliary/TextBlock";
import {LinkBlock} from "../Auxiliary/LinkBlock";

export function Forgot() {
    return (
        <div className='auth-aside'>
            <div className="auth">
                <div className="auth-forgot-1">
                    <TextBlock text={"Password recovery"} className="auth-SItxt"/>
                    <TextBlock text={'Enter the email you use for YS. We will receive an email with access to your account.'}
                               className='auth-UseEmtxt'/>
                    <form action="" method="get" className="form-example">
                        <input placeholder="Email" className="auth-Login auth-Field" id="auto_in_1" type="email"/>
                    </form>
                    <LinkBlock elements='Continue' to='/change_password' className='auth-SingInBtn'/>
                </div>
            </div>
        </div>
    );
}