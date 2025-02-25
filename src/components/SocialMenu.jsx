import './SocialMenu.css';
import fb from '../img/social/facebook.svg';
import tube from '../img/social/youtube.svg';
import tw from '../img/social/twitter.svg';
import ig from '../img/social/instagram.svg';
import lin from '../img/social/linkedin.svg';


export default function SocialMenu(){
    return (
        <div className='wrapper social-menu'>
            <nav className='social-menu-links'>
                <a href='#'><img src={tube} alt="youtube icon" /></a>
                <a href='#'><img src={fb} alt="fb icon" /></a>
                <a href='#'><img src={tw} alt="twiter icon" /></a>
                <a href='#'><img src={ig} alt="instagram icon" /></a>
                <a href='#'><img src={lin} alt="linkedin icon" /></a>
            </nav>
        </div>
    );
}