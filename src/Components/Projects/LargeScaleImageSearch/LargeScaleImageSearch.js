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
    const [imq, setImq] = useState('https://images-na.ssl-images-amazon.com/images/I/41JaGePfE3L._SX412_BO1,204,203,200_.jpg',);
    const [dataToSend, setData] = useState('https://images-na.ssl-images-amazon.com/images/I/41JaGePfE3L._SX412_BO1,204,203,200_.jpg',);
    const [query, setQuery] = useState('redux');

    const [{ data, isLoading, isError, showImage, totalTime}, doFetch, theData] = useDataApi(
        'http://localhost:5000/api/query', 
        
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
                    <h1>Large Scale Image Similarity Search  <a target="_blank" rel="noopener noreferrer" href='https://github.com/rbrandt88'> <FaGithub className='social-media-icon-home' /> </a></h1>

                    <h3 className='project-tech-text' >Python, Javascript (React), HTML, CSS</h3>
                    <p><h4 className='project-brief'>Technologies:</h4> <span className='project-tech-text'>OpenCv, Scikit-Learn, Numpy, Faiss, Flask</span></p>
                    <p><h4 className='project-brief'>Brief: </h4> Search by image and return closely matched images. Can search 15,000 Amazon book images in 1-2 sec.</p>
                    <hr></hr>
                
                    </div>
                    <div className='query-part-inner'>
                        <h2>Query</h2>
                        <div className='query-images-con'>
                            <img className='query-image' src={'https://di2ponv0v5otw.cloudfront.net/posts/2019/01/01/5c2c5c5b3c98449c1098bfd5/m_5c2c5c651b3294a74539e66c.jpg'} alt="Biology" onClick={event => {

                                //setData('/Users/ryanbrandt/Desktop/Website React Hooks/brandt-dev/src/Components/Projects/LargeScaleImageSearch/Media/campr2.jpg',);
                                theData('https://di2ponv0v5otw.cloudfront.net/posts/2019/01/01/5c2c5c5b3c98449c1098bfd5/m_5c2c5c651b3294a74539e66c.jpg');
                                setImq('https://di2ponv0v5otw.cloudfront.net/posts/2019/01/01/5c2c5c5b3c98449c1098bfd5/m_5c2c5c651b3294a74539e66c.jpg')
                                doFetch(
                                    'http://localhost:5000/api/query',
                                );
                                    event.preventDefault();
                                    console.log('Click')
                                }}
                        />
                            
                            <img className='query-image' src='https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/106021025_2580238942238639_8330172672987393434_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=oi5TCLj-HVAAX-p_EMG&_nc_ht=scontent-lga3-2.xx&oh=a1feaffabde66f80ad747bacf04fe161&oe=5FA1E9F0' alt="Chemistry"
                                onClick={event => {
                                    //setData('/Users/ryanbrandt/Desktop/Website React Hooks/brandt-dev/src/Components/Projects/LargeScaleImageSearch/Media/chemcen.jpg');
                                    theData('https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/106021025_2580238942238639_8330172672987393434_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=oi5TCLj-HVAAX-p_EMG&_nc_ht=scontent-lga3-2.xx&oh=a1feaffabde66f80ad747bacf04fe161&oe=5FA1E9F0')
                                    doFetch(
                                    'http://localhost:5000/api/query',
                                );
                                    setImq('https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/106021025_2580238942238639_8330172672987393434_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=oi5TCLj-HVAAX-p_EMG&_nc_ht=scontent-lga3-2.xx&oh=a1feaffabde66f80ad747bacf04fe161&oe=5FA1E9F0');
                                    event.preventDefault();
                                    console.log('Click')
                                }}
                            />
                            <img className='query-image' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqt5Y59Z2673zPWt8CDtgFdlNEENMcSIFIiQ&usqp=CAU'}alt="Art"
                                onClick={event => {
                                    setImq('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqt5Y59Z2673zPWt8CDtgFdlNEENMcSIFIiQ&usqp=CAU')
                                    //setData('/Users/ryanbrandt/Desktop/Website React Hooks/brandt-dev/src/Components/Projects/LargeScaleImageSearch/Media/chemcen.jpg');
                                    theData('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqt5Y59Z2673zPWt8CDtgFdlNEENMcSIFIiQ&usqp=CAU')
                                    doFetch(
                                    'http://localhost:5000/api/query',
                                );
                                    event.preventDefault();
                                    console.log('Click')
                                }}
                            /> 
                          
                            <img className='query-image' src={'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/100589078_1368645930005065_5317309640050999296_n.jpg?_nc_cat=107&_nc_sid=843cd7&_nc_ohc=95QIMhIfqiwAX-ahORR&_nc_ht=scontent-lga3-2.xx&oh=8c98defc0800b7aabe5f612d9ac213d7&oe=5F9FBE10'}alt="Chem"
                                onClick={event => { 
                                    //setData('/Users/ryanbrandt/Desktop/Website React Hooks/brandt-dev/src/Components/Projects/LargeScaleImageSearch/Media/chemcen.jpg');
                                    theData('https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/100589078_1368645930005065_5317309640050999296_n.jpg?_nc_cat=107&_nc_sid=843cd7&_nc_ohc=95QIMhIfqiwAX-ahORR&_nc_ht=scontent-lga3-2.xx&oh=8c98defc0800b7aabe5f612d9ac213d7&oe=5F9FBE10')
                                    setImq('https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/100589078_1368645930005065_5317309640050999296_n.jpg?_nc_cat=107&_nc_sid=843cd7&_nc_ohc=95QIMhIfqiwAX-ahORR&_nc_ht=scontent-lga3-2.xx&oh=8c98defc0800b7aabe5f612d9ac213d7&oe=5F9FBE10')
                                    doFetch(
                                    'http://localhost:5000/api/query',
                                );
                                    event.preventDefault();
                                    console.log('Click')
                                }}
                            /> 
                    
                        
                        </div>
                        <div className='query-box'>
                
                            <form onSubmit={event => {
                  
                                setImq(query,);
                             
                                theData(query);
                                doFetch(
                                    'http://localhost:5000/api/query',
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
                  
 
                        <p> <span><FaQuestionCircle/></span> Tip: If you choose to paste an image url, find an expensive textbook on amazon. Chances are it's in this dataset!</p>
                        
                
                    </div>
                    </div> 
                </div>
                    <div className='show-query-con'>
                        
                        {showImage ? (<div>
                            <h2>Query Image:</h2>
                            
                            {console.log(data)}
                            <img className='result-image' src={imq} alt="Query Image"/>
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
                    <li>Computer Vision with OpenCv</li>
                    <li>Machine Learning Techniques with Scikit-Learn (Kmeans, KNN, ANN, PCA)</li>
                    <li>Api developement</li>
                    <li>Fontend design with React, HTML, CSS</li>
                
                </ul>
                <hr></hr>
                <h2>Problem Statement</h2>
                <p>In this project, I addressed the problem of searching for similar images in a large data set. 
                    The program had to be scale and rotationally invarient and perform well with noise and weak lighting. 
                    This program had to perform in real time and be accurate enough to catch listings at different angles and in weak lighting. 
                    Also it had to perform on a 5 year old computer with 16GB of RAM.Example data sets that this will perform exceptionally well on are cd covers, dvd covers, paintings, book covers, other partial duplicate images
                Data sets that require detailed detection will perform worse, e.g face detection. </p>
                <hr></hr>
                <h2>Data Description</h2>
                <p> The book image dataset was collected by scraping Amazon. Around 15,000 books were found to reach my specific reselling criteria. The resulting dataset was then cleaned and bad images were removed. 
                    In order to keep the database up to date, Amazon is scraped monthly.</p>
                <hr></hr>

                <h2>Technical Overview</h2>
                <p> Without any prior knowlage of computer vision or machine learning, this project proposed a challange. Through a few weeks of research, I finally gained the knowlage to build this system.
                Images are resized and ran through OpenCv's detect and compute. Keypoints and Descriptors(SIFT) are then pickled(saved) for future use.
                PCA on the sift descriptors is recommended to reduce the dimentionality of the vector to 64.
                The new 64 length descriptors are fit into minibatch kmeans where a suggusted 128 clusters are used.
                The desciptors are again ran through the Vlad creation process to produce a single global descriptor for the image.
                In order to reduce the memory footprint, PCA is suggusted. They can be reduced to 128 dimentions with PCA without much loss of accuracy.
                The resulting VLADs are stored in Facebook's Faiss for fast approximate nearest neighbor search.
                At run time, the query image is ran through the same processing and quereied in Faiss.   
                Similar Images are returned and ran through one last accuracy ranking. For this, Knn and RANSAC are used.
                The final most similar images are returned. The query process takes around 1 second. 
                The back end rest api was created with Flask and the front end was created with React.
                </p>
           
                <hr></hr>
                <h2>Impact</h2>
                <p>Images are the strongest representaion of an online listing. So it was critical to have a way to look up an image when the text data was weak. 
                    This program in conjunction with my Book Finder program are at the core of my business and are responsible for hundreds of thousands in sales. </p>
                <hr></hr>
                <h2>Future Improvements</h2>
                <p>This implemenation does not use deep learning. It only uses Computer Vision and Machine Learning Techniques. Although not state of the art, it performs sufficient enough for my data.
                With forground extraction, we can denoise the image and focus only on the book. Background noise can significantly hurt its accuracy.
                In the future, I plan to use a pretrained CNN(MobileNet v2) and finetune it for my dataset. PCA has shown to reduce dimentions to 64 without much loss in accuracy. 
                    With greater accuracy and smaller memory footprint, this seems like the next way to go. The method could even be light enough to match images on the phone with Tenserflow Lite! </p>
                
                </div>
            </div>
        </>
    );
} 

export default LargeScaleImageSearch; 