import React, { useState, useEffect, useReducer} from "react";

import './LargeScaleImageSearch.css';
import { Button} from '../../Util/Button';

import {
    FaGithub,
    FaQuestionCircle
  } from 'react-icons/fa';

import axios from 'axios';
import { SyncLoader} from 'react-spinners';

//Used some code from: https://github.com/the-road-to-learn-react/react-hooks-introduction/blob/master/src/useDataApiHook-example/index.js
//<img className='query-image' src={require('./Media/worldofart.jpg')}alt="World Of Art"/>
                
                
//<img className='query-image' src={require('./Media/bioh1.jpg')} alt="Human Biology"/>


//img className='query-image' src={require('./Media/chemspp.jpg')} alt="Chemistry"/>

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false,  showImage: false };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        showImage: true,
        data: action.payload[0],
        totalTime: action.payload[1],
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
        showImage: false
      };
    default:
      throw new Error();
  }
};

const useDataApi = (initialUrl, initialData, inicialDataToSend) => {
  const [url, setUrl] = useState(initialUrl);
const [dataToSend, setData] = useState(inicialDataToSend);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    showImage: false,
    data: initialData,
    request_time : 0,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        var start_time = new Date().getTime();
        console.log(dataToSend)
        console.log('Request')
        const result = await axios.post(url, {'image' : String(dataToSend)});
        //const result = await axios(url);
        var request_time = new Date().getTime() - start_time;

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: [result.data , request_time / 1000] });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url,dataToSend]);

  return [state, setUrl, setData];
};



