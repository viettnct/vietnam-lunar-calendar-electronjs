import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/ExampleStore';
import {Main} from './components/Layout';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <>
      <Main/>
    </>
  )
};

render(
  <Provider store={store}>
    <App />
  </Provider>
, mainElement);
