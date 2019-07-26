import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    this.props.user = 'Lucian';
  }
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <p>Welcome {this.props.user}</p>
      </div>
    );
  }
}

export default Profile;
