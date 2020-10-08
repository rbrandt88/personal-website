import React from 'react';
import { useEffect } from 'react';
import { Button} from '../Util/Button';
import { Link } from 'react-router-dom';
import {BiChevronDown } from 'react-icons/bi';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaClipboard,
    FaGraduationCap,
    FaLinkedin,
    FaGithub,
    FaRegHandPointLeft,
    FaChartLine,
    FaGamepad
  } from 'react-icons/fa';

import {BsImages, BsSearch} from 'react-icons/bs';
import {GrGamepad} from 'react-icons/gr';
import {RiBarcodeBoxLine} from 'react-icons/ri';
import {GrMail} from 'react-icons/gr';

import './Home.css';

//projeect icons turn from pics to words
//Searches online marketplaces for under-priced books that can be resold on Amazon.
//Text and image data are used to solidify a match in the database
//      Given a query image,returns closely matched images
//   <img className='fun-image' src={require('./Media/IMG_9974.jpeg')}alt="Synth"/>
//<img className='fun-image' src={require('./Media/IMG_9973.jpeg')}alt="Guitar"/>
const Courses = () => (
    <div id="results" className="search-results">
        <div className='courses-container'>
            <div className='courses-list'>
                <ui>
                    <li>Object-oriented Programming <span className='programming-language'>(Java)</span></li>
                    <li>Data Structures <span className='programming-language'>(Java)</span></li>
                    <li>Advanced Programming Techniques <span className='programming-language'>(C, C++)</span></li>
                    <li>Design and Analysis of Algorithms <span className='programming-language'>(Java)</span></li>
                    <li>Operating Systems <span className='programming-language'> (C++)</span></li>
                    <li>Programming for Data Science<span className='programming-language'> (Python, R)</span></li>
                    <li>Probability and Statistics<span className='programming-language'> (R)</span></li>
                    <li>Functional Programming <span className='programming-language'>(Racket)</span></li>
                    <li>Computer Architecture</li>
                    <li>Software Testing  <span className='programming-language'>(Java)</span></li>
                    <li>Software Requirements Engineering</li>
                </ui>
            </div>
        </div>
    </div>
  )

