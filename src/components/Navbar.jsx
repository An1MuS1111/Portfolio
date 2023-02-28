import '../styles/Navbar.css';
import logo_animus from '../images/logo-animus.webp'
import logo_instagram from '../images/logo-instagram.svg'
import logo_discord from '../images/logo-discord.svg'
import logo_facebook from '../images/logo-facebook.svg'
import logo_twitter from '../images/logo-twitter.svg'
import logo_behance from '../images/logo-behance.svg'


export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navigation">

                <li className="Home"><a href="">
                    <p>HOME</p>
                </a></li>
                <li><a href="">
                    <p>PORTFOLIO</p>
                </a></li>
                <li><a href="">
                    <p>BLOG</p>
                </a></li>
                <li><a href="">
                    <p>PAGES</p>
                </a></li>
            </div>

            <div className="logo-image">
                <img src={logo_animus} alt="" className="logo"/>
            </div>


            <div className="social-links">
                <img src={logo_instagram} alt=""/>
                <img src={logo_facebook} alt=""/>
                <img src={logo_behance} alt=""/>
                <img src={logo_discord} alt=""/>
                <img className="logo_twitter" src={logo_twitter} alt=""/>
            </div>


        </div>
    )
}