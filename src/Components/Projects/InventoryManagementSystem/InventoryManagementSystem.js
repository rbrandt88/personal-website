import React from 'react'
import { useEffect } from 'react';
import './InventoryManagementSystem.css';

import {
    FaGithub 
  } from 'react-icons/fa';

//<a target="_blank" rel="noopener noreferrer" href='https://github.com/rbrandt88'> <FaGithub className='social-media-icon-home' /> </a> 
function InventoryManagementSystem() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className='inventory-management-container'>
                <h1>Inventory/ Accounting Management System </h1>
                <h3 className='project-tech-text'>Python, Javascript (React), SQL, HTML, CSS </h3>
                <p><h4 className='project-brief'>Technologies: </h4>  <span className='project-tech-text'>React, PostgreSQL, Pandas, Flask</span></p>
                <p><h4 className='project-brief'>Brief: </h4>An end to end solution for Amazon inventory and accounting</p>
                <hr></hr>
                <h2>Key Features</h2>
                <ul>
                    <li>Fast inventory listing</li>
                    <li>Online marketplace order recording</li>
                    <li>Data storage in PostgreSQL</li>
                    <li>Custom repricing based on historic data</li>
                    <li>Business metric tracking (profit, inventory evaluation, etc)</li>
                 
                </ul>
                <hr></hr>
                <h2>Key Learning Objectives</h2>
                <ul>
                    <li>API developement</li>
                    <li>PostgreSQL and SQL queries</li>
                    <li>Font end design with React, HTML, CSS</li>
                    <li>Accounting</li>
             
                </ul>
                <hr></hr>
                <h2>Problem Statement</h2>
                <p>Inventory management is a time consuming task. First, online marketplace orders have to be recorded and tracked. Second, inventory is listed on Amazon and shipped to their warehouse.  
                    Lastly, it is repriced and recorded when it has sold. This solution addresses these probelems efficiently and effectively. </p>
                <hr></hr>
                <h2>Recording Orders</h2>
                <p>Unfortunately, many online marketplaces do not offer an API to the general public. To work around this, order data has to be scraped with Beautiful Soup and Selenium.
                    It is then cleaned and inserted into my PostgreSQL database. 
                </p>
                
                <hr></hr>
                <h2>Listing</h2>
                <p>Books are chosen from the database and formatted in a listing friendly csv file. The csv file is uploaded to Amazon and labels are created for each item. 
                    Finally, the items are packed into boxes and shipped off to Amazon's warehouses. 
                      </p>
                <hr></hr>
                <h2>Repricing</h2>
                <p>Typical repricing software only takes in the data from Amazon's API. This often doesn't include historic pricing data and seller stock numbers. 
                    In order to price an item most effectively, these statistics need to be factored in. This is exactly what my repricer does. It factors in all these variables and gives me a target price and target time to sell.
                </p>
                <hr></hr>
                <h2>Accounting and Business Metrics</h2>
                <p>Data is downloaded off of Amazon in text format. The text file is parsed, grouped by transaction and recorded in the database. 
                    Multiple stats functions are used to calculate key business metrics such as average profit, inventory evaluation, and marketplace profitability. 
                </p>
                <hr></hr>
                <h2>Impact</h2>
                <p>The whole process of my business is automated as much as possible. This frees up time and allows me to focus on other ideas. All the inventory data is held in one place, the PostgreSQL database. 
                 </p>
                <hr></hr>
                <h2>Future Improvements</h2>
                <p>In the future, I plan to implement a price predictor. It will take in attributes of a book and predict the selling price. For this, a simple logistic regression can be used. This could make my price predictions more accurate.  </p>

            
            </div>
        </>
    );
}

export default InventoryManagementSystem; 