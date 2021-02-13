import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

import '../reset.css';
import '../App.css';

import { store } from '../store';

const App = () => {
  return (
    <div className='main'>
      <Router>
          <Header />
        <Provider store={store}>
          <Container />
        </Provider>
          <Footer />
      </Router>
    </div>
  );
};

export default App;
