import React from 'react'
import { useEffect } from 'react';
import './BookFinder.css';
import { Link } from 'react-router-dom';


function BookFinder() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <>
            <div className='book-finder-container'>
                <h1>Book Finder</h1>
                <h3 className='project-tech-text'>Python</h3>
             
                <p><h4 className='project-brief'>Technologies: </h4> <span className='project-tech-text'> Elasticsearch, OpenCV, Pytest, Flask, Numpy, Pandas, Beautiful-Soup, Selenium</span></p>
                <p><h4 className='project-brief'>Brief: </h4>Searches online marketplaces for under priced books that can be resold on Amazon. Text and image data are used to solidify a match in the database. Candidates for purchase are sent to me via text message</p>
               
            
                <hr></hr>
                <h2>Key Learning Objectives</h2>
                <ul>
                    <li>Elasticsearch (NoSQL)</li>
                    <li>Web scraping with Beautiful Soup and Selenium</li>
                    <li>Flask and Twillio for text messages</li>
                    <li>Maintainability with Pytest unit tests</li>
                    <li>Computer Vision techniques (RANSAC, SIFT, Filtering) </li> 
                 
                </ul>
                <hr></hr>
                <h2>Problem Statement</h2> 
                <p> Finding underpriced books online takes a long time. Each listing has to be looked up one by one manually. This process is horribly inefficient. In additionto this, listings are often weakly labeled, e.g. Image 1. 
                    The program must be able to deal with this and solidify accurate matches with whatever available data.
                </p>
                <img className='example-image' src={require('./Media/online_example.png')} alt="example"></img>
                <p>Image 1: Weakly labeled listings</p>
                <hr></hr>
                <h2>Data Description</h2>
                <p>The book dataset was collected by scraping Amazon. Around 15,000 books were found to reach my specific reselling criteria.
                    In order to keep the database up to date, Amazon is scraped monthly and a set of tests are run with pytest to ensure the data is uniform.
                </p>
                <hr></hr>
                <h2>Technical Overview</h2>
                <p> Text and image data are scraped asyncrinously from websites using asyncio and beautiful soup. 
                    If the text data is deemed too weak, the image is queried using <Link to='/large-scale-image-search'> Large Scale Image Similarity Search</Link>. 
                    Otherwise, the text is searched in elasticsearch.
                    In both cases, the list of candidates are reranked by image similarity using computer vision techniques(SIFT,RANSAC). 
                    If the top match satifies the threshold for similarity, the listing is sent to me via text message. 
                    
                    To ensure web scraping accuracy, I frequenly run tests with pytest. 
                     </p>
                <hr></hr>
                <h2>Impact</h2>
                <p> This program is at the core of my business and is responsible for hundreds of thousands in sales.
                    I am able to save hours of searching time and focus on other aspects of my business.
                    
                    </p>
                <hr></hr>
                <h2>Future Improvements</h2>
                <p>Every now and then, a false positive is sent to me. These are usually old editions matching to a new ones. 
                    Because of this, I still have to manually check the listings before buying. 
                    In addition, this program struggles with multiple books in one image. This can be improved in the future. </p>
                    

            </div>
        </>
    );
}

export default BookFinder; 