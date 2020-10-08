import React from 'react'


function Projects() {

    return (
        <>
            <h1>Projects</h1>
            <h3>Large Scale Image Similarity Search, Python</h3>
            <p>Given a query image,returns closely matched images 
            Can search 15,000 Amazon book images in ∼1sec
                Technologies: OpenCv,Scikit-Learn,Numpy,Faiss, Flask  
            </p>

            <p></p>

            <p>Online listings are often wrong and weakly labeled. Images are the most accurate representation of the item being sold. In order to catch these listings, 
                an accurate and fast image similarity search program had to be developed. Below is this exact program. Approximatly 15,000 profitable book images are searched in a second. 
                Please feel free to try the sample images or upload an image. The code is available on Github; however the database is not</p>
        </>
    );
}

export default Projects; 