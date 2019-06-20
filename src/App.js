import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    console.log('sss');
    console.log('sss_1');
    console.log('sss_2');
    console.log('sss_3');
    console.log('sss_4');
    console.log('sss_5');
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

    fetch(url, options)
      .then(data => JSON.parse(data))
      .then(res => {
        //setState
        return;
      })
      .catch();
  }

  render() {
    return <div>My App</div>;
  }
}

export default App;
