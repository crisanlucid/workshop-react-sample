import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import Authorisation from './Authorisation';
import Profile from './Profile';
class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Authorisation />
        </div>
        <div>
          <Profile />
        </div>
      </div>
    );
  }
}

export default App;