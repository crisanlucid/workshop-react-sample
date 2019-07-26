import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

//defaultState =
const initState = {
  filter: 'SHOW_ALL',
  task: [
    {id: 1, title: 'Learn Redux', done: false},
    {id: 1, title: 'Learn React-Redux', done: false},
    {id: 1, title: 'Learn Hooks Redux', done: false},
  ],
};

//create action
const actionFilter = {
  type: 'CHANGE_FILTER',
  newFilter: 'SHOW_DONE',
};

//create reducers
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.newFilter,
      };

    default:
      return state;
  }
};

//create store
const store = createStore(reducer);

//display in the console
store.subscribe = () =>
  //dispatch

  ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