function Home() {
    const [showResults, setShowCourses] = React.useState(false)
    const onCourses = () => showResults ?  setShowCourses(false) : setShowCourses(true);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <div className='home-container'>
                <div className='home-main-image'>
                    <div className='home-main-text'>
                        <h1>Hi, I'm Ryan Brandt</h1>
                        <h4> Software Engineer, Entrepreneur, &amp; Data Science Enthusiast </h4>
                        <Link to="contact" className="btn-link">
                            <Button buttonStyle='btn--outline'>Contact Me</Button>
                        </Link>
                        <div className='social-media-container'>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/rbrandt88' title="Github" > <FaGithub className='social-media-icon-home' /> </a>
                            <a title="Linked In" target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/ryan-brandt-profile/'> <FaLinkedin className='social-media-icon-home' /> </a>
                            <a title="Resume"> <FaClipboard className='social-media-icon-home' /> </a>
                            <a href="mailto:rbrandt@nyit.edu"> <GrMail className='social-media-icon-home'/> </a>
                        </div>
                    </div>
                    
                </div>
               
                <div className='about-me-container'> 
                   
                    <div className='profile-image-container'>
                        <img className='profile-image' src={require('./Media/IMG_3583.jpeg')} alt="Profile Picture"/>
                     
                    </div>
                    <div className = 'about-me-content'> 
                        <div className='about-me-title'>
                            <h1 >About Me </h1>
                        </div>
                        <hr></hr>
                        <div className='about-me-text'>
                            <p> Hi, my name is Ryan Brandt. I am currently attending the New York Institute of Technology where I am getting my masters in data science.  
                                Before this, I attended Iowa State and received my Bachelor’s in Computer Science. Alongside my education, I run an Amazon e-commerce business where I sell used and new books. I source inventory from online marketplaces and vendors and resell them on Amazon for profit. During my time running the company, I created custom software solutions to solve my real-world business problems.These included creating a book finding program, a large-scale image search program, and an inventory and accounting management system. I’ve also worked with a variety of different vendors and partners to expand my operation exponentially each year.  
                                Over the past few years, I have been very fortunate to have two of my passions, programming and entrepreneurship, come together so nicely. I am looking forward to explore new opportunities in the coming future.
                                </p>
                        </div>
                        <hr></hr>
                        <div className='education-and-skills'>
                            <div className= 'skills-container'>
                                    <h2 className= 'skills-title'>Skills</h2>
                                    <div className='skills-content'>
                                        <h3 className='skils-content-text'>Programming Languages</h3>

                                        <p className='school-name'>Python, Javascript, Java, C/C++, SQL</p>

                                        <h3 className='skils-content-text'>Full Stack</h3>
                                        <p className='school-name'> React, HTML, CSS, Flask, Elasticsearch, Postgres SQL</p>
                                        <h3 className='skils-content-text'>Data Science</h3>

                                        <p className='school-name'>Numpy, Pandas, Matplotlib, Scikit-Learn, OpenCv, TenserFlow, Jupyter Lab</p>

                                    </div>
                                </div>
                            <div className='education-container'> 
                                <h2 className='education-title'>Education </h2>
                                <div className='education-container-school'> 
                            
                                    <h4> <FaGraduationCap/> Iowa State University Graduated: Dec 2019 | Ames, IA</h4>
                                    <p className='school-name'>BS in Computer Science</p>
                                </div>
                                <div className='education-container-school'> 
                                    
                                    <h4 > <FaGraduationCap/> New York Institute of Technology Student: Current</h4>
                                    <p className='school-name'>MS in Data Science</p>
                                </div>
                                <div className='courses-dropdown'>
            
                                    <a  className = 'courses-link' onClick={onCourses} >Show Courses <BiChevronDown className="nav-icon-down"/></a>
                                    { showResults ? <Courses /> : null }
                                </div>
                            
                            </div>
                           
                        
                           
                        </div>
                    </div>
                </div>
                
                <div className='projects-background'> 
                    <div className='projects-container'> 
                        <div className='project-container-title'>
                            <h1>Projects</h1>
                            <div className='vertical-line'></div>
                        </div>
                        <div className='project-cards-container'> 
                         
                         
                            <Link to='/book-finder'  className='project-link'> 
                                <div className='project-card project-card-gray'>
                                        <div className='project-icon-con'>
                                            <BsSearch className='project-icon'/>
                                        </div>
                                        <div className='project-text'>
                                            <h2 className='project-title'>Book Finder</h2>
                                            <h5>-Python, JS, HTML,CSS</h5>
                                        </div>
                            
                                   
                                </div>
                            </Link>
                       
                        

                            <Link to='/large-scale-image-search' className='project-link'> 
                                <div className='project-card project-card-gray'>
                                    <div className='project-icon-con'>
                                     <BsImages className='project-icon'/>
                                    </div>
                                    <div className='project-text'>
                                        <h2 className='project-title'>Large Scale Image Similarity Search </h2>
                                     
                                        <h5>-Python</h5>
                                    </div>
                                
                                    
                                </div>
                            </Link>

                            <Link to='/rouge-like-game'  className='project-link'>
                                <div className='project-card project-card-gray'>
                                    <div className='project-icon-con'>
                                    <FaGamepad className='project-icon'/> 
                                    </div>
                                    <div className='project-text'>
                                        <h2>Rouge-like Console Game</h2>
                                        <h5>-C/C++</h5>
                                    </div>
                                    
                                </div>
                            </Link>
                 
                            <Link to='/crypto-trading-bot' className='project-link'>
                                <div className='project-card project-card-gray'>
                                    <div className='project-icon-con'>
                                        <FaChartLine className='project-icon'/> 
                                    </div>
                                    <div className='project-text'>
                                        <h2 className='project-title'>Cryptocurrency Trading Bot</h2>
                                        <h5>-Python</h5>
                                    </div>
                                    
                                </div>
                            </Link>
                            <Link to='/inventory-management-system'  className='project-link'>
                                <div className='project-card project-card-gray'>
                                    <div className='project-icon-con'>
                                        <RiBarcodeBoxLine className='project-icon'/>
                                    </div>
                                    <div className='project-text'>
                                        <h2 className='project-title'>Inventory/ Accounting Management System</h2>
                                        <h5>-Python, SQL</h5>
                                    </div>
                                
                                </div>
                            </Link>
                        </div>
            
                    </div>
                </div>
                <div className='entrepreneur-background'>
                    <div className='entrepreneur-container'> 
                        <div className='entrepreneur-title'>
                            <h1>Entrepreneurial Experience</h1>
                        </div>
                        <div className= 'entrepreneur-content'>
                            <h2>Brandts</h2>
                            <h4>August 2017 - Present </h4>
                            <h4>Sales To Date: <span className='sales-value'> $3</span></h4>
                            <hr></hr>
                            <div className='entrepeneur-description'>
                                <p>Amazon e-commerce business that sells used/new books. 
                                    Inventory is sourced from online marketplaces and vendors and resold on Amazon for profit.</p>
                            </div>
                            <div className='entrepeneur-list'>
                               
                                <ul>
                                    <li className='enrepeneur-list-el'>
                                    Running and growing my Amazon e-commerce business that sells used/new
                                        books. Inventory is sourced from online marketplaces and vendors and resold
                                        on Amazon for profit
                                    </li>
                                    <li className='enrepeneur-list-el'>Eliminated hundreds of manual searching hours by developing a book finding
                                            program that searches online marketplaces
                                    </li>
                                    <li className='enrepeneur-list-el'>
                                        Increased book finding accuracy by adding image recognition to identify listings
                                        with weak textual data
                                    </li>
                                    <li className='enrepeneur-list-el'>Negotiated and closed multiple vendor deals that resulted in over $100,000 in
                                        sales in the last two years

                                    </li>
                                    <li className='enrepeneur-list-el'>Formed strategic partnerships with other Amazon sellers to work around
                                        selling restrictions

                                    </li>
                                    <li className='enrepeneur-list-el'>
                                        Maintained a 93% positive rating through a customer first approach
                                    </li>
                                    <li className='enrepeneur-list-el'>
                                        Created an end to end inventory/accounting management system
                                    </li>
                                    <li className='enrepeneur-list-el'>
                                        Data mined inventory/accounting data to optimize buying times and
                                        marketplace profitability
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fun-background'>
                    <div className='fun-container'> 
                        <div className='fun-title'>
                            <h1>Hobbies and Interests</h1>
                        </div>
                        <div className= 'fun-list'>
                            <img className='fun-image' src={require('./Media/WordCloudIntrests.png')}alt="Cloud"/>
                         
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home; 