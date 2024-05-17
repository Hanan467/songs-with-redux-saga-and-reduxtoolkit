import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; 

import songsReducer from './songState';
import songSaga from './songSaga';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    songs: songsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga) 
});
saga.run(songSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
