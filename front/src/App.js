import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import {
    HomeTemplate,
    HomeTemplateUserAuth,
    InfoTemplate,
    AuthInTemplate,
    AuthUpTemplate,
    ForgotTemplate,
    SimpleTemplate,
    DesktopTemplate,
    ProfileTemplate,
    WikiTemplate,
} from './components/Layout';

import {Main} from './components/Main/Main';
import {Info} from './components/Main/Info';
import {AuthIn} from './components/Auth/AuthIn';
import {AuthUp} from './components/Auth/AuthUp';
import {Forgot} from "./components/Auth/Forgot";
import {ChngPass} from "./components/Auth/ChngPass";
import {Desktop} from './components/Main/Desktop';
import {Profile} from './components/Auth/Profiles/Profile';
import {Wiki} from './components/Wikipage/Wiki';
import {WikiEdit} from './components/Wikipage/WikiEdit';

import './styles/App.css';
import './styles/Header.css';
import './styles/Footer.css';
import './components/Main/Main.css';
import './components/Main/Info.css';
import './components/Main/Desktop.css';
import './components/Main/CardItem.css';
import './components/Auth/Auth.css';
import './components/Auth/Profiles/Profile.css';
import './components/Auth/Profiles/Wiki.css';
import './components/Auxiliary/Auxiliary.css';
import './components/Wikipage/Wiki.css';
import {LinkBlock} from "./components/Auxiliary/LinkBlock";
import {CircleImg} from "./components/Auxiliary/CircleImg";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomeTemplate/>}><Route path="" element={<Main/>} /></Route>
                <Route element={<HomeTemplateUserAuth/>}><Route path="/user_auth" element={<Main/>} /></Route>
                <Route element={<InfoTemplate/>}><Route path="/info" element={<Info/>} /></Route>
                <Route element={<AuthInTemplate/>}><Route path="/auth_in" element={<AuthIn/>} /></Route>
                <Route element={<AuthUpTemplate/>} path="/">
                    <Route path="/auth_up" element={<AuthUp/>} />
                    <Route path="/forgot" element={<Forgot/>} />
                </Route>
                <Route element={<SimpleTemplate/>}><Route path="/change_password" element={<ChngPass/>} /></Route>
                <Route element={<DesktopTemplate/>}><Route path="/desktop" element={<Desktop/>} /></Route>
                <Route element={<ProfileTemplate/>}><Route path="/profile" element={<Profile/>} /></Route>
                <Route element={<WikiTemplate/>} path="/wiki_page">
                    <Route index element={<Wiki/>} />
                    <Route path="edit" element={<WikiEdit/>} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
