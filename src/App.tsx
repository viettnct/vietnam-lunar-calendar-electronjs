import React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import { Provider } from 'react-redux';
import Greetings from './components/Greetings';
import Home from './components/ReduxExamples/Home';
import Tailwind from './components/TailwindExamples';
import { createStore } from 'redux';
import { store } from './store/ExampleStore';
const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <>
      {/* <GlobalStyle />
      <Greetings /> */}
      {/* <Home /> */}
      <Tailwind />
    </>
  )
};

render(
  <Provider store={store}>
    <App />
  </Provider>
, mainElement);
