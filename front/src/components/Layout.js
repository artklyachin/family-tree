//import {LinkBlock} from './LinkBlock';
import {Outlet} from 'react-router-dom';
import {LinkBlock} from './Auxiliary/LinkBlock'
import {AvatarBlock, CircleImg} from "./Auxiliary/CircleImg";
import {TextBlock} from "./Auxiliary/TextBlock";
import {ApiService, IsAuthorized} from "../services/ApiService";
import {useEffect, useState} from "react";

export async function getCurrentUser() {
    return await ApiService(`current_user/`);
}

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-up">
                <TextBlock text="Team" className="footer-up-text1" />
                <LinkBlock elements='VK' href='https://vk.com/id340504554' className='footer-up-link'/>
                <LinkBlock elements='Telegram' href='https://t.me/koteika2020' className='footer-up-link'/>
            </div>
            <div className="footer-down">
                <img src={require("../images/img-footer-NPR.jpg")} className="footer-NPR-picture" alt="NPR_logo" />
            </div>
        </footer>
    );
}
export function Header_template({ innerContent } ) {
    if (arguments.length === 0) {
        innerContent = {}
    }
    return (
        <header className='header'>
            <LinkBlock elements='Ys' to='/' className='header-logo'/>
            {innerContent}
        </header>
    );
}

export function HomeTemplate() {
    const [user, setUser] = useState({ first_name : "user" });
    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                const user = await ApiService(`current_user/`);
                setUser(user);
                console.log(user)
            }
        })();
    }, []);


    return (
        <div>
            {!IsAuthorized() ?
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements='desktop' to='/desktop' className='header-components'/>
                    <LinkBlock elements='product' to='/info' className='header-components'/>
                    <LinkBlock elements='Get started' to='/auth_in' className='header-autorisation'/>
                </div>}/>
                :
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements='desktop' to='/desktop' className='header-components'/>
                    <LinkBlock elements='product' to='/info' className='header-components'/>
                    <LinkBlock elements={user.first_name} to='/profile' className='header-name'/>
                    <LinkBlock elements={<CircleImg imgUrl={user.avatar}/>} to='/profile' className='header-avatar'/>
                </div>}/>
            }
            <Outlet/>
            <Footer/>
        </div>
    );
}

export const InfoTemplate = () => {
    const [user, setUser] = useState({ first_name : "user" });
    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                const user = await ApiService(`current_user/`);
                setUser(user);
            }
        })();
    }, []);

    return (
        <div>
            { !IsAuthorized() ?
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements='Get started' to='/auth_in' className='header-autorisation' />
                </div>}/>
            :
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements={user.first_name} to='/profile' className='header-name'/>
                    <LinkBlock elements={<CircleImg imgUrl={user.avatar}/>} to='/profile' className='header-avatar'/>
                </div>}/>
            }
            <Outlet/>
        </div>
    );
}

export const AuthInTemplate = () => {
    const [user, setUser] = useState({ first_name : "user" });
    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                const user = await ApiService(`current_user/`);
                setUser(user);
            }
        })();
    }, []);

    return (
        <div>
            { !IsAuthorized() ?
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements='sing up' to='/auth_up' className='header-components header-auth'/>
                </div>}/>
            :
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements={user.first_name} to='/profile' className='header-name'/>
                    <LinkBlock elements={<CircleImg imgUrl={user.avatar}/>} to='/profile' className='header-avatar'/>
                </div>}/>
            }
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
    const [user, setUser] = useState({ first_name : "user" });
    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                const user = await ApiService(`current_user/`);
                setUser(user);
            }
        })();
    }, []);

    return (
        <div>
            { !IsAuthorized() ?
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements={'sing in'} to='/auth_in' className='header-components'/>
                </div>}/>
            :
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements={user.first_name} to='/profile' className='header-name'/>
                    <LinkBlock elements={<CircleImg imgUrl={user.avatar}/>} to='/profile' className='header-avatar'/>
                </div>}/>
            }
            <Outlet/>
        </div>
    );
}

export const ProfileTemplate = () => {
    const [user, setUser] = useState({ first_name : "user" });
    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                const user = await ApiService(`current_user/`);
                setUser(user);
            }
        })();
    }, []);

    return (
        <div>
            { !IsAuthorized() ?
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements='sing in' to='/auth_in' className='header-components header-auth'/>
                </div>}/>
            :
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements='desktop' to='/desktop' className='header-components' />
                </div>}/>
            }
            <Outlet/>
        </div>
    );
}

export const WikiTemplate = () => {
    const [user, setUser] = useState({ first_name : "user" });
    useEffect(() => {
        (async () => {
            if (IsAuthorized()) {
                const user = await ApiService(`current_user/`);
                setUser(user);
            }
        })();
    }, []);

    return (
        <div>
            { !IsAuthorized() ?
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements='sing in' to='/auth_in' className='header-components' />
                </div>}/>
            :
                <Header_template innerContent={<div className="header-right">
                    <LinkBlock elements='desktop' to='/desktop' className='header-components' />
                    <LinkBlock elements={user.first_name} to='/profile' className='header-name'/>
                    <LinkBlock elements={<CircleImg imgUrl={user.avatar}/>} to='/profile' className='header-avatar'/>
                </div>}/>
            }
            <Outlet/>
        </div>
    );
}

