import React from 'react';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import LargeScaleImageSearch from './Components/Projects/LargeScaleImageSearch/LargeScaleImageSearch';
import BookFinder from './Components/Projects/BookFinder/BookFinder';
import InventoryManagementSystem from './Components/Projects/InventoryManagementSystem/InventoryManagementSystem';
import RougeLikeGame from './Components/Projects/RougeLikeGame/RougeLikeGame';
import CryptoTradingBot from './Components/Projects/CryptoTradingBot/CryptoTradingBot';
import MyCompany from './Components/My Company/MyCompany';
import SignIn from './Components/SignIn/SignIn';
import Contact from './Components/Contact/Contact';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {


  
  return (
    <Router >

      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={Projects} />

        <Route path='/large-scale-image-search' component={LargeScaleImageSearch} /> 
        <Route path='/book-finder' component={BookFinder} /> 
        <Route path='/inventory-management-system' component={InventoryManagementSystem} /> 
        <Route path='/rouge-like-game' component={RougeLikeGame} /> 
        <Route path='/crypto-trading-bot' component={CryptoTradingBot} /> 

        <Route path='/brandts' component={MyCompany} />
        <Route path='/contact' component={Contact} />
        <Route path='/sign-in' component={SignIn}/>
        
      </Switch> 
      <Footer />
    </Router>
    
  );
}

export default App;
