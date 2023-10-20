import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import {
  HeaderHome,
  HeaderInfo,
} from './components/Header';

import {Footer} from './components/Footer';

import {Main} from './components/Main/Main';
import {Info} from './components/Main/Info';

import './styles/App.css';
import './styles/Header.css';
import './styles/Footer.css';
import './components/Main/Main.css';
import './components/Main/Info.css';
import './components/Auxiliary/Auxiliary.css';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route element={<HomeTemplate/>}><Route path="" element={<Main/>} /></Route>
          <Route element={<InfoTemplate/>}><Route path="/info" element={<Info/>} /></Route>
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

export default App;
