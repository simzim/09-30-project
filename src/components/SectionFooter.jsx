import FooterBaner from './FooterBaner';
import SecondMenu from './SecondMenu';
import './SectionFooter.css';
import SocialMenu from './SocialMenu';

export default function SectionFooter(){
    return (
        <section className='footer'>
            <SecondMenu/>
            <SocialMenu/>
            <FooterBaner/>
        </section>
    );
}