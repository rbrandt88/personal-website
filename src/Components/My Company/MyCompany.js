import React from 'react';
import { useEffect } from 'react';
import { FaBook, FaSearchDollar, FaTruck,FaUmbrellaBeach} from 'react-icons/fa';
import './MyCompany.css';
import { Link } from 'react-router-dom';
import {RiBarcodeBoxLine} from 'react-icons/ri';
import {BsImages, BsSearch} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';
function MyCompany() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
        <div className='my-company-background'>
            <div className='image-company-con'>
                <div className='image-title-con'>
                     <div> <h1 className='company-title'>Brandts</h1> <h4 className='title-inline'>On </h4> </div>
                    <div className='title-and-logo-con'>
                    <img className='amz-logo' src={require('./Media/Amazon_logo.png')} alt="example"></img> 
                    </div>
                    <h4 className='title-sales'> Sales to Date: <span className='company-alt-color'>$4</span></h4>
                </div>
            </div>
            <div className="my-company">
                <div className='my-company-center'>
                    <p className= 'intro'> Brandts is an Amazon e-commerce business that sells used and new books. 
                                Inventory is sourced from online marketplaces and vendors and resold on Amazon for profit. </p>
              
                </div>
                <hr></hr>
                <div>
                    <p className='my-company-title-a'>Passive Income Business Model</p>
                    <div className='cards-container'> 
                            
                            <div className='icon-description-card'>
                                <FaSearchDollar className='r-icon' />
                                <p className='my-company-title-a'>Buy</p>
                                <p className= 'description'>Purchase underpriced books online</p>
                            </div> 
                         
                            <div className='icon-description-card'>
                                <FaTruck className='r-icon' />
                                <p className='my-company-title-a'>Ship</p>
                                <p className= 'description'>Inventory the items and ship them in bulk to Amazon's warehouse</p>
                            </div>
                           
                            <div className='icon-description-card'>
                                <FaUmbrellaBeach className='r-icon'/>
                                <p className='my-company-title-a'>Relax</p>
                                <p className= 'description'>Let <a  target="_blank" rel="noopener noreferrer" href='https://sell.amazon.com/start.html?ld=SEUSSOAGOOG-B12118-D&tag=googhydr-20&hvadid=438282287465&hvpos=&hvexid=&hvnetw=g&hvrand=15269178234941666529&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9004331&hvtargid=kwd-317927384615&ref=pd_sl_5tfx8zcurq_e'> Amazon FBA </a>
                                    take care of storage, shipping, and returns 
                                </p>
                            </div> 

                        </div>
                </div>
                <hr></hr>
                <div className='my-company-intro-con'>
                    <div className='my-company-intro-inner'>


                    
                    <p className='my-company-title-a'>Who we are</p>
                    <p>Brandts is guided by four principles: customer obsession, authenticity, commitment to operational excellence, and insist on the highest standards. 
                        These priciples are inherited from Amazon and relect our everyday work. </p>
                
                    <p className='my-company-title-a'>Everyday Activities</p>
                    <ul>
                        <li>Buy product</li>
                        <li>Work with vendors and partners </li>
                        <li>Maintain software solutions</li>
                        <li>Authenticate</li>
                        <li>List products on Amazon</li>
                        <li>Ship inventory in bulk to Amazon</li>
                        <li>Reprice inventory</li>
                        <li>Explore new sourcing outlets</li>
                    </ul>
                    
             
            
                    </div>
                    <div className='my-company-book-img-con'>
                        <img className='book-stack-img' src={require('./Media/bookStack.png')} alt="example"></img>
                    
                    </div>
                   
                </div>
                <hr></hr>
                <p className='my-company-title-a'>Software Solutions</p>
                <p className='my-company-desc'>Custom software solutions give Brandts a competative advantage and optimize operational management</p>
                <div className='software-solutions'>

                            <Link to='/book-finder'  className='project-link'> 
                                <div className='project-card project-card-gray'>
                             
                                        <BsSearch className='project-icon'/>
                                        <div className='project-text'>
                                            <p className='my-company-title-a'>Book Finder</p>
                                         
                       
                                        </div>
                            
                                   
                                </div>
                            </Link>
                       
                        

                            <Link to='/large-scale-image-search' className='project-link'> 
                                <div className='project-card project-card-gray'>
                                    <BsImages className='project-icon'/>
                                    <div className='project-text'>
                                        <p className='my-company-title-a'>Large Scale Image Similarity Search</p>
                                       
                             
                                    </div>
                                
                                    
                                </div>
                            </Link>
                            <Link to='/inventory-management-system'  className='project-link'>
                                <div className='project-card project-card-gray'>
                                    <RiBarcodeBoxLine className='project-icon'/>
                                    <div className='project-text'>
                                        <p className='my-company-title-a'>Inventory/ Accounting Management System</p>
                                    
                                    </div>
                                
                                </div>
                            </Link>
                 
                  
                </div>
                <hr></hr>
                <div className='personal-accom'>
                    <p className='my-company-title-a'>Personal Accomplishments</p>
                        <ul>
                            <li>Sales Value</li>
                            <li>Eliminated hundreds of manual searching hours by developing a book finding
                                    program that searches online marketplaces
                            </li>
                            <li>
                                Increased book finding accuracy by adding image recognition to identify listings
                                with weak textual data
                            </li>
                            <li>Negotiated and closed multiple vendor deals that resulted in over $100,000 in
                                sales in the last two years

                            </li>
                            <li>Formed strategic partnerships with other Amazon sellers to work around
                                selling restrictions

                            </li>
                            <li>
                                Maintained a 93% positive rating through a customer first approach
                            </li>
                            <li>
                                Created an end to end inventory/accounting management system
                            </li>
                            <li>
                                Data mined inventory/accounting data to optimize buying times and
                                marketplace profitability
                            </li>
                        </ul>
                </div>
                 
                <hr></hr>
                <div className='images-books-con'>
                <p className='my-company-title-a'>Books Books Books</p>
                
                <img className='book-image' src={require('./Media/Screen Shot 2020-10-03 at 10.40.02 PM.png')} alt="example"></img>
                <img className='book-image' src={require('./Media/Screen Shot 2020-10-03 at 10.42.32 PM.png')} alt="example"></img>
                <img className='book-image' src={require('./Media/lots_of_Books.png')} alt="example"></img>
                
                {/*<img className='book-image' src={require('./Media/IMG_2779.jpeg')} alt="example"></img>*/}
             

                </div>
            </div>
               
           
             
             
               
                
               
                
     
                {
                    /*
                          <img className='book-image' src={require('./Media/52877410559__BCAD72EE-9107-4080-8FAE-E6BF17563AE0.JPG')} alt="example"></img>
                <h2>History</h2>
                <p>In my quest to create passive income, I tried many strategies.  </p>
                <p>Since high school, I always had ventured to thrift stores in search of resellable items. It wasn't until college where I discovered textbooks. 
                    After selling some of my own textbooks, I realized I could flip my friends old books for profit. They gave them to me for cheap and the magins were good (Much better than thrift store finds). 
                    When my friends ran out of books, I looked for more ways of sourcing. I started asking friends of friends and would hussle through word of mouth.
                    Then one day, a friend told me about facebook marketplace. Jackpot. Many students were getting rid of books for cheap. 
                    On top of classes, I hussled for a year straight, messaging students and picking up books everyday. I shipped the books to Amazon's warehouse and they took care of all the logistics (storag, shipping, returns). 
                    Amazon's FBA program was the reason I could sell larg volumes of books without single handedly packing and shipping them. Most of my time was spent sourcing.
                     Essentially, I noticed that messaging and meeting people was an inefficient use of my time. 
                     Although, I hired friends as help, I needed to find a way to have the books come to me, without such laborious efforts. I ventured to other online marketplaces and developed a plan to create a program that could do the finding for me. 
                    I spent a few weeks learning python and web scraping. My first bot wasn't too accurate, but none the less, increased my business. 
                    Throughout buying and selling, I found more ways to source. I made relations with used book vendors and increased my bots reach. Quickly, I sought for more ways to improve the process.
                     I made a software solution for each of my problems (Sourcing, Inventory, Accounting). One note worthy improvement was when I introduced image recognition in with my bot.
                     Knnowing nothing about computer vision or machine learning, I spent weeks researching this specific problem. I eventually successfully incorporated it and my amount of inventory tripled. 
                     2018 sales were around $200,000 and 2019 was $300,000. Every moement I wasn't studying, I worked on my business. As of today, I still operate my business on the side. Mostly every aspect of it is automated. 
                     Sorcing is taken care of through my program, I send the inventory to Amazon's warehouse, and they take care of the logistics when it sells.
                      Time to time, I try new ways to make money, e.g crypto currency bot; however none have been as easy and lucrative as my Amazon bussiness.  
                       </p>
                       <p>Thank you for reading! Contact Me</p>
*/
                }
     
         
            </div>

            
        </>
    );
}

export default MyCompany; 