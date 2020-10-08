import React from 'react'
import { useEffect } from 'react';
import './CryptoTradingBot.css';

import {
    FaGithub 
  } from 'react-icons/fa';

//Results
//My strategy went up 58% at an average return of +0.19% per trade. 
//Due to trading fees of -0.2%, I suffered an average loss of -.01% each trade. 
//Because my stategy was very short term, the price did not fluctuate enough for me to take home a big profit.  
function CryptoTradingBot() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className='crypto-trading-container'>
                <h1>Cryptocurrency Trading Bot (In Progress) <a target="_blank" rel="noopener noreferrer" href='https://github.com/rbrandt88'> <FaGithub className='social-media-icon-home' /> </a></h1> 
                <h3 className='project-tech'>Python</h3>
                <p><h4 className='project-brief'>Technologies: </h4> <span className='project-tech-text'> Pandas, Numpy, Scikit-Learn</span></p>
                <p><h4 className='project-brief'>Brief: </h4> Automatically buy and sell cryptocurrency based off of a custom strategy</p>

                <hr></hr>
                <h2>Key Features</h2>
                <ul>
                    <li>Buy/Sell Cryptocurrency on KuCoin</li>
                    <li>Historical Data</li>
                    <li>Backtest Function</li>
                    <li>Failure Handeler</li>
                    <li>Easy Swapping of Buy/Sell Strategies </li>
                
                </ul>
                <hr></hr>
                <h2>Key Learning Objectives</h2>
                <ul>
                    <li>Time series analysis with pandas</li>
                    <li>How markets work (Market, Limit , Liquidity, etc)</li>
                    <li>External Api</li>
                    <li>Safty Critical Systems</li>
                    <li>Modular Software Design</li>
                    <li>Exploratory Analysis</li>

                </ul>
                <hr></hr>
                <h2>Strategy Intuition</h2> 
                <p> According to coinmarketcap.com, the entire cryptocurrency market cap is $343 Billion. Of that $343 billion, bitcoin retains $200 Billion. 
                    It is also known that Bitcoin has a direct relationship with the rest of the market.  If it goes up, the rest of the market does. 
                    From this, I came up with the following hypothesis: "If Bitcoin is up, and the rest of the market is down, the market will trend up."
                </p>

                <hr></hr>
                <h2>Data Description</h2>
                <p> The hisorical data for each cryptocurrency was fetched by the KuCoin api and stored in separate csv files. 
                  
                </p>
                <hr></hr>
                <h2>Exploratory Analysis</h2>
                <p>Jupyter Notebook</p>
                <hr></hr>
                <h2>Technical Overview</h2>
                <p> 
                    Worked with the KuCoin api to make trades.
                </p>
                <hr></hr>
                <h2>Results</h2>
                <p> 
                </p>
       
                <hr></hr>
                <h2>Future Improvements</h2>
                <p></p>
                    
           
            
               
                
        
              
            </div>
        </>
    );
}

export default CryptoTradingBot; 