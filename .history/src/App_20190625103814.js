import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import Authorisation from './Authorisation';
import Profile from './Profile';
class App extends React.Component {
  render() {
    return (
      <Provider store={}>
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
