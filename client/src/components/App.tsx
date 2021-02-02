import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

import { store } from '../store';

const App = () => {
  return (
      <div>
    <Provider store={store}>
        <Header />
        <Container />
        <Footer />
    </Provider>
      </div>
  );
};

export default App;
