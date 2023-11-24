//import {LinkBlock} from './LinkBlock';
import {Link, Outlet} from 'react-router-dom';
import { LinkBlock } from './Auxiliary/LinkBlock'
import {CircleImg} from "./Auxiliary/CircleImg";
import {TextBlock} from "./Auxiliary/TextBlock";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-up">
                <TextBlock text="Team" className="footer-up-text1" />
                <LinkBlock elements='VK' href='https://vk.com/id340504554' className='footer-up-link'/>
                <LinkBlock elements='Telegram' href='https://t.me/koteika2020' className='footer-up-link'/>
            </div>
            <div className="footer-down">
                <img src={require('../images/img-footer-NPR.jpg')} className="footer-NPR-picture" alt="NPR_logo" />
            </div>
        </footer>
    );
}
export function Header_template({ innerContent } ) {
    if (arguments.length == 0) {
        innerContent = {}
    }
    return (
        <header className='header'>
            <LinkBlock elements='Ys' to='' className='header-logo'/>
            {innerContent}
        </header>
    );
}

export const HomeTemplate = () => {
    return (
        //<link rel="icon" type="image/x-icon" href="https://www.adobe.com/express/feature/image/media_15960174677e9abd368c05a0e53f9cc5526099a27.png?width=2000&format=webply&optimize=medium"/>
        <div>
            <Header_template innerContent={<div className="header-right">
                <LinkBlock elements='desktop' to='/desktop' className='header-components' />
                <LinkBlock elements='product' to='/info' className='header-components' />
                <LinkBlock elements='Get started' to='/auth_in' className='header-autorisation' />
            </div>}/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export const HomeTemplateUserAuth = () => {
    return (
        //<link rel="icon" type="image/x-icon" href="https://www.adobe.com/express/feature/image/media_15960174677e9abd368c05a0e53f9cc5526099a27.png?width=2000&format=webply&optimize=medium"/>
        <div>
            <Header_template innerContent={<div className="header-right">
                <LinkBlock elements='desktop' to='/desktop' className='header-components' />
                <LinkBlock elements='product' to='/info' className='header-components' />
                <LinkBlock elements='Malfoy' to='/profile' className='header-name' />
                <LinkBlock elements={<CircleImg imgUrl={require("../images/Malfoy.png")}/>} to='/profile' className='header-avatar' />
            </div>}/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export const InfoTemplate = () => {
    return (
        <div>
            <Header_template innerContent={<div className="header-right">
                <LinkBlock elements='Get started' to='/auth_in' className='header-autorisation' />
            </div>}/>
            <Outlet/>
        </div>
    );
}

export const AuthInTemplate = () => {
    return (
        <div>
            <Header_template innerContent={<div className="header-right">
                <LinkBlock elements='sing up' to='/auth_up' className='header-components header-auth'/>
            </div>}/>
            <Outlet/>
        </div>
    );
}

export const AuthUpTemplate = () => {
    return (
        <div>
            <Header_template innerContent={<div className="header-right">
                <LinkBlock elements='sing in' to='/auth_in' className='header-components header-auth'/>
            </div>}/>
            <Outlet/>
        </div>
    );
}

export const SimpleTemplate = () => {
    return (
        <div>
            <Header_template/>
            <Outlet/>
        </div>
    );
}

export const DesktopTemplate = () => {
    return (
        <div>
            <Header_template innerContent={<div className="header-right">
                <LinkBlock elements='profile' to='/profile' className='header-components'/>
            </div>}/>
            <Outlet/>
        </div>
    );
}

export const ProfileTemplate = () => {
    return (
        <div>
            <Header_template innerContent={<div className="header-right">
                <LinkBlock elements='desktop' to='/desktop' className='header-components' />
            </div>}/>
            <Outlet/>
        </div>
    );
}

export const WikiTemplate = () => {
    return (
        <div>
            <Header_template innerContent={<div className="header-right">
                <LinkBlock elements='desktop' to='/desktop' className='header-components' />
                <LinkBlock elements='profile' to='/profile' className='header-components'/>
            </div>}/>
            <Outlet/>
        </div>
    );
}

