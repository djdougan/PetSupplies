import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer, Home, About, Products, Contact, AddNew } from './components';

import './reset.css';
import './App.css';
import SearchProvider from './context/AppContext';


const App = () => {
  
  return (
    <div className='main'>
      <SearchProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/products'>
              <Products />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/about'>
              <Contact />
            </Route>
            <Route path='/addnew'>
              <AddNew />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </SearchProvider>
    </div>
  );
};

export default App;
