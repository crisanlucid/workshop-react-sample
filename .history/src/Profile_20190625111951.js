import React from 'react';
import {connect} from 'react-redux';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.user = 'Lucian';
  }
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <p>Welcome {this.user}</p>
      </div>
    );
  }
}

const mapProps = state => {
  return {
    reduxUsername: state.user,
  };
};
export default connect()(Profile);
