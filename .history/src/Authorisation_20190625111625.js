import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './store/actions';

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
    this.props.onChangeUser(this.state.username);
    //dispatch
  };
  render() {
    console.log('Authorisation props', this.props);
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

const mapDispatchToProps = dispatch => {
  return {
    onChangeUser: user =>
      dispatch({type: actionTypes.UPDATE_USERNAME, newUsername: user}),
    onDeleteUser: userId =>
      dispatch({type: actionTypes.DELETE_USERNAME, id: userId}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Authorisation);
