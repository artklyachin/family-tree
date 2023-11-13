import {TextBlock} from "../../Auxiliary/TextBlock";
import {CircleImg} from "../../Auxiliary/CircleImg"

export function Profile() {
    return (
        <div className='profile-aside'>
            <div className='profile-field'>
                <div className='profile-header'>
                    <TextBlock text="Profile details" className="profile-header-component prfl-stl"/>
                </div>
                <div className='profile-details'>
                    <TextBlock text="First and Last Name" className="prfl-stl"/>
                    <TextBlock text="" className="profile-details-field prfl-stl"/>
                </div>
                <div className="profile-foto">
                    <TextBlock text="Your photo" className="prfl-stl"/>
                    <div className={"profile-foto-foto"}>
                        <CircleImg imgUrl={require("../../../images/Malfoy.png")}/>
                    </div>
                    {/*<TextBlock text="" className="profile-foto-foto"/>*/}
                    <TextBlock text="update" className="profile-foto-update prfl-stl"/>
                </div>
            </div>
        </div>
    );
}
