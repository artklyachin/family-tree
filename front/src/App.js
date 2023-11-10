import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import {
    HeaderHome,
    HeaderInfo,
    HeaderAuthIn,
    HeaderAuthUp,
    HeaderDesktop,
    HeaderForgot,
    HeaderSimple,
    HeaderProfile,
    HeaderWiki
}
    from './components/Header';
import {Footer} from './components/Footer';

import {Main} from './components/Main/Main';
import {Info} from './components/Main/Info';
import {AuthIn} from './components/Auth/AuthIn';
import {AuthUp} from './components/Auth/AuthUp';
import {Forgot} from "./components/Auth/Forgot";
import {ChngPass} from "./components/Auth/ChngPass";
import {Desktop} from './components/Main/Desktop';
import {Profile} from './components/Profiles/Profile';
import {Wiki} from './components/Wikipage/Wiki';

import './styles/App.css';
import './styles/Header.css';
import './styles/Footer.css';
import './components/Main/Main.css';
import './components/Main/Info.css';
import './components/Main/Desktop.css';
import './components/Main/CardItem.css';
import './components/Auth/Auth.css';
import './components/Profiles/Profile.css';
import './components/Profiles/Wiki.css';
import './components/Auxiliary/Auxiliary.css';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomeTemplate/>}><Route path="" element={<Main/>} /></Route>
                <Route element={<InfoTemplate/>}><Route path="/info" element={<Info/>} /></Route>
                <Route element={<AuthInTemplate/>}><Route path="/auth_in" element={<AuthIn/>} /></Route>
                <Route element={<AuthUpTemplate/>}><Route path="/auth_up" element={<AuthUp/>} /></Route>
                <Route element={<ForgotTemplate/>}><Route path="/forgot" element={<Forgot/>} /></Route>
                <Route element={<SimpleTemplate/>}><Route path="/change_password" element={<ChngPass/>} /></Route>
                <Route element={<DesktopTemplate/>}><Route path="/desktop" element={<Desktop/>} /></Route>
                <Route element={<ProfileTemplate/>}><Route path="/profile" element={<Profile/>} /></Route>
                <Route element={<WikiTemplate/>}><Route path="/wiki_page" element={<Wiki/>} /></Route>
            </Routes>
        </BrowserRouter>
    );
}

const HomeTemplate = () => {
    return (
        //<link rel="icon" type="image/x-icon" href="https://www.adobe.com/express/feature/image/media_15960174677e9abd368c05a0e53f9cc5526099a27.png?width=2000&format=webply&optimize=medium"/>
        <div>
            <HeaderHome/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

const InfoTemplate = () => {
    return (
        <div>
            <HeaderInfo/>
            <Outlet/>
        </div>
    );
}

const AuthInTemplate = () => {
    return (
        <div>
            <HeaderAuthIn/>
            <Outlet/>
        </div>
    );
}

const AuthUpTemplate = () => {
    return (
        <div>
            <HeaderAuthUp/>
            <Outlet/>
        </div>
    );
}


const ForgotTemplate = () => {
    return (
        <div>
            <HeaderForgot/>
            <Outlet/>
        </div>
    );
}

const SimpleTemplate = () => {
    return (
        <div>
            <HeaderSimple/>
            <Outlet/>
        </div>
    );
}

const DesktopTemplate = () => {
    return (
        <div>
            <HeaderDesktop/>
            <Outlet/>
        </div>
    );
}

const ProfileTemplate = () => {
    return (
        <div>
            <HeaderProfile/>
            <Outlet/>
        </div>
    );
}

const WikiTemplate = () => {
    return (
        <div>
            <HeaderWiki/>
            <Outlet/>
        </div>
    );
}


export default App;
