import {TextBlock} from "../Auxiliary/TextBlock";
import {LinkBlock} from "../Auxiliary/LinkBlock";

export function ChngPass() {
    return (
        <div className='auth-aside'>
            <div className="auth">
                <div className="auth-cp-1">
                    <TextBlock text={"Change password"} className="auth-SItxt"/>
                    <TextBlock text={'Write a new password'}
                               className='auth-UseEmtxt'/>
                    <form action="" method="get" className="form-example">
                        <input placeholder="New password" className="auth-Passw auth-Field" id="auto_in_2" type="text"/>
                    </form>
                    <LinkBlock elements='Change' to='/' className='auth-SingInBtn'/>
                </div>
            </div>
        </div>
    );
}