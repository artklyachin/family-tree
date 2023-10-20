//import {LinkBlock} from './LinkBlock';
import { Link } from 'react-router-dom';
import { LinkBlock } from './Auxiliary/LinkBlock'

export function Header_template({ innerContent } ) {
    if (arguments.length === 0) {
        innerContent = {}
    }
    return (
        <header className='header'>
            <LinkBlock elements='Ys' to='' className='header-logo'/>
            {innerContent}
        </header>
    );
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
