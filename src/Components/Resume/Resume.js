
import React from 'react'
import { useEffect } from 'react';
import './Resume.css';



function Resume() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>    

        <div className='pdf-container'>
       
            <iframe src="https://docs.google.com/viewer?srcid=12nJYXBP2xZz3HEgv3sAKfLmrcWvRzeTQ&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="650px" height="100%"></iframe>
            
            
      

            
           { /*<Document
                file={"RyanBrandtResume.pdf"}
         <iframe src="https://drive.google.com/file/d/12nJYXBP2xZz3HEgv3sAKfLmrcWvRzeTQ/view?usp=sharing" frameborder="0"></iframe>
                <img className='resume-img' src='Resume.png' alt="Resume"></img>
                >
                <Page pageNumber={1} width={600} />
            </Document>*/
           }
  
            
        </div>
        </>
    );
}

export default Resume; 