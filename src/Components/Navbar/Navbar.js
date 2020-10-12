import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, } from 'react-icons/fa';
import {BiChevronDown } from 'react-icons/bi';
import { Button} from '../Util/Button';
import './Navbar.css';

//rfce quick creaction with react snippits 
//menu dops down istead of pull out
//uses react icons
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

  window.addEventListener('resize', showButton);

    return (
        <>  
            <nav className="navbar"> 
                <div className="navbar-container container"> 
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        {/* <FaBold className='navbar-icon' />*/}
                        Ryan Brandt
                    </Link>
                    <div className="menu-icon" onClick={handleClick}> 
                        {click ? <FaTimes /> : <FaBars /> }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
                        <li className="nav-item"> 
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li> 
                        <li className="nav-item-drop"> 
                                <div className='nav-drop-con'>
                          
                                    <div className='nav-drop-down'>
                                        <div> 
                                        <Link to='/book-finder' className='nav-drop-down-link' onClick={closeMobileMenu}> Book Finder</Link>
                                        </div>

                                        <div> 
                                            <Link to='/large-scale-image-search' className='nav-drop-down-link' onClick={closeMobileMenu}>
                                            Large Scale Image Similarity Search
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to='/rouge-like-game' className='nav-drop-down-link' onClick={closeMobileMenu}> Rouge-Like Console Game</Link>
                                        
                                        </div>
                                        <div>
                                            <Link to='/crypto-trading-bot' className='nav-drop-down-link' onClick={closeMobileMenu}>Cryptocurrency Trading Bot</Link>
                                        </div>
                                        <div > 
                                            <Link to='/inventory-management-system' className='nav-drop-down-link' onClick={closeMobileMenu}>Inventory/Accounting Management System</Link>
                                            
                                        </div>
                                    </div>
                                    Projects
                                    <BiChevronDown className="nav-icon-down"/>
                                </div>
                             
                        </li> 
                        <li className="nav-item"> 
                            <Link to='/resume' className="nav-links" onClick={closeMobileMenu}>
                                Resume
                            </Link>
                        </li> 
                        <li className="nav-item"> 
                            <Link to='/brandts' className="nav-links" onClick={closeMobileMenu}>
                                Brandts
                            </Link>
                        </li> 
                    
                        <li className="nav-btn">
                            {button ? ( 
                                <Link to="contact" className="btn-link">
                                    <Button buttonStyle='btn--outline'>Contact Me</Button>
                                </Link>
                            ) : ( 
                                <Link to="contact" className="btn-link" onClick={closeMobileMenu}>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>Contact Me</Button>
                                </Link>
                            )
                    
                        }
                        </li>
                    </ul>

                </div>
                
            </nav>
      
    </>
    );
}

export default Navbar;
