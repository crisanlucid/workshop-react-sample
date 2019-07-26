import React from 'react';
import {connect} from 'react-redux';

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

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(this.state.username);
    //dispatch
  };
  render() {
    console.log('props', this.props);
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h1>Authorisation Form</h1>
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.onChangeHandler}
          />
          <button type='submit'>submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    usernameProp: state.username,
  };
};

cons mapDisp

export default connect(
    mapStateToProps,
  param2,
)(Authorisation);
