import React from 'react';

class Authorisation extends React.Component {
  onChangeHandler = () => {};
  render() {
    return (
      <div>
        <h1>Authorisation Form</h1>
        <input
          type='text'
          name='username'
          value=''
          onChange={this.onChangeHandler}
        />
        <button type='submit'>submit</button>
      </div>
    );
  }
}

export default Authorisation;