function LargeScaleImageSearch() {
    const apiEndPoint = 'http://5eb4e057339a.ngrok.io/api/query';
    //const apiEndPoint =    'http://localhost:5000/api/query'
    const defaultImage = 'https://images-na.ssl-images-amazon.com/images/I/41JaGePfE3L._SX412_BO1,204,203,200_.jpg';

    const query1 = 'https://di2ponv0v5otw.cloudfront.net/posts/2019/01/01/5c2c5c5b3c98449c1098bfd5/m_5c2c5c651b3294a74539e66c.jpg';
    const query2 = 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/106021025_2580238942238639_8330172672987393434_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=oi5TCLj-HVAAX-p_EMG&_nc_ht=scontent-lga3-2.xx&oh=a1feaffabde66f80ad747bacf04fe161&oe=5FA1E9F0';
    const query3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqt5Y59Z2673zPWt8CDtgFdlNEENMcSIFIiQ&usqp=CAU';
    const query4 = 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/100589078_1368645930005065_5317309640050999296_n.jpg?_nc_cat=107&_nc_sid=843cd7&_nc_ohc=95QIMhIfqiwAX-ahORR&_nc_ht=scontent-lga3-2.xx&oh=8c98defc0800b7aabe5f612d9ac213d7&oe=5F9FBE10';

    const [imq, setImq] = useState(defaultImage,);
    const [dataToSend, setData] = useState(defaultImage,);
    const [query, setQuery] = useState('redux');

    
    const [{ data, isLoading, isError, showImage, totalTime}, doFetch, theData] = useDataApi(
        apiEndPoint, 
        
        { images: [] }, dataToSend,
    );
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>  
            <div className='large-scale-container'>
                <div className='query-part'>
                    <div className='query-intro'>
                    <h1>Large Scale Image Similarity Search  <a target="_blank" rel="noopener noreferrer" href='https://github.com/rbrandt88/large-scale-image-similarity-search'> <FaGithub className='social-media-icon-home' /> </a></h1>

                    <h3 className='project-tech-text' >Python, Javascript (React), HTML, CSS</h3>
                    <p><h4 className='project-brief'>Technologies:</h4> <span className='project-tech-text'>OpenCv, Scikit-Learn, Numpy, Faiss, Flask</span></p>
                    <p><h4 className='project-brief'>Brief: </h4> Search by image and return closely matched images. Can search 15,000 Amazon book images in 1-2 sec.</p>
                    <hr></hr>
                
                    </div>
                    <div className='query-part-inner'>
                        <h2>Query</h2>
                        <div className='query-images-con'>
                            <img className='query-image' src={query1} alt="Biology" onClick={event => {

                                //setData('/Users/ryanbrandt/Desktop/Website React Hooks/brandt-dev/src/Components/Projects/LargeScaleImageSearch/Media/campr2.jpg',);
                                theData(query1);
                                setImq(query1);
                                doFetch(
                                    apiEndPoint,
                                );
                                    event.preventDefault();
                                    console.log('Click')
                                }}
                        />
                            
                            <img className='query-image' src={query2} alt="Chemistry"
                                onClick={event => {
                                    //setData('/Users/ryanbrandt/Desktop/Website React Hooks/brandt-dev/src/Components/Projects/LargeScaleImageSearch/Media/chemcen.jpg');
                                    theData(query2);
                                    doFetch(
                                    apiEndPoint,
                                );
                                    setImq(query2);
                                    event.preventDefault();
                                    console.log('Click')
                                }}
                            />
                            <img className='query-image' src={query3}alt="Art"
                                onClick={event => {
                                    setImq(query3);
                                    //setData('/Users/ryanbrandt/Desktop/Website React Hooks/brandt-dev/src/Components/Projects/LargeScaleImageSearch/Media/chemcen.jpg');
                                    theData(query3);
                           
                                    doFetch(
                                    apiEndPoint,
                                );
                                    event.preventDefault();
                                    console.log('Click')
                                }}
                            /> 
                          
                            <img className='query-image' src={query4}alt="Chem"
                                onClick={event => { 
                                    //setData('/Users/ryanbrandt/Desktop/Website React Hooks/brandt-dev/src/Components/Projects/LargeScaleImageSearch/Media/chemcen.jpg');
                                    theData(query4);
                            
                                    setImq(query4);
                                    doFetch(
                                    apiEndPoint,
                                );
                                    event.preventDefault();
                                    console.log('Click')
                                }}
                            /> 
                    
                        
                        </div>
                        <div className='query-box'>
                
                            <form onSubmit={event => {
                  
                                setImq(query);
                             
                                theData(query);
                                doFetch(
                                  apiEndPoint,
                                );
                                    event.preventDefault();
                                    console.log("Query: " + query);
                                    console.log("DataToSend: " + dataToSend);
                                   
                                    //event.preventDefault();
                                }}
                            
                            >
                                <input
                                type="text"
                                //value={query}
                                placeholder = 'Click a sample image or paste in a image URL of your own!'
                                //placeholder = 'Example: https://images-na.ssl-images-amazon.com/images/I/41JaGePfE3L._SX412_BO1,204,203,200_.jpg'
                                onChange={event => setQuery(event.target.value)}
                                className='query-input'
                                />
                                <Button buttonStyle='btn--outline'>Search</Button>
                            
                            </form> 
                  
 
                        <p> <span><FaQuestionCircle/></span> Tip: If you choose to paste an image url, find an expensive textbook on Amazon. Chances are it's in my dataset!</p>
                        
                
                    </div>
                    </div> 
                </div>
                    <div className='show-query-con'>
                        
                        {showImage ? (<div>
                            <h2>Query Image:</h2>
                            
                            {console.log(data)}
                            <img className='result-image' src={imq} alt='Query'/>
                            <p>Seconds: {totalTime}</p>
                            
                            </div>) : 
                            (<div></div>)}
                            <hr></hr>
                    </div>
                    <div className='results-con'>
           
                    <div className='results'> 
                        
                        {isError && <div className='big-error'>Something went wrong ... Please check your input.</div>}
                        
                   
                        {isLoading ? (
                        <div className='loading-con'> <SyncLoader

                        
                        size={20}
                        /> </div>
                        ) : (!isError &&
                            <div><h2>Results:</h2>
                        
                            <div className='the-results'>
                             
                                
                            { data.images.length > 0 ? (data.images.map((item, index)=> (
                             
                                <img className='result-image' src={item} alt = {index} key={index}/>
                                
                           
                            ))) : (<div><p>No Relevent Results</p></div>)
                        }
                            </div>
                            </div>
                        )}
                        </div>
            
                </div>
                <div className='large-scale-content'>
                <hr></hr>
                
                <h2>Key Learning Objectives</h2>
                <ul>
                    <li>Computer Vision techniques with OpenCV (SIFT, RANSAC, Filtering, VLAD)</li>
                    <li>Machine Learning techniques with Scikit-Learn (K-Means, KNN, ANN, PCA)</li>
                    <li>API developement</li>
                    <li>Front end design with React, HTML, CSS</li>
                    <li>Implementing research papers</li>
                
                </ul>
                <hr></hr>
                <h2>Problem Statement</h2>
                <p>In this project, I addressed the problem of searching for similar images in a large data set. 
                    The program had to be scale and rotation invariant and perform well with noise and weak lighting.  
                    Also it had to perform on a 5-year old computer with 16GB of RAM.  </p>
                <hr></hr>
                <h2>Data Description</h2>
                <p> The book image dataset was collected by scraping Amazon. Around 15,000 books were found to reach my specific reselling criteria. The resulting dataset was then cleaned and bad images were removed. 
                </p>
                <hr></hr>

                <h2>Technical Overview</h2>
                <p> Without any prior knowledge of computer vision or machine learning, this project posed a challange. Through a few weeks of research, I finally gained the knowledge to build this system.
                Images are resized and ran through OpenCV's Detect and Compute. Keypoints and Descriptors (SIFT) are then saved (pickled) for future use.
                PCA is on the sift descriptors is used to reduce the dimentionality of the vector to 64 dimentions.
                
                The new vectors are fit into minibatch kmeans where a suggested 128 clusters are used.
                The descriptors are again run through the VLAD creation process to produce a single global descriptor for the image.
                In order to reduce the memory footprint, PCA is used. The VLAD descriptors can be reduced to 128 dimensions with PCA without much loss of accuracy;however, it is not recommended if you want the greatest accuracy.
                The resulting VLADs are stored in Facebook's Faiss for fast approximate nearest neighbor search.
                At run time, the query image is run through the same processing and queried in Faiss.   
                Similar images are returned and run through one last accuracy ranking. For this, KNN and RANSAC are used.
                The final most-similar images are returned. The query process takes around 1 second. 
                The back end REST API was created with Flask and the front end was created with React. The program will perform exceptionally well on CD covers, DVD covers, paintings, book covers and other partial duplicate images.
                Data sets that require detailed detection will perform worse, e.g face detection.
                </p>
           
                <hr></hr>
                <h2>Impact</h2>
                <p>Images are the strongest representation of an online listing. So it was critical to have a way to look up an image when the text data was weak. 
                    This program in conjunction with my Book Finder program are the core of my business and are responsible for hundreds of thousands of dollars in sales. </p>
                <hr></hr>
                <h2>Future Improvements</h2>
                <p>This implemenation does not use deep learning. It only uses Computer Vision and Machine Learning Techniques. Although not state of the art, it performs sufficient enough for my data.
                With foreground extraction, we can denoise the image and focus only on the book because background noise can significantly hurt its accuracy.
                In the future, I plan to use a pretrained Convolutional Nural Network (MobileNet v2) and finetune it for my dataset. PCA has been shown to reduce dimensions to 64 without much loss in accuracy. 
                    With greater accuracy and smaller memory footprint, this seems like the next way to go. The method could even be light enough to match images on the phone with Tenserflow Lite! </p>
                <hr></hr>
                <h2>Research Papers</h2>
                <ul>
                    <li><a href='https://www.robots.ox.ac.uk/~vgg/publications/2013/arandjelovic13/arandjelovic13.pdf'>All About VLAD</a> </li>
                    <li> <a href= 'https://hal.inria.fr/hal-00840653v1/document'> Revisiting the VLAD image representation</a></li>
                    <li> <a href= 'https://hal.inria.fr/inria-00514760/document'> Improving bag-of-features for large scale image search </a> </li>
                    <li> <a href='https://ieeexplore.ieee.org/abstract/document/8733051'> Billion-scale similarity search with GPUs (about Faiss) </a></li>
                
                </ul>
                
                </div>
            </div>
        </>
    );
} 

export default LargeScaleImageSearch; 