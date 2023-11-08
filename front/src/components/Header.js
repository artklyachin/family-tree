//import {LinkBlock} from './LinkBlock';
import { Link } from 'react-router-dom';
import { LinkBlock } from './Auxiliary/LinkBlock'

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

export function HeaderSimple() {
    return (<Header_template/>);
}

export function HeaderHome() {
    return (
        <Header_template innerContent={<div className="header-right">
            <LinkBlock elements='desktop' to='/desktop' className='header-components' />
            <LinkBlock elements='product' to='/info' className='header-components' />
            <LinkBlock elements='Get started' to='/auth_in' className='header-autorisation' />
        </div>}/>
    );
}

export function HeaderInfo() {
    return (
        <Header_template innerContent={<div className="header-right">
            <LinkBlock elements='Get started' to='/auth_in' className='header-autorisation' />
        </div>}/>
    );
}

export function HeaderAuthIn() {
    return (
        <Header_template innerContent={<div className="header-right">
            <LinkBlock elements='sing up' to='/auth_up' className='header-components header-auth'/>
        </div>}/>
    );
}

export function HeaderAuthUp() {
    return (
        <Header_template innerContent={<div className="header-right">
            <LinkBlock elements='sing in' to='/auth_in' className='header-components header-auth'/>
        </div>}/>
    );
}

export function HeaderForgot() {
    return (
        <Header_template innerContent={<div className="header-right">
            <LinkBlock elements='sing in' to='/auth_in' className='header-components header-auth'/>
        </div>}/>
    );
}

export function HeaderDesktop() {
    return (
        <Header_template innerContent={<div className="header-right">
            <LinkBlock elements='profile' to='/profile' className='header-components'/>
        </div>}/>
    );
}

export function HeaderProfile() {
    return (
        <Header_template innerContent={<div className="header-right">
            <LinkBlock elements='desktop' to='/desktop' className='header-components' />
        </div>}/>
    );
}

export function HeaderWiki() {
    return (
        <Header_template innerContent={<div className="header-right">
            <LinkBlock elements='desktop' to='/desktop' className='header-components' />
            <LinkBlock elements='profile' to='/profile' className='header-components'/>
        </div>}/>
    );
}