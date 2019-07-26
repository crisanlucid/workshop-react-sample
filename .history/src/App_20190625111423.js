import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducers';

import Authorisation from './Authorisation';
import Profile from './Profile';

const store = createStore(reducer);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div>
            <Authorisation />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
