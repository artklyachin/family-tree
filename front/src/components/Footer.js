import { Link } from 'react-router-dom';
import { TextBlock } from "./Auxiliary/TextBlock";
import { LinkBlock } from "./Auxiliary/LinkBlock";

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

/*
 */


