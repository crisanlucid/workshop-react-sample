import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    // app.post('/api/v1/superheroes', (req, res) => {}
    let url = 'http://localhost:8000/api/v1/superheroes';

    let data = {
      name: 'Thor',
    };

    let options = {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch(url, options).then();
  }

  render() {
    return <div>My App</div>;
  }
}

export default App;
