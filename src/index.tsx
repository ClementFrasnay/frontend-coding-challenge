import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MainPage } from './containers';
import GlobalStyle from './GlobalStyle';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <MainPage />
  </Provider>,
  document.getElementById('root')
);
