
import React from 'react'
import { useEffect } from 'react';
import './Resume.css';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>    
   
        <div className='pdf-container'>
            
            <embed src="RyanBrandtResume.pdf" width="800px" height="1200px" />
           { /*<Document
                file={"RyanBrandtResume.pdf"}
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