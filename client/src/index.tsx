import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';

import { debugContextDevtool } from 'react-context-devtool';

import { store } from './store';


const container = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  container
);

// Attach root container
debugContextDevtool(container, {debugContext:true, debugReducer:true});
// debugReducer 	boolean 	true 	enable/disable useReducer debug
// debugContext 	boolean 	true 	enable/disable context debug
// disable 	boolean 	false 	disable react-context-devtool including manual mode
// disableAutoMode 	boolean 	false 	disable auto mode only