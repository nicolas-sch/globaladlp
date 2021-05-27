import React, {useState, useEffect} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../assets/Logo.png';
import './navbar.css';
import Inform from '../components/inform';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>

            <div>
            <Inform />
            
        
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo" onClick={closeMobileMenu}>
                       <a href="/"><img src={Logo} alt="Logo" /></a>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className="nav-item">
                            <a href="" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={80}
                                    duration={500}
                                >
                                    A Global AD
                                </Link>
                                 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="expertises"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Expertises
                                </Link>
                                  
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-links" onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="clientes"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Clientes
                                </Link>
                                  
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a href="" className="nav-links" onClick={closeMobileMenu}>
                            <Link
                                onClick={closeMobileMenu}
                                activeClass="active"
                                to="trabalhos"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                    Cases
                                </Link>
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a href="" className="nav-links" onClick={closeMobileMenu}>
                            <Link
                                onClick={closeMobileMenu}
                                activeClass="active"
                                to="blog"
                                spy={true}
                                smooth={true}
                                offset={-20}
                                duration={500}
                            >
                                    Blog
                                </Link>
                            </a>
                        </li>
                        <li className="nav-item1">
                            <a href="" class='nav-links1 h-button h-button-slide-up' data-text='Contato' onClick={closeMobileMenu}>
                                <Link
                                    onClick={closeMobileMenu}
                                    activeClass="active"
                                    to="contato"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <span>C</span>
                                    <span>O</span>
                                    <span>N</span>
                                    <span>T</span>
                                    <span>A</span>
                                    <span>T</span>
                                    <span>O</span>
                                </Link>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>  
            </div>
        </>
    )
}

export default Navbar;