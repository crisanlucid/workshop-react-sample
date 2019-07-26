import React from 'react';

class Authorisation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  onChangeHandler = e => {
    this.setState({
      username: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>Authorisation Form</h1>
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.onChangeHandler}
        />
        <button type='submit'>submit</button>
      </div>
    );
  }
}

export default Authorisation;
