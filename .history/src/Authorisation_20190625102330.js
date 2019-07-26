import React from 'react';

class Authorisation extends React.Component {
  render() {
    return (
      <div>
        <h1>Authorisation Form</h1>
        <input type='text' name='username' value='' />
        <button type='submit'>submit</button>
      </div>
    );
  }
}

export default Authorisation;
