import {TextBlock} from "../Auxiliary/TextBlock";
import {main_texts} from "./main-texts"
import {LinkBlock} from "../Auxiliary/LinkBlock";

export function Main() {
    return (
        <div className="main-aside">
            <div className="main-part-1">
                <TextBlock text={main_texts["family_history"]} className="main-part-1-txt1"/>
                <div className="mini-rectangle"></div>
            </div>
            <div className="main-2">
                <TextBlock text={main_texts["create_story"]} className="null"/>
                <TextBlock text={main_texts["decor_text1"]} className="null"/>
                <TextBlock text={main_texts["decor_text2"]} className="null"/>

                <div><img src={require('../../images/img-main-face.png')} className="null" alt="face"/></div>
                <div><img src={require('../../images/img-main-family.png')} className="null" alt="family"/></div>
                <div><img src={require('../../images/img-main-cup.png')} className="null" alt="cup"/></div>
                <div><img src={require('../../images/img-main-books.png')} className="null" alt="books"/></div>
            </div>
            <div className="main-part-3">
                <TextBlock text={main_texts["family_ties"]} className="null"/>
                <div><img src={require('../../images/img-main-family-tree.png')} className="main-part-3-pic1"
                          alt="family-tree"/></div>
            </div>
            <div className="main-part-4">
                <div><img src={require('../../images/img-main-big-family.png')} className="main-part-4-pic1" alt="big-family"/></div>
                <TextBlock text={main_texts["surprise_friends"]} className="null"/>
            </div>
            <div className="main-part-5">
                <TextBlock text={main_texts["join_to_us"]} className="main-part-5-txt1"/>
                <LinkBlock elements='registration' to='/authorization' className='main-part-5-auth'/>
            </div>
        </div>
    );
}
