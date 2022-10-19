import { useRef, useState } from 'react';
import '../Style/Header/Header.scss'
import {Link} from 'react-scroll'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    const [navBar, setNavBar] = useState(false)

    const navRef = useRef()
    const menuRef = useRef()
    const btnRef = useRef()

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavBar(true)
        } else {
            setNavBar(false)
        }

    }
    window.addEventListener('scroll', changeBackground)

    const showNavBar = () => {
        navRef.current.classList.add('menu-responsive')
        navRef.current.classList.remove('menu-ul')
        menuRef.current.style.display = 'none'

    }
    const closeNavBar = () => {
        navRef.current.classList.remove('menu-responsive')
        navRef.current.classList.add('menu-ul')
        menuRef.current.style.display = 'block'
    }

    return (
        <>
            <div className='header'>
                <img className='mask' src='../../img/image/Mask group.png'></img>
                <div className={navBar ? "menu menu-active" : "menu"}>
                    <img src='../../img/image/logo.png' alt=''></img>
                    <ul className='menu-ul' ref={navRef}>
                        <div ref={btnRef} className='nav-close-btn' onClick={closeNavBar}><CloseIcon /></div>
                        <li>
                            <Link to='home' spy={true} smooth={true} offset={-150} duration={500} >Services</Link>
                        </li>
                        <li ><Link to='work' spy={true} smooth={true} offset={-150} duration={500} >Packages</Link></li>
                        <li ><Link to='client' spy={true} smooth={true} offset={-150} duration={500} >Who We Are</Link></li>
                        <li ><Link to='portfolio' spy={true} smooth={true} offset={-150} duration={500} >Our Protfolio</Link></li>
                        <li ><Link to='blog' spy={true} smooth={true} offset={-150} duration={500} >About Us</Link></li>
                        <button ><Link to='footer' spy={true} smooth={true} offset={-150} duration={500} >Contacts</Link></button>
                        
                    </ul>
                    <div ref={menuRef} className='nav-btn' onClick = {showNavBar}><MenuIcon/></div>
                </div>
                <div className='content-header' id='home'>
                    <div className='content-header-text'>
                        <h1>BEST <span>MARKETING</span> COMPANY</h1>
                        <h3>#1 MARKETING Services Agency in USA & UK</h3>
                        <p>If you're looking for the best SEO company for your business,PageTraffic is the perfect choice. </p>
                        <div className='content-header-text-btn'>
                            <button>Get start</button>
                            <div className='watch-video'> 
                                <div className='circle1'>
                                    <div className='circle2'>
                                        <div className='circle3'>
                                            <img src='../../img/icon/play.png'></img>
                                        </div>
                                    </div>
                                </div>
                                <p>Watch Video</p>
                            </div>
                        </div>
                    </div>
                    <img src='../../img/image/person.png'></img>
                </div>
            </div>
            
        </>
    );
}

export default Header;