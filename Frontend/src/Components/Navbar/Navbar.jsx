import './Navbar.css'
import DropMe from '../DropMe/DropMe';
import '../../Fonts/PP_Mori/PPMori-Regular.otf'

const Navbar = () => {
    return (
        <div className='section__navbar'>
            <p className='sect__nav__name'>Abdullah Al Khalid</p>
            <DropMe />
            <button className='sect__nav__contact'>Contact</button>
        </div>
    )
}


export default Navbar;