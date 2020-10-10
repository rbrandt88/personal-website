
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
            <Document
                file={"RyanBrandtResume.pdf"}
                
                >
                <Page pageNumber={1} width={700} />
            </Document>
            
  
            
        </div>
        </>
    );
}

export default Resume; 