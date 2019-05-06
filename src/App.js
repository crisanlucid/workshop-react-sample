import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home'; 
import Contact from './Contact'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
