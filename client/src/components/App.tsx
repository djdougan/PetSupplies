import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

import '../reset.css';
import '../App.css';

import { store } from '../state';

const App = () => {
  return (
    <div className='main'>
      <Provider store={store}>
        <Header />
        <Container />
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
