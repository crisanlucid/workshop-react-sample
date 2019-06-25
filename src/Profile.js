import React from 'react';
import {connect} from 'react-redux';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.user = 'Lucian';
  }
  render() {
    this.user = this.props.reduxUsername ? this.props.reduxUsername : this.user;
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
    reduxUsername: state.username,
  };
};
export default connect(mapProps)(Profile);
