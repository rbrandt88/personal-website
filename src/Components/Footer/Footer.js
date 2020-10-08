import React from 'react';
import './Footer.css';
import { Button} from '../Util/Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaRegHandPointLeft,
  FaClipboard
} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';

function Footer(){
    return (
        <div className='footer-background'>
            <div className='footer-container'>
                 <div className='footer-container-contact'>
                    <p className='footer-title'>What are you waiting for?</p>
                
                    <Link to="contact" className="footer-link">
                           <p className='footer-contact'>Contact Me</p>
                    </Link>
                    
                </div>
        
                <div>
                    <p className='footer-title'> Main Links</p>
                    <ul>
                        <Link to="/" className="footer-link" >
                        <li>Home</li>
                        </Link>
                        <Link to="brandts" className="footer-link">
                        <li>Brandts</li>
                        </Link>
                        <Link to="contact" className="footer-link">
                        <li>Contact</li>
                        </Link>
                        <Link to="sign-in" className="footer-link">
                        <li>Sign In</li>
                        </Link>
                    </ul>

                </div>
                <div>
                    <p className='footer-title'> Project Links</p>
                    <ul>
                        <Link to="book-finder"  className="footer-link">
                        <li>Book Finder</li>
                        </Link>
                        <Link to="large-scale-image-search"  className="footer-link">
                        <li>Large Scale Image Similarity Search</li>
                        </Link>
                        <Link to="rouge-like-game"  className="footer-link">
                        <li>Rouge-like Console Game</li>
                        </Link>
                        <Link to="crypto-trading-bot"  className="footer-link">
                        <li>Cryptocurrency Trading Bot</li>
                        </Link>
                        <Link to="inventory-management-system"  className="footer-link">
                        <li>Inventory Management System</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    <p className='footer-title'>Other Links</p>
                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/rbrandt88' title="Github" > <FaGithub className='social-media-icon-footer' /> </a>
                    <a title="Linked In" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ryan-brandt-profile/'> <FaLinkedin className='social-media-icon-footer' /> </a>
                    <a title="Resume"> <FaClipboard className='social-media-icon-footer' /> </a>
                    <a href="mailto:rbrandt@nyit.edu"> <GrMail className='social-media-icon-footer'/> </a>
                </div>
        
            
            </div>
                <div className='footer-bottom'>
                    <hr></hr>
                    <div className='footer-desc'>
                    <p>This website was created with React, HTML, and CSS</p>
                </div>
            </div>
       
        </div>

    
    )
}

export default Footer;

