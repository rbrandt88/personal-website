import React from 'react';
import { useEffect } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import {GrMail} from 'react-icons/gr';


import {
  
    FaClipboard,

    FaLinkedin,
    FaGithub,
  
  } from 'react-icons/fa';



function Contact(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <div className='contact-container'>

            <h1>Contact</h1>
            <div className='contact-con-text-q'>
            <p>Thank you for your interest. I am looking forward to new opportunities! Please contact me </p>
            </div>
            <hr></hr>
            <div className='contact-content'>
                
                <div className='contact-content-in'>
                    <div>
                    <h2>Location</h2>
                    <p>New York, NY</p>
                    </div>
                    
                    <div>
                    <h2>Email</h2>
                    <p><a href="mailto:rbrandt@nyit.edu">rbrandt@nyit.edu</a></p>
                    </div>

                    <div>
                        <h2>Phone</h2>
                        <p>630-464-5188</p>
                    </div>
                 
                
                    <div>
                        <h2>Links</h2>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/rbrandt88' title="Github" > <FaGithub className='social-media-icon-home' /> </a>
                            <a title="Linked In" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ryan-brandt-profile/'> <FaLinkedin className='social-media-icon-home' /> </a>
                            <Link className= 'no-decoration' to='/resume'> <a title="Resume"> <FaClipboard className='social-media-icon-home' /> </a> </Link>
                            <a href="mailto:rbrandt@nyit.edu"> <GrMail className='social-media-icon-home'/> </a>
                        </div>
                    </div>
                </div>
                    <div className='contact-img-con'>
                        <img className='contact-img' src={require('./Media/keyboardMouse.jpg')} alt="example"></img>
                    </div>
                
            </div>
            
    
        </div>
    </>

    );
}

export default Contact;
